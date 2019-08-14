<template>
	<Layout :portfolioNav="true">
		<div v-if="$page.post">
			<div class="portfolio-header">
				<div class="container">
					<div class="row">
						<div class="col-md-4 portfolio-text">
							<h1>{{ $page.post.title }}</h1>
							<p>{{ $page.post.short}}</p>

							<PostMeta :post="$page.post"/>
							<PostTags :post="$page.post"/>
						</div>
						<div class="col-md-8">
							<g-image alt="Cover image" v-if="$page.post.image" class="img-fluid"
							         :src="$page.post.image"/>
						</div>
					</div>
				</div>
			</div>

			<div class="post content-box">
				<div class="post__header">
				</div>
				<div class="container">
					<div v-if="!isPast" class="coming-soon">
						<div>
							<p><b>
								Thanks for checking out our portfolio piece on {{$page.post.title}} through our new
								website.</b><br>
								Because of our new redesign, we're rewriting our portfolio pieces, releasing one each
								week
								via social media.
							</p>
							<p>Keep in touch on our <a href="https://instagram.com/elementsoftworks" target="_blank">Instagram</a>
								or <a href="https://facebook.com/elementsoftworks" target="_blank">Facebook</a> to see
								when we release the full case study on the {{$page.post.title}} site.</p>
						</div>
					</div>
					<div class="post__content" v-html="$page.post.content"/>


					<!--<div class="post__footer">-->
					<!--<PostTags :post="$page.post"/>-->
					<!--</div>-->
				</div>


			</div>
		</div>
		<div v-else class="py-5 container">
			<h2 class="py-5">Not found</h2>
		</div>

		<!--<div class="post-comments">-->
		<!--&lt;!&ndash; Add comment widgets here &ndash;&gt;-->
		<!--</div>-->

		<!--<Author class="post-author"/>-->
	</Layout>
</template>

<script>
	import PostMeta from '~/components/PostMeta';
	import PostTags from '~/components/PostTags';
	import Author from '~/components/Author.vue';
	import config from 'config';
	import moment from 'moment';

	export default {
		components: {
			Author,
			PostMeta,
			PostTags
		},
		mounted() {
			this.isPast = moment(new Date(this.$page.post.date)).isBefore(moment(new Date(), "day").add("days", "1"));
		},
		data: function () {
			return {
				isPast: false
			}
		},
		metaInfo() {
			// if ($page.post) {
				return {
					portfolioPost: true,
					title: this.$page.post.title,
					meta: [
						{
							name: 'description',
							content: this.$page.post.description
						},
						{property: "og:type", content: 'article'},
						{
							property: "og:title",
							content: this.$page.post.title + ' - Portfolio Showcase - ' + config.name
						},
						{property: "og:description", content: this.$page.post.short},
						{property: "og:url", content: config.url},
						{property: "og:image", content: config.url + this.$page.post.image.src},
						{property: "twitter:card", content: "summary_large_image"},
						{
							property: "twitter:title",
							content: this.$page.post.title + ' - Portfolio Showcase - ' + config.name
						},
						{property: "twitter:description", content: this.$page.post.short},
						{property: "twitter:site", content: "@elementsworks"},
						{property: "twitter:creator", content: "@elementsworks"},
						{property: "twitter:image", content: config.url + this.$page.post.image.src},

					]
				}
			// } else {
			// 	this.$router.push('/success');
			// }
		}
	}
</script>

<page-query>
	query Portfolio ($path: String!) {
	post: portfolioItem (path: $path) {
	title
	path
	date (format: "D. MMMM YYYY")
	timeToRead
	services {
	id
	title
	path
	}
	short
	content
	image (width: 1000)
	}
	}
</page-query>

<style lang="scss">
	@import '~assets/css/config';
	@import '~assets/css/includes/responsive';

	.portfolio-header {
		background: #f8f8f8;

		img {
			max-width: 100%;
			margin: 65px 10px;
			box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, .30), 1px 1px 15px 0 rgba(0, 0, 0, .3);
			// padding: 40px;
			border-radius: 7px;
			background: white;
		}
		.portfolio-text {
			padding: 150px 0;
		}

	}

	.post-title {
		padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
		text-align: center;
	}

	.post {

		&__content {
			padding: 100px 0;
			h2:first-child {
				margin-top: 0;
			}

			p {
				font-size: 16px;
			}
			p:first-of-type {
				font-size: 1.4em;
				color: var(--title-color);
			}

			img {
				width: calc(100% + var(--space) * 2);
				margin-left: calc(var(--space) * -1);
				display: block;
				max-width: none;
			}
		}
	}

	.post-comments {
		padding: calc(var(--space) / 2);

		&:empty {
			display: none;
		}
	}

	.post-author {
		margin-top: calc(var(--space) / 2);
	}

	.coming-soon {
		padding-top: 50px;
		> div {
			background: $colour-accent;
			padding: 60px 30px;

			@include laptop {
				padding: 60px 30px;
			}

			a {
				color: #111;
				font-weight: bold;
			}
		}
	}

	@media (max-width: 575.98px) {
		.portfolio-header {
			.portfolio-text {
				padding: 30px;
			}
			img {
				margin: 0;
				margin-bottom: 50px;
			}
		}
	}
</style>
