<template>
	<Layout :portfolioNav="true">

		<div class="container py-5 terms"><h1>Term of Services</h1>

			<p class="my-5 py-5">Coming Soon</p></div>
	</Layout>
</template>
<script>
	import PostCard from '~/components/PostCard.vue'
	import config from 'config';
	import Hero from '~/components/Hero.vue'

	export default {
		metaInfo: {
			title: 'Terms of Service',
			meta: [
				{property: "og:type", content: 'article'},
				{property: "og:title", content: 'Terms - ' + config.name},
				{property: "og:description", content: config.desc},
				{property: "og:url", content: config.url},
				{property: "og:image", content: config.url + '/static-index.png'},
				{property: "twitter:card", content: "summary_large_image"},
				{property: "twitter:title", content: 'Terms - ' + config.name},
				{property: "twitter:description", content: config.desc},
				{property: "twitter:site", content: "@elementsworks"},
				{property: "twitter:creator", content: "@elementsworks"},
				{property: "twitter:image", content: config.url + 'static-index.png'},
			]
		},
		components: {
			PostCard,
			Hero
		},
		methods: {
			message: function (event) {
				FB.CustomerChat.show(true);
				FB.CustomerChat.update({
					logged_in_greeting: 'Seen something you like or what to chat about your next big project?',
					logged_out_greeting: 'Log in to chat with us about our portfolio or your next big project.',
					ref: this.type,
				});
			}
		}
	}
</script>

<style lang="scss">
	.privacy {
		a {
			font-weight: bold;
		}
	}
</style>
