<template>
	<div>
		<div class="post-card content-box" v-if="landscape" :class="{'post-card--has-poster' : post.poster}">
			<div class="row">
				<div class="col-md-5 post-card__header" v-if="post.image"
				     :style="'background: url(' + post.image.src +') center / 110%'"
				     v-bind:class="{ 'full-image': post.image_nopadding}">
				</div>
				<div class="post-card__content col-md-7">
					<h2 class="post-card__title" v-if="post && post.title" v-html="post.title"></h2>
					<div class="post-card__description" v-if="post && post.short" v-html="post.short"></div>

					<PostMeta class="post-card__meta" :post="post"/>
					<PostTags class="post-card__tags" :post="post"/>

					<g-link class="post-card__link" :to="post.path">Link</g-link>
				</div>
			</div>
		</div>
		<div class="post-card content-box" v-else :class="{'post-card--has-poster' : post.poster}">
			<div class="post-card__header" v-if="post.image"
			     :style="'background: url(' + post.image.src +') center / 110%'"
			     v-bind:class="{ 'full-image': post.image_nopadding}">
			</div>
			<div class="post-card__content">
				<h2 class="post-card__title" v-if="post && post.title"  v-html="post.title"></h2>
				<div class="post-card__description" v-if="post && post.short"  v-html="post.short"></div>

				<PostMeta class="post-card__meta" :post="post"/>
				<PostTags class="post-card__tags" :post="post"/>

				<g-link class="post-card__link" :to="post.path">Link</g-link>
			</div>
		</div>
	</div>
</template>

<script>
	import PostMeta from '~/components/PostMeta'
	import PostTags from '~/components/PostTags'

	export default {
		components: {
			PostMeta,
			PostTags
		},
		props: ['post', 'landscape'],
		mounted() {
			if (this.post.description && this.post.description.length > 200) {
				this.post.description = this.post.description.substr(0, 200) + '...';
			} else if (this.post.description && this.post.description.length < 50) {
				this.post.description += '<br><br><br>';
			}
		}
	}
</script>

<style lang="scss">
	.animate {
		-webkit-transition: all 300ms linear;
		-moz-transition: all 300ms linear;
		-o-transition: all 300ms linear;
		-ms-transition: all 300ms linear;
		transition: all 300ms linear;
	}

	.content-box {
		background-color: var(--bg-content-color);
		/*max-width: var(--content-width);*/
		margin: 0 auto;
		transition: background-color .6s;
		padding: var(--space);
		border-radius: var(--radius);
		box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, .02), 1px 1px 15px 0 rgba(0, 0, 0, .03);
		transition: transform .3s, background-color .3s, box-shadow .6s;
	}

	.post-card {
		margin-bottom: var(--space);
		position: relative;
		margin-bottom: 30px;

		&__header {
			margin-left: calc(var(--space) * -1);
			margin-right: calc(var(--space) * -1);
			margin-bottom: calc(var(--space) / 2);
			margin-top: calc(var(--space) * -1);
			overflow: hidden;
			border-radius: var(--radius) var(--radius) 0 0;
			min-height: 250px;
			@extend .animate;

			/*&:empty {*/
			/*display: none;*/
			/*}*/
		}

		&__image {
			max-width: 70%;
			margin: 40px auto;
			display: block;
			box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, .30), 1px 1px 15px 0 rgba(0, 0, 0, .3);
			@extend .animate;
		}
		.full-image {
			max-height: 267px;
			.post-card__image {
				max-width: 100%;
				margin: 0;
			}
		}

		&__title {
			margin-top: 0;
		}

		&__content {
			padding: 40px;
		}

		&:hover {
			// transform: translateY(-5px);
			box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, .1);
			.post-card {
				&__header {
					background-size: 100% !important;
				}
				&__image {
					margin: 33px auto;
					max-width: 75%;
				}
			}

			.full-image {
				overflow: hidden;
				// background: red;
				.post-card__image {
					max-width: 110% !important;
					margin: auto;
					margin-left: -25px;
					margin-top: -20px;
					// background: red;
				}
			}
		}

		&__tags {
			z-index: 1;
			position: relative;
		}

		&__link {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			opacity: 0.0;
			overflow: hidden;
			text-indent: -9999px;
			z-index: 0;
			&:hover {
				cursor: pointer;
			}
		}
	}
</style>
