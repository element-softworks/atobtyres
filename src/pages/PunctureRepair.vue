<template>
	<Layout>
		<div class="mobile-fitting">
			<Hero>
				<div class="row justify-content-between">
					<div class="col-md-8">
						<h1><span class="marks">//</span>Cheap local puncture repair.</h1>
						<p>
							Same day on-site £20 puncture repair, new valve and wheel balance for car and van tyres in
							Ipswich. Same day mobile puncture repair £30*
						</p>
						<a href="tel:01473269030" class="btn btn-dark">Call Us</a>
					</div>
				</div>
			</Hero>
			<div>
				<div class="container">
					<div class="row justify-content-center main-text">
						<div class="col-md-12">
							<h2><span class="marks">//</span>Easily Repaired</h2>
							<p>
								Punctures are a nightmare, and have a nasty habit of happening when they are least
								convenient. However, at A to B Tyres, we can carry out a puncture repair at our
								workshop. If the repair is possible then it works out at a fraction of the cost of a new
								tyre.
							</p>
						</div>
						<div class="col-md-12">
							<h2><span class="marks">//</span>Affordable</h2>
							<p>
								We are a family run business and we have over 40 years experience in fixing and
								replacing tyres of all sizes. We know how annoying tyre problems can be, and that's why
								we'd love to help, at a very affordable price in Ipswich, Suffolk.
							</p>
						</div>
						<div class="col-md-12 mb-3">
							<h2><span class="marks">//</span>More Options</h2>
							<p>
								However, not all punctures are repairable, and in most cases the damage will need to
								assessed by one of our technicians to see if it falls in line with British Standards.
								Our technician we strive to find a way to fix your problem, if your tyre cannot be
								repaired - we have a large number of tyres in stock, ready to replace your tyre.
							</p>
						</div>
					</div>
					<div class="row">
						<div class="col-md-4">
							<img class="img-fluid" src="~/assets/img/mobile-1.jpg" alt="We repair car and van tyres">
						</div>
						<div class="col-md-4">
							<img class="img-fluid" src="~/assets/img/mobile-2.jpg" alt="We fit new tyres on a range of vehicles">
						</div>
						<div class="col-md-4">
							<img class="img-fluid" src="~/assets/img/mobile-3.jpg" alt="We can also fix cracked rims and replace TPMS">
						</div>
						<div class="col-md-12">
							<b>
								*Call out charge may apply.
							</b>
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
	</Layout>
</template>
<script>
	import PostCard from '~/components/PostCard.vue';
	import config from 'config';
	import Hero from '~/components/Hero.vue'

	export default {
		metaInfo: {
			title: 'Mobile Fitting',
			meta: [
				{property: "og:type", content: 'article'},
				{property: "og:title", content: 'Mobile Fitting - ' + config.name},
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
			PostCard,
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
				lng: 1.135027,
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

	.mobile-fitting {
		.main-text {
			h2 {
				padding-top: 50px;
			}
			p {
				padding-bottom: 20px;
				font-size: 20px;
			}
		}
		img {
			margin: 20px 0;
		}

		b {
			text-align: center;
			margin: 20px auto;
			display: block;
			padding-bottom: 50px;
		}

		.btn-dark {
			float: left;
			&:hover {
				color: white !important;
			}
		}
	}


	// Extra small devices (portrait phones, less than 576px)
	@media (max-width: 575.98px) {
		.mobile-fitting {
			.main-text {
				p, h2 {
					padding: 0 30px;
				}
			}
			b {
				padding: 0 30px 20px;
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
