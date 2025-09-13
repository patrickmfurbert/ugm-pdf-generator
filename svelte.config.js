import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import fs from 'fs-extra';
import path from 'path';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // Set a fallback file for SPA behavior
			precompress: false,
			strict: false,
			appDir: 'app' // Using 'app' without underscore
		}),
		paths: {
			base: '/ugm-pdf-generator', // Always use the base path, not just in production
		},
		prerender: {
			entries: ['*'], // Prerender all routes
			crawl: true,    // Enable crawling to find all routes
			handleHttpError: ({ path, referrer, message }) => {
				// Log the error but don't fail the build
				console.warn(`Prerendering error for ${path}: ${message}`);
				return;
			}
		}
	}
};

export default config;
