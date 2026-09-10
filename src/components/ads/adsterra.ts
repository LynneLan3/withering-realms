/**
 * Adsterra / Profitablerate monetization — soft runtime switches.
 *
 * Native Banner (mid-article): ADSTERRA_ENABLED
 * Social Bar / global AdScript: ADSTERRA_SOCIAL_BAR_ENABLED
 */

export const ADSTERRA_SITE_URL = 'https://withering-realms.vercel.app/';

/** Soft offline switch for Native Banner. false = no invoke.js, no AdSlot render. */
export const ADSTERRA_ENABLED = true;

/** Soft switch for Social Bar / global placement script (AdScript.astro). */
export const ADSTERRA_SOCIAL_BAR_ENABLED = true;

/** Native Banner invoke.js (Zone pl31266944). */
export const ADSTERRA_INVOKE_SRC =
	'https://pl31266944.profitableratecpmnetwork.com/f80af75770339884f9b2a033f8bbd2b4/invoke.js';

/** Native Banner container id. */
export const ADSTERRA_CONTAINER_ID = 'container-f80af75770339884f9b2a033f8bbd2b4';

/** AdSlot name / data-ad-slot value. */
export const ADSTERRA_SLOT_NAME = 'adsterra-native-banner';

/** Social Bar / global AdScript (Zone pl31266943). */
export const ADSTERRA_SOCIAL_BAR_SRC =
	'https://pl31266943.profitableratecpmnetwork.com/a5/8c/a7/a58ca72bb3a460cfad60bf4a34e4404e.js';

export function isAdsterraEnabled(): boolean {
	return ADSTERRA_ENABLED;
}

export function isAdsterraRuntimeEnabled(): boolean {
	return isAdsterraEnabled();
}

export function isAdsterraSocialBarEnabled(): boolean {
	return ADSTERRA_SOCIAL_BAR_ENABLED;
}

/** Social Bar only in production builds; client hostname check in AdScript. */
export function isAdsterraSocialBarRuntimeEnabled(): boolean {
	return isAdsterraSocialBarEnabled() && import.meta.env.PROD;
}
