<template>
	<Layout>
		<div class="contact-us">
			<Hero title="Contact">
				<HeroGraphic slot="graphic"/>

				<p>
					We're friendly people! So please get in touch if you want to know more about any of
					our services that we offer or if you want some relevant advice.
				</p>
			</Hero>
			<div class="offices">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-md-12">
							<h2 class="py-5">Where we work from</h2>
						</div>

						<div class="col-md-4" v-for="office in offices" :key="office.name">
							<div class="card card-office content-box mb-4">
								<g-image src="~/assets/img/office-ipswich.png" v-if="office.name === 'Ipswich'"
								         class="card-img-top" alt="..."/>

								<g-image src="~/assets/img/office-myrtlebeach.png" v-if="office.name === 'Myrtle Beach'"
								         class="card-img-top" alt="..."/>

								<g-image src="~/assets/img/office-austin.png" v-if="office.name === 'Houston'"
								         class="card-img-top" alt="..."/>
								<div class="card-body">
									<h3>{{office.name}}</h3>
									<h4>{{office.position}}</h4>

									<img src="/squiggle.svg" class="squiggle mb-3 mt-1">
									<p class="card-text" v-html="office.text1"></p>
									<a :href="'https://www.google.com/maps/dir/' + office.lat + ',' + office.lng"
									   target="_blank"
									   class="btn btn-warning">Directions</a>
									<div v-on:click="move(office.lat, office.lng)"
									     class="btn btn-warning">View on Map
									</div>
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
						:zoom="16"
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
							icon="http://localhost:8080/assets/static/src/assets/img/logo.png?width=30"
							@click="center=m.position"
					/>
				</GmapMap>
			</ClientOnly>
			<div class="cta">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<h2>How can we help?</h2>
							<h3>It might be easier than you think. Get in touch today.</h3>
							<a href="mailto:team@elementsoftworks.co.uk?subject=ES Contact Enquiry"
							   class="btn btn-primary">Email us</a>
							<a href="#" v-on:click="message" class="btn btn-secondary">Open chat</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>
<script>
	import PostCard from '~/components/PostCard.vue';
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
				lat: 52.0531,
				lng: 1.1632,
				markers: [
					{
						position: {lat: 52.053760, lng: 1.164046},
						label: 'I',
						type: 'info'
					}, {
						position: {lat: 33.708426, lng: -78.982045},
						label: 'M'
					}, {
						position: {lat: 29.808840, lng: -95.569878},
						label: 'A'
					}
				],
				offices: [
					{
						name: "Ipswich",
						position: "Main Office",
						text1: "Ipswich Waterfront Innovation Centre<br>The Atrium, UoS<br> Ipswich, Suffolk<br>IP4 1QJ, United Kingdom",
						lat: 52.053760,
						lng: 1.164046,
					},
					{
						name: "Myrtle Beach",
						position: "Forge Office",
						text1: "Forge Relations<br>Forestbrook Rd,<br>Myrtle Beach, South Carolina,<br>29588, United States",
						lat: 33.708426,
						lng: -78.982045,
					},
					{
						name: "Houston",
						position: "Skipper Office",
						text1: "The Cannon,<br>1336 Brittmoore Rd,<br>Houston, Texas,<br> 77043, United States",
						lat: 29.808840,
						lng: -95.569878
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
					padding: 10px 20px;
					margin-right: 5px;
					margin-left: 5px;
					margin-top: 23px;
				}
				.card-body {
					padding-bottom: 50px;
					max-height: 300px;
					overflow: hidden;
					background: #f6f6f6;
					line-height: 30px;
					@extend .animate;
				}
				&:hover {
					.card-body {
						max-height: 400px;
						overflow: hidden;
						margin-top: -100px;
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
				&:hover {
					.card-body {
						max-height: 370px;
						overflow: hidden;
						margin-top: 0;
					}
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
