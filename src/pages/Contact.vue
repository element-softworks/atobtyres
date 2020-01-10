<template>
	<Layout>
		<div class="contact-us">
			<Hero>
				<div class="row justify-content-between align-items-center">
					<div class="col-md-4 col-sm-8">
						<h1><span class="marks">//</span>Contact Us</h1>
						<p>
							We're friendly people wanting to help get you back on the road. Get in touch today to get
							your car booked in. We usually can do same day and next day fittings.
						</p>
					</div>
					<div class="col-md-3 col-sm-4">
						<g-image src="~/assets/img/about-us.png" class="img-fluid" />
					</div>
				</div>
			</Hero>
			<div class="offices">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-md-12">
							<h2 class="py-5">Ways to get in touch</h2>
						</div>

						<div class="col-md-4">
							<div class="card card-office content-box mb-4">
								<div class="card-body">
									<h3>Phone Us</h3>
									<h4>Speak to an expert</h4>
									<p class="card-text">
										Phoning us is the quickest and easiest way to get in touch with us to discuss
										tyre work.
									</p>
									<hr>
									<b>
										<br>
										01473 269030
									</b>
									<a href="tel:01473269030" target="_blank" class="btn btn-dark">Office</a>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card card-office content-box mb-4">
								<div class="card-body">
									<h3>Email Us</h3>
									<h4>Great for complex quotes</h4>
									<p class="card-text">
										Phoning us is always the best way to get in touch, but you can also reach us via
										email, we respond within 24 hours.
									</p>
									<hr>
									<b>
										<br>
										BSMYTHE@HOTMAIL.CO.UK
									</b>
									<a href="mailto:BSMYTHE@HOTMAIL.CO.UK" target="_blank"
									   class="btn btn-dark">Email</a>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card card-office content-box mb-4">
								<div class="card-body">
									<h3>Visit Us</h3>
									<h4>For your tyre fittings</h4>
									<p class="card-text">
										Once your tyres are delivered you can come in at a time convenient to yourself.
										We also have a number of tyres in stock.
									</p>
									<hr>
									<b style="font-size: 0.9rem;">
										Russell House, Elton Park Business Park,<br>Hadleigh Rd, Ipswich IP2 0DD
									</b>
									<a href="https://www.google.com/maps/dir/52.058529,1.125027" target="_blank"
									   class="btn btn-dark">Directions</a>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<ClientOnly>
				<GmapMap
						ref="mapRef"
						:center="{lat,lng}"
						:zoom="14"
						map-type-id="terrain"
						style="width: 100%; height: 400px"
						:options="{
						   zoomControl: true,
						   mapTypeControl: false,
						   scaleControl: false,
						   streetViewControl: false,
						   rotateControl: false,
						   fullscreenControl: false,
						   disableDefaultUi: true
						 }"
				>
					<GmapMarker
							:key="index"
							v-for="(m, index) in markers"
							:position="m.position"
							:clickable="true"
							:draggable="true"
							@click="center=m.position"
					/>
				</GmapMap>
			</ClientOnly>
		</div>
	</Layout>
</template>
<script>
	import config from 'config';
	import Hero from '~/components/Hero.vue'

	export default {
		metaInfo: {
			title: 'Contact',
			meta: [
				{property: "og:type", content: 'article'},
				{property: "og:title", content: 'Contact - ' + config.name},
				{property: "og:description", content: config.desc},
				{property: "og:url", content: config.url},
				{property: "og:image", content: config.url + 'static-contact.png'},
				{property: "twitter:card", content: "summary_large_image"},
				{property: "twitter:title", content: 'Contact - ' + config.name},
				{property: "twitter:description", content: config.desc},
				{property: "twitter:site", content: "@elementsworks"},
				{property: "twitter:creator", content: "@elementsworks"},
				{property: "twitter:image", content: config.url + 'static-contact.png'},
			]
		},
		components: {
			Hero
		},
		mounted: function () {
			console.log(this.lat, this.lng);

		},
		methods: {
			message: function (event) {
				FB.CustomerChat.show(true);
				FB.CustomerChat.update({
					logged_in_greeting: 'Got any questions or fancy a chat?',
					logged_out_greeting: 'Log in to chat with us.',
					ref: this.type,
				});
			},
			move(lat, lng) {
				console.log(lat, lng);
				this.lat = lat;
				this.lng = lng;
			}
		},
		data: function () {
			return {
				lat: 52.058529,
				lng: 1.125027,
				markers: [
					{
						position: {lat: 52.058529, lng: 1.125027},
						label: 'I',
						type: 'info'
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.animate {
		-webkit-transition: all 300ms linear;
		-moz-transition: all 300ms linear;
		-o-transition: all 300ms linear;
		-ms-transition: all 300ms linear;
		transition: all 300ms linear;
	}

	.contact-us {
		.offices {
			padding-bottom: 60px;
			.card-office {
				background: #efefef;
				border: 1px solid #efefef;
				text-align: center;
				/*border: none;*/
				.card-img-top {
					background: #ccc;
					/*min-height: 150px;*/
					width: 100%;
				}
				h3 {
					font-size: 20px;
					padding: 20px 0 0;
					font-weight: bold;
				}
				h4 {
					font-size: 16px;
					padding-bottom: 5px;
					font-weight: bold;
					opacity: 0.7;
				}
				.btn {
					padding: 10px 30px;
					font-weight: 400;
					text-transform: uppercase;
					margin-right: 5px;
					margin-left: 5px;
					margin-top: 23px;
					background: #111;
					border: 0;
					&:hover {
						color: white !important;
						background: #333;
					}
				}
				.card-body {
					padding-bottom: 50px;
					background: #f6f6f6;
					line-height: 30px;
					@extend .animate;

					b {
						display: block;
					}
				}
				.squiggle {
					padding-bottom: 10px;
				}
				p {
					/*opacity: 0.8;*/
				}
			}
			h1, h2, h3 {
				font-weight: bold;
			}
			.squiggle {
				max-width: 50px;
			}
		}
	}

	// Extra small devices (portrait phones, less than 576px)
	@media (max-width: 575.98px) {
		.contact-us {

			.offices .card-office {
				.card-body {
					max-height: 370px;
				}
			}
		}

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
