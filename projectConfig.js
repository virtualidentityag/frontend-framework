module.exports = {
	project: 'VIGulpFrontendBoilerplate',
	global: {
		resources: [
			'/resources'
		],
		tasks: {
			cleanCss: true,
			cssStats: true,
			sass: true,
			less: true,
			favicons: true,
			handlebars: true,
			iconfont: true,
			image: true,
			linting: true,
			markdown: false,
			uglify: true,
			webpack: true
		},
		externalResources: {
			"/resources": {
				'vi-css-helper': ['helper.css', 'print.css'],
				'jQuery.DebouncedResize': 'js/jquery.debouncedresize.js',
				'media-match': 'media.match.js',
				'conditional-resource-loader': 'src/resourceLoader.js',
				'jquery': 'dist/jquery.js',
				'jquery-migrate': 'dist/jquery-migrate.js',
				'enquire': 'dist/enquire.js',
				'jquery-debouncedwidth': 'js/jquery.debouncedwidth.js',
				'normalize.css': 'normalize.css',
				'handlebars': 'dist/handlebars.runtime.js',
				"jquery-accordion": ["dist/accordion.css", "dist/accordion.min.js"]
			}
		}
	}
};
