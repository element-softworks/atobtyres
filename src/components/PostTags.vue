<template>
	<div class="post-tags">
		<g-link class="post-tags__link" :class="'tag-' + tag.title" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
			<span>#</span> {{ tag.title }}
		</g-link>
	</div>
</template>

<script>
	export default {
		props: ['post'],
		data: function () {
			return {
				// setting: ''
			}
		},
		mounted() {
			// if (tag.title === 'essential') {
			// 	this.setting = tag.title;
			// }
		}
	}
</script>

<style lang="scss">
	.post-tags {
		margin: 1em 0 0;

		&__link {
			margin-right: .7em;
			font-size: .8em;
			/*color: currentColor;*/
			text-decoration: none;
			background-color: var(--bg-color);
			color: currentColor !important; //Todo: remove important;
			padding: .5em;
			border-radius: var(--radius);
		}
		.tag-Merlin {
			background-color: #5a2ab6;
			color: white !important;
		}
		/*.tag-Professional {*/
			/*background-color: #CE4EB8;*/
			/*color: white !important;*/
		/*}*/
		/*.tag-Commercial {*/
			/*background-color: #287EE5;*/
			/*color: white !important;*/
		/*}*/
		/*.tag-Essential, .tag-Professional, .tag-Commercial {*/
			/*&:after {*/
				/*content: ' Package';*/
			/*}*/
		/*}*/
	}
</style>
