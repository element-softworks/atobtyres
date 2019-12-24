<template>
	<div v-bind:class="{ 'portfolio-nav': portfolioNav}">
		<header v-bind:class="{
			'header-mobile-navigation-open': isMobileNavigationOpen,
			'header-mobile-navigation-opening': isMobileNavigationOpening,
			'header-mobile-navigation-closing': isMobileNavigationClosing
			}">
			<a class="header-logo" href="/">
				<g-image v-if="portfolioNav" src="~/assets/img/logo.png"/>
				<g-image v-else src="~/assets/img/logo-black.png"/>
<!--				<span>{{projectName}}</span>-->
			</a>

			<button class="header-mobile-navigation-toggle" type="button" @click="openMobileNavigation">
				<font-awesome icon="bars"/>
			</button>

			<nav @click="closeMobileNavigation">
				<button class="header-mobile-navigation-close" type="button" @click="closeMobileNavigation">
					<font-awesome icon="times" />
				</button>

				<ul>
					<li><g-link to="/" exact class="mobile-navigation-item">Home</g-link></li>
					<li><g-link to="/about">About</g-link></li>
					<li><g-link to="/offers">Offers</g-link></li>
					<li><g-link to="/mobile">Mobile Fitting</g-link></li>
					<li><g-link to="/contact">Contact Us</g-link></li>
				</ul>
			</nav>
		</header>
	</div>
</template>
<script>
	import config from 'config';

	export default {
		props: ['portfolioNav'],
		data: function () {
			return {
				isMobileNavigationOpen: false,
				isMobileNavigationOpening: false,
				isMobileNavigationClosing: false,
				projectName: ''
			}
		},
		methods: {
			openMobileNavigation() {
				document.body.classList.add('block-scroll');
				this.isMobileNavigationOpening = true;

				if (process.isClient) {
					setTimeout(() => this.isMobileNavigationOpen = true);
				} else {
					this.isMobileNavigationOpen = true;
				}
			},
			closeMobileNavigation() {
				// console.log("closeMobileNavigation");
				this.isMobileNavigationClosing = true;

				if (process.isClient) {
					document.body.classList.remove('block-scroll');
					setTimeout(() => {
						this.isMobileNavigationOpening = false;
						this.isMobileNavigationOpen = false;
						this.isMobileNavigationClosing = false;
					}, 300);
				} else {
					this.isMobileNavigationOpening = false;
					this.isMobileNavigationOpen = false;
					this.isMobileNavigationClosing = false;
				}
			}
		},
		mounted() {
			this.projectName = config.name;
		}
	}
</script>
