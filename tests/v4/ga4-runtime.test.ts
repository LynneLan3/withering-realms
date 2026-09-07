import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import { generateV4Standalone } from '../../scripts/v4/generate-v4';

const fixture = path.resolve('site-input/v4-example/site.json');

function run(destination: string, command: string, args: string[], env: NodeJS.ProcessEnv = {}) {
	const result = spawnSync(command, args, {
		cwd: destination,
		encoding: 'utf8',
		env: {
			...process.env,
			npm_config_audit: 'false',
			npm_config_fund: 'false',
			npm_config_update_notifier: 'false',
			...env,
		},
	});
	assert.equal(result.status, 0, `${command} ${args.join(' ')} failed:\n${result.stdout}\n${result.stderr}`);
	return result;
}

test('G027 V4 with MID injects GA4 runtime; without MID does not', { timeout: 300_000 }, () => {
	const workspace = mkdtempSync(path.join(os.tmpdir(), 'g027-v4-ga4-build-'));
	try {
		const withMidInput = path.join(workspace, 'with-mid.json');
		const withoutMidInput = path.join(workspace, 'without-mid.json');
		const base = JSON.parse(readFileSync(fixture, 'utf8'));
		writeFileSync(withMidInput, `${JSON.stringify({ ...base, analytics: { ga4MeasurementId: 'G-TEST123456' } })}\n`);
		writeFileSync(withoutMidInput, `${JSON.stringify(base)}\n`);

		const withMid = path.join(workspace, 'with-mid');
		const withoutMid = path.join(workspace, 'without-mid');
		generateV4Standalone(withMidInput, withMid);
		generateV4Standalone(withoutMidInput, withoutMid);

		assert.equal(readFileSync(path.join(withMid, '.env'), 'utf8').trim(), 'PUBLIC_GA_MEASUREMENT_ID=G-TEST123456');
		assert.equal(existsSync(path.join(withoutMid, '.env')), false);
		assert.match(readFileSync(path.join(withMid, 'astro.config.mjs'), 'utf8'), /gw-ga4-runtime/);
		assert.match(readFileSync(path.join(withMid, 'package.json'), 'utf8'), /"indexnow"/);
		assert.equal(existsSync(path.join(withMid, 'src/lib/indexnow.ts')), true);
		assert.doesNotMatch(readFileSync(path.join(withMid, 'src/pages/index.astro'), 'utf8'), /V4Analytics|gtag/);

		for (const destination of [withMid, withoutMid]) {
			run(destination, 'npm', ['install']);
			run(destination, 'npm', ['run', 'build'], { VERCEL_ENV: 'production' });
		}

		const withHtml = readFileSync(path.join(withMid, 'dist/index.html'), 'utf8');
		assert.match(withHtml, /G-TEST123456/);
		assert.match(withHtml, /googletagmanager\.com\/gtag\/js/);
		assert.match(withHtml, /gtag\('config'/);
		assert.match(withHtml, /outbound_click/);
		assert.equal((withHtml.match(/__gwGa4Bootstrapped/g) ?? []).length >= 1, true);
		assert.doesNotMatch(withHtml, /gtag\/js\?id=G-TEST123456[\s\S]*gtag\/js\?id=G-TEST123456/);

		const withoutHtml = readFileSync(path.join(withoutMid, 'dist/index.html'), 'utf8');
		assert.doesNotMatch(withoutHtml, /googletagmanager\.com\/gtag\/js/);
		assert.doesNotMatch(withoutHtml, /G-TEST123456/);
		assert.doesNotMatch(withoutHtml, /outbound_click/);

		// IndexNow CLI remains wired on the default standalone package.
		assert.match(JSON.parse(readFileSync(path.join(withMid, 'package.json'), 'utf8')).scripts.indexnow, /indexnow-submit/);
		assert.equal(readdirSync(path.join(withMid, 'src/pages')).every((name) => !name.includes('Analytics')), true);
	} finally {
		rmSync(workspace, { recursive: true, force: true });
	}
});
