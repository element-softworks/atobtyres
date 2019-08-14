<template>
	<div class="post-meta">
		<span v-if="isPast">Showcased {{ post.date }}. </span>
		<span v-else>To be showcased. </span>
		<template v-if="post.timeToRead">
			<strong>{{ post.timeToRead }} min read.</strong>
		</template>
	</div>
</template>

<script>
	import moment from 'moment';

	export default {
		props: ['post'],
		data: function () {
			return {
				isPast: false
			}
		},
		mounted() {
			this.isPast = moment(new Date(this.post.date)).isBefore(moment(new Date(), "day").add("days", "1"));
		}
	}
</script>

<style lang="scss">
	.post-meta {
		font-size: .8em;
		opacity: .8;
	}
</style>
