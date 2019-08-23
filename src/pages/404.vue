<template>
	<Layout :portfolioNav="false">
		<div class="a404">
			<div class="container">
				<h1>404</h1>
				<h2>This was not the page you were looking for...</h2>
			</div>
		</div>
		<div class="cta">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2>Think this page should work?</h2>
						<h3>Let us know by getting in touch below, we'd really appreciate it!</h3>
						<a href="mailto:BSMYTHE@HOTMAIL.CO.UK?subject=Website Error"
						   class="btn btn-primary">Email us</a>
						<a href="#" v-on:click="message" class="btn btn-secondary">Open chat</a>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
	export default {
		name: "page404",
		methods: {
			message: function (event) {
				FB.CustomerChat.show(true);
				FB.CustomerChat.update({
					logged_in_greeting: 'Uh-oh, have you found something broken? Be a star and pop us a message so we can fix it.',
					logged_out_greeting: 'Uh-oh, have you found something broken? Be a star and pop us a message so we can fix it.',
					ref: this.type,
				});
			}
		}
	}
</script>

<style scoped>
	.a404 {
		background: #eee;
		padding: 100px 0;
	}
</style>
