<template>
	<div>
<!--		<div :class="'mb-4 card service-' + type">-->
<!--			<div class="card-header">-->
<!--			</div>-->
<!--			<div class="card-body">-->
<!--				<h3><span class="marks">//</span>{{title}}</h3>-->
<!--				<p class="pt-2">-->
<!--					{{text}}-->
<!--				</p>-->
<!--			</div>-->
<!--		</div>-->
	</div>
</template>

<script>
	export default {
		name: "Services",
		data() {
			return {
				clippedClass: {
					'hero-clipped': this.clipped
				},
				title: '',
				text: '',

			}
		},
		props: {
			// clipped: Boolean,
			type: String
		},
		mounted() {
			if (this.type === 'fitting') {
				this.title = "Tyre Fitting";
				this.text = "Here at A to B Tyres we take great care when handling and replacing they your tyres. We have a large stock of new tyres for you to pick from and we also fit part-worn tyres.";
			} else if (this.type === 'puncture') {
				this.title = "Puncture Repair";
				this.text = "Punctures are a nightmare, and have a nasty habit of happening when they are least convenient. If the repair is possible then it works out at a fraction of the cost of a new tyre.";
			} else if (this.type === 'balancing') {
				this.title = "Wheel Balancing";
				this.text = "To guarantee smooth running we balance your wheels to the tyres you have fitted. This is crucial for the normal wearing of your tyre so that it lasts its longest life possible.";
			} else if (this.type === 'checks') {
				this.title = "Type Checks";
				this.text = "Tyres are the most important part of your cars as they are what connects you to the road. That is why we offer a tyre checking service to make sure your tyres are performing at their optimal best.";
			} else if (this.type === 'pressure') {
				this.title = "Air Pressure";
				this.text = "Incorrect air pressure can cause abnormal wear on your tyres. At A to B Tyres we check and fill your tyres to the correct pressure as suggested by the manufacturer of your vehicle.";
			} else if (this.type === 'mobile') {
				this.title = "Mobile Fitting";
				this.text = "Often tyre problems strike at the most inconvenient moment, so at A to B Tyres we try to make tyre repair and fitting as convenient to you as possible by offering a mobile fitting service.";
			}
		}
	}
</script>
<style lang="scss">
	.services {
		.card {
			background: #FAFAFA;
			border: none;
			.card-header {
				min-height: 200px;
				border-bottom: 0;
			}
			.card-body {
				h3 {
					font-weight: bold;
					text-transform: uppercase;
					font-size: 20px;
				}
			}
			&.service-fitting {
				.card-header {
					background: url('~assets/img/service-fitting.png');
				}
			}
			$services: "fitting", "puncture", "balancing", "mobile", "checks", "pressure";
			@each $service in $services {
				&.service-#{$service} {
					.card-header { background: url('~assets/img/service-#{$service}.png') center / cover no-repeat; }
				}
			}
		}
	}
</style>
