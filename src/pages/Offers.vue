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
						<div class="col-lg-5 col-md-6 text-center card-offers">
							<a class="card" href="/offer/services">
								<div class="card-header">
									<img src="~/assets/img/qr-services.png" class="qr" alt="Public service employees offer">
								</div>
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
												20% off for public service employees. To Redeem, present your in-date
												employer ID
											</p>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-lg-5 col-md-6 text-center card-offers">
							<a class="card" href="/offer/student">
								<div class="card-header">
									<img src="~/assets/img/qr-student.png" class="qr" alt="Uni and College Students offer">
								</div>
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
												20% off for students. To Redeem, present your valid
												university or school ID card
											</p>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="col-lg-5 col-md-6 text-center card-offers">
							<a class="card" href="/offer/company">
								<div class="card-header">
									<img src="~/assets/img/qr-company.png" class="qr" alt="Company/work cars and vans offer">
								</div>
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
							</a>
						</div>
						<div class="col-lg-5 col-md-6 text-center card-offers">
							<a class="card" href="/offer/friend">
								<div class="card-header">
									<img src="~/assets/img/qr-friend.png" class="qr" alt="Recommend a friend offer">
								</div>
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
							</a>
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
			title: 'Offers',
			meta: [
				{property: "og:type", content: 'article'},
				{property: "og:title", content: 'Offers - ' + config.name},
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
					logged_in_greeting: 'Welcome to our offers page, let us know if you have any questions!',
					logged_out_greeting: "So you'd like to know about offers, log in to chat with us.",
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

					img {
						width: 30%;
						margin: 20px 20px 0;
						display: block;
					}
				}
				&:hover {
					text-decoration: none;
					box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
				}
				.card-body {
					text-decoration: none;
					color: #111 !important;
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

			&:nth-of-type(1), .card-Services {
				.card-header {
					background: url("~@/assets/img/deal-cyan-bars.png") right / contain no-repeat #fdfdfd;
				}
			}
			&:nth-of-type(2), .card-Student {
				.card-header {
					background: url("~@/assets/img/deal-blue-bars.png") right / contain no-repeat #fdfdfd;
				}
			}
			&:nth-of-type(3), .card-Company {
				.card-header {
					background: url("~@/assets/img/deal-green-bars.png") right / contain no-repeat #fdfdfd;
				}
			}
			&:nth-of-type(4), .card-Friend {
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
