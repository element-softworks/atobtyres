<template>
	<Layout :portfolioNav="true">
		<div class="blog-item">
			<div class="portfolio-header" v-if="$page.post.image"
			     :style="'background: url(' + $page.post.image.src +') center / cover'">
			</div>

			<div class="container">
				<div class="post blog-box">
					<div class="post__header">
						<h1>{{ $page.post.title }}</h1>
					</div>

					<div class="post__content" v-html="$page.post.content"></div>

					<div class="post-footer">
						<!--<p>{{ $page.post.short}}</p>-->

						<PostMeta :post="$page.post"/>
						<PostTags :post="$page.post"/>
					</div>

				</div>


			</div>
		</div>
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
			return {
				portfolioPost: true,
				title: this.$page.post.title,
				meta: [
					{
						name: 'description',
						content: this.$page.post.description
					},
					{property: "og:type", content: 'article'},
					{property: "og:title", content: this.$page.post.title + ' - Blog - ' + config.name},
					{property: "og:description", content: this.$page.post.short},
					{property: "og:url", content: config.url},
					{property: "og:image", content: config.url + this.$page.post.image.src},
					{property: "twitter:card", content: "summary_large_image"},
					{
						property: "twitter:title",
						content: this.$page.post.title + ' - Blog - ' + config.name
					},
					{property: "twitter:description", content: this.$page.post.short},
					{property: "twitter:site", content: "@elementsworks"},
					{property: "twitter:creator", content: "@elementsworks"},
					{property: "twitter:image", content: config.url + this.$page.post.image.src},

				]
			}
		}
	}
</script>

<page-query>
	query Blog ($path: String!) {
	post: blogItem (path: $path) {
	title
	path
	date (format: "D. MMMM YYYY")
	timeToRead
	tags {
	id
	title
	path
	}
	short
	description
	content
	image
	}
	}
</page-query>

<style lang="scss">
	@import '~assets/css/config';
	@import '~assets/css/includes/responsive';

	.blog-item {
		.portfolio-header {
			background: #f8f8f8;
			min-height: 850px;
			z-index: -2;
			position: relative;

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

		.blog-box {
			margin-top: -250px;
			background: white !important;
			position: relative;
			// margin: 0 auto;
			padding: 70px 100px 0;
			min-height: 230px;

			&:after {
				right: -5px;
				transform: rotate(5deg);
			}
			&:before {
				left: -5px;
				transform: rotate(-5deg);
			}

			&:after, &:before {
				content: "";
				position: absolute;
				top: 15px;
				z-index: -1;
				display: block;
				width: 20px;
				height: 200px;
				background: rgba(39, 44, 49, .15);
				filter: blur(5px);
			}
			img {
				max-width: 100%;
			}
		}
		.post__content {
			padding: 50px 0;
			p {
				// font-size: 18px;
				line-height: 1.8;
				&:first-of-type {
					// font-size: 23px;
				}

				a {
					font-weight: bold;
				}
			}
		}

		.post-footer {
			padding-bottom: 70px;
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
	}

	@media (max-width: 575.98px) {
		.blog-item {
			.portfolio-header {
				min-height: 230px;
				.portfolio-text {
					padding: 30px;
				}
			}

			.blog-box {
				margin-top: 0;
				padding: 50px 30px;
				.post__content {
					padding: 50px 0;
				}
				&:after, &:before {
					display: none;
				}
			}
		}
	}
</style>
