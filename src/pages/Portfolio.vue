<template>
	<Layout>
		<div class="portfolio">
			<Hero title="Our Portfolio">
				<p>
					We feel our portfolio is a true reflection on the varied skillset we can provide for
					you, from large scale applications to small business websites, we cater for all.
				</p>
			</Hero>

			<div class="contain portfolio-content">
				<div class="row">
					<div class="col-md-6" v-for="edge in $page.posts.edges" :key="edge.node.id">
						<PostCard class="item" :post="edge.node"/>
					</div>
				</div>
			</div>
			<div class="cta">
				<div class="contain">
					<div class="row">
						<div class="col-md-12">
							<h2>Like what we do?</h2>
							<h3>Let's make you a beautiful website, chat with us now.</h3>
							<a href="mailto:team@elementsoftworks.co.uk?subject=ES Portfolio Enquiry"
							   class="btn btn-primary">Email us</a>
							<a href="#" v-on:click="message" class="btn btn-secondary">Open chat</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>
<page-query>
	{
	posts: allPortfolioItem(filter: { published: { eq: true }}) {
	edges {
	node {
	id
	title
	path
	services {
	id
	title
	path
	}
	date (format: "D. MMMM YYYY")
	timeToRead
	short
	image (blur: 50, quality: 50)
	...on PortfolioItem {
	id
	title
	path
	}
	}
	}
	}
	}
</page-query>
<script>
	import PostCard from '~/components/PostCard.vue'
	import config from 'config';
	import Hero from '~/components/Hero.vue'

	export default {
		metaInfo: {
			title: 'Our Portfolio',
			meta: [
				{property: "og:type", content: 'article'},
				{property: "og:title", content: 'Our Portfolio - ' + config.name},
				{property: "og:description", content: config.desc},
				{property: "og:url", content: config.url},
				{property: "og:image", content: config.url + '/static-portfolio.png'},
				{property: "twitter:card", content: "summary_large_image"},
				{property: "twitter:title", content: 'Our Portfolio - ' + config.name},
				{property: "twitter:description", content: config.desc},
				{property: "twitter:site", content: "@elementsworks"},
				{property: "twitter:creator", content: "@elementsworks"},
				{property: "twitter:image", content: config.url + 'static-portfolio.png'},
			]
		},
		components: {
			PostCard,
			Hero,
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
	@import '~assets/css/config';

	.portfolio {
		background: #f8f8f8;
		.cta {
			background: white;
		}
		.post-card {
			background: white;
		}

		.portfolio-content {
			margin-top: $bsu * 2;
			margin-bottom: $bsu * 2;
		}
	}

	// Extra small devices (portrait phones, less than 576px)
	@media (max-width: 575.98px) {
		.jumbotron.jumbotron-second {
			padding-top: 50px !important;
			.intro {
				padding: 20px 0;
				h1 {
					padding-top: 0;
				}
			}
			img {
				padding-top: 100px !important;
				min-height: 300px;
			}
		}

		.portfolio {
			/*p {*/
				/*max-lines: 3;*/
			/*}*/

		}
	}

	// Small devices (landscape phones, less than 768px)
	@media (max-width: 767.98px) {

	}

	// Medium devices (tablets, less than 992px)
	@media (max-width: 991.98px) {

	}

	// Large devices (desktops, less than 1200px)
	@media (max-width: 1199.98px) {

	}
</style>
