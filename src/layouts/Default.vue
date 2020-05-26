<template>
	<div id="app" v-bind:class="{ 'landing': $route.path == '/mobile-landing' }">
		<Navbar :portfolioNav="portfolioNav" />
		<main class="main">
			<slot/>

			<ClientOnly>
				<cookie-law v-on:accept="enableTracking" buttonClass="btn btn-success" :message="message">
				</cookie-law>
			</ClientOnly>
		</main>

		<Footer/>
	</div>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	import Navbar from '~/components/Navbar.vue'
	import Footer from '~/components/Footer.vue'
	import CookieLaw from 'vue-cookie-law'

	export default {
		props: {
			portfolioNav: {default: false}
		},
		components: {
			Logo,
			Navbar,
			CookieLaw,
			Footer
		},
		mounted() {
			if (process.isClient) {
				if (window.location.pathname.indexOf('/portfolio/') !== -1) {
					// this.portfolioPost = true;
				}
			}
		},
		beforeCreate() {
			if (process.isClient) {
				if (localStorage.getItem('cookie:accepted') === "true") {
					this.$ga.enable();
					this.$ga.event('page', 'loaded');


					var hostname = window.location.hostname;

					// console.log(window.location.pathname.includes('/portfolio/'));
					// console.log(process);

					if (hostname !== 'localhost') {
						window.fbAsyncInit = function () {
							FB.init({
								xfbml: true,
								version: 'v3.3'
							});
						};

						(function (d, s, id) {
							var js, fjs = d.getElementsByTagName(s)[0];
							if (d.getElementById(id)) return;
							js = d.createElement(s);
							js.id = id;
							js.src = 'https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js';
							fjs.parentNode.insertBefore(js, fjs);
						}(document, 'script', 'facebook-jssdk'));
					} else {
						console.log('Localhost detected. Facebook Messenger will not run.')
					}
				}
			}
		},
		methods: {
			disableTracking() {
				this.$ga.disable();
			},
			enableTracking() {
				console.log('tracking');
				this.$ga.enable();
				this.$ga.event('cookie', 'accept')
				window.fbAsyncInit = function () {
					FB.init({
						xfbml: true,
						version: 'v3.3'
					});
				};

				(function (d, s, id) {
					var js, fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) return;
					js = d.createElement(s);
					js.id = id;
					js.src = 'https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js';
					fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));

			}
		},
		data: function () {
			return {
				message: 'Our website uses cookies to ensure you get the best experience, specifically cookies are used for analytic purposes and to power the live chat.'
			}
		}
	}
</script>

<style lang="scss">
	.Cookie--base .Cookie__button {
		background: #5A2AB6;
		padding: .625em 3.125em;
		color: #fff;
		border-radius: 0;
		border: 0;
		font-size: 1em;
	}

	.__nuxt-error-page {
		position: relative;
		padding: 10rem 10px;
	}
</style>
