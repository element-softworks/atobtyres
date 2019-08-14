<template>
	<Layout :portfolioNav="true">
		<div class="container">
			<h1 class="tag-title text-center space-bottom py-4">
				{{ $page.service.title }}
			</h1>

			<div class="posts">
				<PostCard v-for="edge in $page.service.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
			</div>
		</div>
	</Layout>
</template>

<page-query>
	query Service ($id: String!) {
	service (id: $id) {
	title
	belongsTo {
	edges {
	node {
	...on PortfolioItem {
	title
	path
	date (format: "D. MMMM YYYY")
	timeToRead
	short
	image (width: 860, blur: 10)
	content
	}
	}
	}
	}
	}
	}
</page-query>

<script>
	import Author from '~/components/Author.vue'
	import PostCard from '~/components/PostCard.vue'

	export default {
		components: {
			Author,
			PostCard
		},
		metaInfo: {
			title: 'Hello, world!'
		}
	}
</script>

<style lang="scss">

</style>

