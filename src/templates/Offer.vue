<template>
	<Layout>
		<div class="offers">
			<Hero style="min-height: 200px;">
				<div class="row">
					<div class="col-12">
						<h1><span class="marks">//</span>Offer</h1>
					</div>
				</div>
			</Hero>
			<div class="container">
				<div class="mt-5 mb-3">
					<div class="row justify-content-center">
						<div class="col-md-12 text-center card-offers mb-3">
							Token ID: <b class="text-uppercase">{{token}}</b>
						</div>
						<div class="col-md-5 text-center card-offers">
							<div :class="'card card-' + $page.offer.title">
								<div class="card-header" style="min-height: 50px;"></div>
								<div class="card-body">
									<div class="row">
										<div class="col-md-5">
											<h2 class="marks">{{$page.offer.amount}}</h2>
										</div>
										<div class="col-md-7">
											<h4><span class="marks">//</span>{{$page.offer.displayTitle}}</h4>
										</div>
										<div class="col-md-12">
											<p>
												{{$page.offer.short}}
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

<page-query>
	query Offer($id: String!) {
	offer(id: $id) {
	title,
	id,
	short,
	amount,
	displayTitle
	}
	}

</page-query>

<script>
	import config from 'config';
	import Hero from '~/components/Hero.vue'
	import moment from 'moment';
	import hash from 'object-hash';


	export default {
		metaInfo: {
			title: 'Offer',
			meta: [
				{property: "og:type", content: 'article'},
				{property: "og:title", content: 'Offer - ' + config.name},
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
			this.token = hash(moment(new Date()).format("dddd, MMMM Do YYYY, h") + this.$page.offer.title).substr(0, 10);
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
				team: [],
				token: ''
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
