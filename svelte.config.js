import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
	kit: {
		paths: {
			base: dev ? '' : '/your-repo-name'
		},
		adapter: adapter({
			// default options are shown. You can customize them if needed.
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		})
	}
};
