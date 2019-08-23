<template>
	<div>
	<div class="bg bg-grey">
		<div class="container">
			<div class="row justify-content-center contact-info">
				<div class="col-12">
					<h4 class="mb-4"><span class="marks">//</span>Got Questions?</h4>
				</div>
				<div class="col-md-3">
					<phoneSVG/>
					<div>01473 269030</div>
				</div>
				<div class="col-md-3">
					<mailSVG/>
					<div>BSMYTHE@HOTMAIL.CO.UK</div>
				</div>
				<div class="col-md-3">
					<mobileSVG/>
					<div>07384 928335</div>
				</div>
			</div>
		</div>
	</div>
	<footer>
		<div class="contain">
			<div class="row footer-row footer-company-details">
				<div class="col-md-6">
					<a class="footer-logo" href="/">
						<g-image src="~/assets/img/logo.png" />
					</a>
				</div>
				<div class="col-md-6 text-left text-md-right">
                    <p>
                        <g-link to="/terms">Terms & Conditions</g-link>
                        <g-link to="/privacy">Privacy Policy</g-link>
                    </p>
					<p>{{config.footer2}} - 2017-{{ new Date().getFullYear() }}<br> © Copyright, {{config.name}} Ltd.</p>
				</div>
			</div>
		</div>
	</footer>
	</div>
</template>

<static-query>
	{
	links: allPortfolioItem(filter: { published: { eq: true } }, limit: 5) {
	edges {
	node {
	title
	path
	}
	}
	},
	bloglinks: allBlogItem(filter: { published: { eq: true } }, limit: 3) {
	edges {
	node {
	title
	path
	}
	}
	}
	}

</static-query>

<script>
	import config from 'config';
	import phoneSVG from 'phone.svg'
	import mobileSVG from 'mobile.svg'
	import mailSVG from 'mail.svg'

	export default {
		name: "Footer",
		data: function() {
			return {
				config: {}
			}
		},
		computed: {
			fas() {
				return fas
			},
			faInstagram() {
				return faInstagram
			},
			faTwitter() {
				return faTwitter
			},
			faFacebookF() {
				return faFacebookF
			}
		},
		components: {
			phoneSVG,
			mailSVG,
			mobileSVG
		},
		mounted() {
			this.config = config;
		}
	}
</script>

<style lang="scss">
	.contact-info {
		text-align: center;
		font-weight: bold;
		svg {
			width: fit-content;
			margin: auto;
			margin-bottom: 5px;
			min-height: 50px;
		}
	}

	.bg {
		padding: 100px 0;
	}

	.bg-grey {
		background: #F5F5F5;
	}


	@media (max-width: 575.98px) {
		footer {
			.footer-content > * {
				margin: 15px 0 !important;
			}
		}
		.contact-info {
			.col-md-3 {
				margin-top: 30px;
			}
		}
	}
</style>
