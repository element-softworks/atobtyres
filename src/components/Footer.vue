<template>
	<footer>
		<div class="contain">
			<div class="row footer-row">
				<div class="col-md-12">
					<a class="footer-logo" href="/">
						<g-image src="~/assets/img/logo.png" />
						<span>{{config.name}}</span>
					</a>
				</div>
			</div>
			<div class="row footer-row footer-content">
				<div class="col-md-3 col-6">
					<dl>
						<dt>Latest projects</dt>
						<dd v-for="edge in $static.links.edges" :key="edge.node.id">
							<g-link :to="edge.node.path">{{edge.node.title}}</g-link>
						</dd>
					</dl>
				</div>
				<div class="col-md-3 col-6">
					<dl>
						<dt>Latest news</dt>
						<dd v-for="edge in $static.bloglinks.edges" :key="edge.node.id">
							<g-link :to="edge.node.path">{{edge.node.title}}</g-link>
						</dd>
					</dl>
				</div>
				<div class="col-md-3 col-6">
					<dl>
						<dt>Links</dt>
						<dd><g-link to="/">Home</g-link></dd>
						<dd><g-link to="/about">About</g-link></dd>
						<dd><g-link to="/blog">Blog</g-link></dd>
						<dd><g-link to="/portfolio">Portfolio</g-link></dd>
						<dd><g-link to="/contact">Contact</g-link></dd>
					</dl>
				</div>
				<div class="col-md-3 col-6">
					<dl>
						<dt>Our socials</dt>
						<dd>
							<a href="http://instagram.com/elementsoftworks" target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
								</svg>
								<span>Instagram</span>
							</a>
						</dd>
						<dd>
							<a href="http://facebook.com/elementsoftworks/" target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/>
								</svg>
								<span>Facebook</span>
							</a>
						</dd>
						<dd>
							<a href="https://www.linkedin.com/company/element-softworks-ltd" target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
								</svg>
								<span>Linkedin</span>
							</a>
						</dd>
					</dl>
				</div>
			</div>
			<div class="row footer-row footer-company-details">
				<div class="col-md-6">
					<p>{{config.footer1}}</p>
					<p>{{config.footer2}}</p>
				</div>
				<div class="col-md-6 text-left text-md-right">
                    <p>
                        <g-link to="/terms">Terms & Conditions</g-link>
                        <g-link to="/privacy">Privacy Policy</g-link>
                    </p>
					<p>© {{ new Date().getFullYear() }} Copyright, {{config.name}} Ltd.</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<static-query>
	{
	links: allPortfolioItem(filter: { published: { eq: true } }, limit: 5) {
	edges {
	node {
	title
	path
	}
	}
	},
	bloglinks: allBlogItem(filter: { published: { eq: true } }, limit: 3) {
	edges {
	node {
	title
	path
	}
	}
	}
	}

</static-query>

<script>
	import config from 'config';
	import {fas} from '@fortawesome/free-solid-svg-icons';
	import {faInstagram, faTwitter, faFacebookF} from '@fortawesome/free-brands-svg-icons';

	export default {
		name: "Footer",
		data: function() {
			return {
				config: {}
			}
		},
		computed: {
			fas() {
				return fas
			},
			faInstagram() {
				return faInstagram
			},
			faTwitter() {
				return faTwitter
			},
			faFacebookF() {
				return faFacebookF
			}
		},
		mounted() {
			this.config = config;
		}
	}
</script>

<style scoped lang="scss">

	@media (max-width: 575.98px) {
		footer {
			.footer-content > * {
				margin: 15px 0 !important;
			}
		}
	}
</style>
