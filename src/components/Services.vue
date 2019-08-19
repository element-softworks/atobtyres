<template>
	<!--<div class="hero" v-bind:class="clippedClass">-->
	<!--<div class="hero-container" v-scroll-reveal>-->
	<!--&lt;!&ndash;<div class="hero-graphic">&ndash;&gt;-->
	<!--&lt;!&ndash;<slot name="graphic"></slot>&ndash;&gt;-->
	<!--&lt;!&ndash;</div>&ndash;&gt;-->
	<!--<div class="hero-content">-->
	<!--<h1 v-html="title"></h1>-->
	<!--<slot></slot>-->
	<!--</div>-->
	<!--</div>-->
	<!--</div>-->
	<div>
		<div :class="'mb-4 card service-' + type">
			<div class="card-header">
			</div>
			<div class="card-body">
				<h3><span class="marks">//</span>{{title}}</h3>
				<p class="pt-2">
					{{text}}
				</p>
			</div>
		</div>
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
				this.title = "Type Fitting";
				this.text = "Monotonectally innovate progressive manufactured products via ubiquitous opportunities. Credibly evisculate web-enabled core competencies without go forwardniche.";
			} else if (this.type === 'puncture') {
				this.title = "Puncture Repair";
				this.text = "Monotonectally innovate progressive.";
			} else if (this.type === 'balancing') {
				this.title = "Wheel Balancing";
				this.text = "Monotonectally innovate progressive.";
			} else if (this.type === 'checks') {
				this.title = "Type Checks";
				this.text = "Monotonectally innovate progressive.";
			} else if (this.type === 'pressure') {
				this.title = "Air Pressure";
				this.text = "Monotonectally innovate progressive.";
			} else if (this.type === 'mobile') {
				this.title = "Mobile Fitting";
				this.text = "Monotonectally innovate progressive.";
			}
		}
	}
</script>
<style lang="scss">
	.services {
		.card {
			.card-header {
				min-height: 200px;
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
					.card-header { background: url('~assets/img/service-#{$service}.png'); }
				}
			}
		}
	}
</style>
