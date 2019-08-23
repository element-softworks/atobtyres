<template>
	<Layout>
		<div class="offers">
			<Hero>
				<div class="row justify-content-between">
					<div class="col-md-4 col-sm-6">
						<h1><span class="marks">//</span>Offers</h1>
						<p>
							Scan the QR code or follow through the link, print out the offer page and bring it to your
							next purchase as A to B Tyres.
						</p>
					</div>
					<div class="col-md-6 col-sm-6">
						<g-image src="~/assets/img/offers.png" class="img-fluid" style="margin: -50px;"/>
					</div>
				</div>
			</Hero>


			<div class="container">
				<div class="bg">
					<div class="row justify-content-center">
						<div class="col-md-5 text-center card-offers">
							<div class="card">
								<div class="card-header"></div>
								<div class="card-body">
									<div class="row">
										<div class="col-md-5">
											<h2 class="marks">20%</h2>
										</div>
										<div class="col-md-7">
											<h4><span class="marks">//</span>Public service employees</h4>
										</div>
										<div class="col-md-12">
											<p>
												20% off for public service employees. To Reedem, present your in-date
												employer ID
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-5 text-center card-offers">
							<div class="card">
								<div class="card-header"></div>
								<div class="card-body">
									<div class="row">
										<div class="col-md-5">
											<h2 class="marks">20%</h2>
										</div>
										<div class="col-md-7">
											<h4><span class="marks">//</span>Uni and College Students</h4>
										</div>
										<div class="col-md-12">
											<p>
												20% off for students. To Reedem, present your valid
												university or school ID card
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-5 text-center card-offers">
							<div class="card">
								<div class="card-header"></div>
								<div class="card-body">
									<div class="row">
										<div class="col-md-5">
											<h2 class="marks">£££</h2>
										</div>
										<div class="col-md-7">
											<h4><span class="marks">//</span>Company/work cars and vans</h4>
										</div>
										<div class="col-md-12">
											<p>
												Discounted rates for company vehicles, get in touch in advance
												to discuss options
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-5 text-center card-offers">
							<div class="card">
								<div class="card-header"></div>
								<div class="card-body">
									<div class="row">
										<div class="col-md-5">
											<h2 class="marks">10%</h2>
										</div>
										<div class="col-md-7">
											<h4><span class="marks">//</span>Recommend a friend</h4>
										</div>
										<div class="col-md-12">
											<p>
												Receive 10% off your next tyre by telling us who you referred
												to us on your next visit
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
	import config from 'config';
	import Hero from '~/components/Hero.vue'

	export default {
		metaInfo: {
			title: 'About Us',
			meta: [
				{property: "og:type", content: 'article'},
				{property: "og:title", content: 'About Us - ' + config.name},
				{property: "og:description", content: config.desc},
				{property: "og:url", content: config.url},
				{property: "og:image", content: config.url + 'static-about.png'},
				{property: "twitter:card", content: "summary_large_image"},
				{property: "twitter:title", content: 'About Us - ' + config.name},
				{property: "twitter:description", content: config.desc},
				{property: "twitter:site", content: "@elementsworks"},
				{property: "twitter:creator", content: "@elementsworks"},
				{property: "twitter:image", content: config.url + 'static-about.png'},
			]
		},
		components: {
			Hero
		},
		mounted() {
		},
		methods: {
			message: function () {
				FB.CustomerChat.show(true);
				FB.CustomerChat.update({
					logged_in_greeting: 'Welcome to our about page, let us know if you have any questions!',
					logged_out_greeting: "So you'd like to know more about us, log in to chat with us.",
					ref: this.type,
				});
			},
		},
		data: function () {
			return {
				team: []
			}
		},
	}
</script>
<style lang="scss">
	@import '~assets/css/config';
	@import '~assets/css/includes/responsive';
	@import '~assets/css/includes/layout';

	.animate {
		-webkit-transition: all 300ms linear;
		-moz-transition: all 300ms linear;
		-o-transition: all 300ms linear;
		-ms-transition: all 300ms linear;
		transition: all 300ms linear;
	}

	.offers {
		.bg {
			padding: 100px 0;
		}
		.card-offers {
			.card {
				border: none;
				box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
				margin-bottom: 30px;
				.card-header {
					min-height: 180px;
					background: #fdfdfd;
					border-radius: 0;
					border: 0;
				}
				.card-body {
					background: #FAFAFA;
					h2 {
						font-size: 50px;
						margin: 0;
					}
					h4 {
						font-weight: 900;
						font-size: 21px;
						text-align: left;
					}
					p {
						text-transform: uppercase;
						opacity: 0.7;
					}
					.row {
						padding: 0 15px;
						> div {
							padding: 0;

						}
					}
				}
			}

			&:nth-of-type(1) {
				.card-header {
					background: url("~@/assets/img/deal-cyan-bars.png") right / contain no-repeat #fdfdfd;
				}
			}
			&:nth-of-type(2) {
				.card-header {
					background: url("~@/assets/img/deal-blue-bars.png") right / contain no-repeat #fdfdfd;
				}
			}
			&:nth-of-type(3) {
				.card-header {
					background: url("~@/assets/img/deal-green-bars.png") right / contain no-repeat #fdfdfd;
				}
			}
			&:nth-of-type(4) {
				.card-header {
					background: url("~@/assets/img/deal-yellow-bars.png") right / contain no-repeat #fdfdfd;
				}
			}
		}
	}

	// Extra small devices (portrait phones, less than 576px)
	@media (max-width: 575.98px) {

	}

	// Small devices (landscape phones, less than 768px)
	@media (max-width: 767.98px) {

	}

	// Medium devices (tablets, less than 992px)
	@media (max-width: 991.98px) {

	}

	// Large devices (desktops, less than 1200px)
	@media (max-width: 1199.98px) {

	}
</style>
