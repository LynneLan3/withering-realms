import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

/**
 * G027 V4 GA4 runtime — presentation-independent.
 * Injected via Astro config so V4→V5 UI page swaps do not drop analytics.
 * Sole create-path input is PUBLIC_GA_MEASUREMENT_ID (from analytics.ga4MeasurementId).
 * No Measurement ID → no script injection; builds remain valid.
 */
function gwGa4Runtime() {
	return {
		name: 'gw-ga4-runtime',
		hooks: {
			'astro:config:setup'({ injectScript, command }) {
				const env = { ...loadEnv(process.env.NODE_ENV ?? '', process.cwd(), ''), ...process.env };
				const measurementId = String(env.PUBLIC_GA_MEASUREMENT_ID || '').trim();
				if (!measurementId || !/^G-[A-Z0-9]+$/.test(measurementId)) return;
				if (command === 'dev') return;
				const vercelEnv = String(env.VERCEL_ENV || '').trim();
				if (vercelEnv && vercelEnv !== 'production') return;
				const idLiteral = JSON.stringify(measurementId);
				injectScript(
					'head-inline',
					`(function(){if(window.__gwGa4Bootstrapped)return;window.__gwGa4Bootstrapped=true;var measurementId=${idLiteral};window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};if(!document.querySelector('script[data-gw-ga4-bootstrap]')){var s=document.createElement('script');s.async=true;s.dataset.gwGa4Bootstrap='true';s.src='https://www.googletagmanager.com/gtag/js?id='+measurementId;document.head.appendChild(s);}window.gtag('js',new Date());window.gtag('config',measurementId);document.addEventListener('click',function(event){var target=event.target;if(!target||!target.closest)return;var anchor=target.closest('a[href]');if(!anchor)return;var href=anchor.href||'';if(!href||href.indexOf(location.origin)===0)return;if(typeof window.gtag!=='function')return;window.gtag('event','outbound_click',{link_url:href,link_domain:(function(){try{return new URL(href).hostname;}catch(e){return'';}})(),link_text:(anchor.textContent||'').trim().slice(0,100),transport_type:'beacon'});},true);})();`,
				);
			},
		},
	};
}

export default defineConfig({
	site: process.env.SITE_URL ?? 'http://localhost:4321',
	integrations: [sitemap(), gwGa4Runtime()],
});
