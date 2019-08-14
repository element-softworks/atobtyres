<template>
	<Layout>
		<Hero clipped title="Index Page">
			<p>
				Content
			</p>
			<g-link to="/portfolio" class="btn btn-light">View our work</g-link>
		</Hero>
		<div class="container">
			<h1 class="py-5">Content</h1>
		</div>
	</Layout>
</template>

<script>
	import config from 'config';
	import Hero from '~/components/Hero.vue'

	export default {
		metaInfo: {
			title: 'Home',
			meta: [
				{property: "og:type", content: 'article'},
				{property: "og:title", content: 'Home - ' + config.name},
				{property: "og:description", content: config.desc},
				{property: "og:url", content: config.url},
				{property: "og:image", content: config.url + 'static-index.png'},
				{property: "twitter:card", content: "summary_large_image"},
				{property: "twitter:title", content: 'Home - ' + config.name},
				{property: "twitter:description", content: config.desc},
				{property: "twitter:site", content: "@elementsworks"},
				{property: "twitter:creator", content: "@elementsworks"},
				{property: "twitter:image", content: config.url + 'static-index.png'},
			]

		},
		components: {
			Hero
		},
		methods: {

			message: function (event) {
				FB.CustomerChat.show(true);
				FB.CustomerChat.update({
					logged_in_greeting: 'Welcome to our homepage, let us know if you have any questions!',
					logged_out_greeting: 'Welcome to our site, log in to chat with us.',
					ref: this.type,
				});
			},
		},
		created() {
		},
		destroyed() {
		}
	}
</script>

<style lang="scss">
	@import '~assets/css/config';
	@import '~assets/css/includes/responsive';
	@import '~assets/css/includes/layout';

	h1, h2 {
		font-weight: bold;
		@extend .animate;
		&:hover {
			color: red;
		}
	}
</style>
