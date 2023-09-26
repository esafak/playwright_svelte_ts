import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import {vitePreprocess} from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	// preprocess: [{ script: console.log }, vitePreprocess(), { script: console.log }],
	// preprocess: [{ script: console.log }, preprocess(), { script: console.log }],
	preprocess: preprocess(),
	// preprocess: vitePreprocess(),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};
