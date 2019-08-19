// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// const merge = require('webpack-merge');
// const customWebpackConfig = require('./webpack.config.js');
const path = require('path');

module.exports = {
	siteName: 'A to B Tyres Ltd',
	siteDescription: 'A to B Tyres Ltd is a family run business based in Ipswich suppling, fitting and repairing Tyres for Cars, Vans and 4x4\'s. We offer a friendly and professional service supplying and fitting tyres in Ipswich Suffolk.',

	plugins: [
		{
			// Create posts from markdown files
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'PortfolioItem',
				path: 'content/posts/*.md',
				route: '/portfolio/:slug',
				refs: {
					// Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
					services: {
						typeName: 'Service',
						route: '/service/:id',
						create: true
					}
				}
			}
		},
		{
			// Create posts from markdown files
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'BlogItem',
				path: 'content/blogs/*.md',
				route: '/blog/:slug',
				refs: {
					// Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
					tags: {
						typeName: 'Tag',
						route: '/tag/:id',
						create: true
					}
				}
			}
		},
		{
			use: '@gridsome/plugin-google-analytics',
			options: {
				id: 'UA-51274020-7',
				disabled: true,
				debug: {
					// enabled: true,
					// trace: true,
					sendHitTask: true
				}
			}
		}
	],

	transformers: {
		//Add markdown support to all file-system sources
		remark: {
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
			anchorClassName: 'icon icon-link',
			plugins: [
				'@gridsome/remark-prismjs'
			]
		}
	},

	chainWebpack: config => {
		config.module.rules.delete("svg");
	},

	configureWebpack: {
		resolve: {
			modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'static')],
			alias: {
				config: path.resolve(__dirname, 'config.json')
			}
		},
		module: {
			rules: [
				{
					test: /\.svg$/,
					use: ['vue-svg-loader'],
				},
			],
		},
	}
}
