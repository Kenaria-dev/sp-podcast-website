import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
	kit: {
		paths: {
			base: dev ? '' : '/sp-podcast-website'
		},
		adapter: adapter({
			// default options are shown. You can customize them if needed.
			pages: 'build',
			assets: 'build',
			strict: false,
			precompress: false
		})
	}
};
