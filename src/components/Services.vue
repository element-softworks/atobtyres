<template>
    <div v-if="type">
        <div :class="['mb-4', 'card', type ? serviceClass : '']">
            <div class="card-header"></div>
            <div class="card-body">
                <h3><span class="marks">//</span>{{ title }}</h3>
                <p class="pt-2">
                    {{ text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Services",
		computed: {
			serviceClass() {
				return `service-${this.type}`;
			},
			title() {
				switch (this.type) {
					case "fitting":
						return "Tyre Fitting";
					case "puncture":
						return "Puncture Repair";
					case "balancing":
						return "Wheel Balancing";
					case "checks":
						return "Tyre Checks";
					case "pressure":
						return "Air Pressure";
					case "mobile":
						return "Mobile Fitting";
					default:
						return "";
				}
			},
			text() {
				switch (this.type) {
					case "fitting":
						return "Here at A to B Tyres we take great care when handling and replacing your tyres. We have a large stock of new tyres for you to pick from to fit cars, vans, trailers and 4X4s.";
					case "puncture":
						return "Punctures are a nightmare, and have a nasty habit of happening when they are least convenient. If the repair is possible then it works out at a fraction of the cost of a new tyre.";
					case "balancing":
						return "To guarantee smooth running we balance your wheels to the tyres you have fitted. This is crucial for the normal wearing of your tyre so that it lasts its longest life possible.";
					case "checks":
						return "Tyres are the most important part of your cars as they are what connects you to the road. That is why we offer a tyre checking service to make sure your tyres are performing at their optimal best.";
					case "pressure":
						return "Incorrect air pressure can cause abnormal wear on your tyres. At A to B Tyres we check and fill your tyres to the correct pressure as suggested by the manufacturer of your vehicle.";
					case "mobile":
						return "Often tyre problems strike at the most inconvenient moment, so we try to make tyre repair and fitting as convenient to you as possible by offering a mobile fitting service at home, work or roadside.";
					default:
						return "";
				}
			}
		},
		props: {
			// clipped: Boolean,
			type: String
		}
	};
</script>
<style lang="scss">
    .services {
        .card {
            background: #fafafa;
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
                    background: url("~assets/img/service-fitting.png");
                }
            }

            $services: "fitting", "puncture", "balancing", "mobile", "checks",
            "pressure";
            @each $service in $services {
                &.service-#{$service} {
                    .card-header {
                        background: url("~assets/img/service-#{$service}.png") center /
            cover no-repeat;
                    }
                }
            }
        }
    }
</style>
