<template>
    <Layout>
        <div class="about">
            <Hero>
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-4 col-sm-8">
                        <h1><span class="marks">//</span>About Us</h1>
                        <p>
                            We are dedicated team working to help our clients with tyre fittings, repairs and more,
                            striving for excellent customer service.
                        </p>
                    </div>
                    <div class="col-md-3 col-sm-4">
                        <g-image src="~/assets/img/about-us.png" class="img-fluid"/>
                    </div>
                </div>
            </Hero>


            <div class="bg">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8 text-center">
                            <p class="intro">
                                A to B Tyres Ltd is a family run tyre business in Ipswich near you. We offer a
                                friendly and professional service supplying and fitting tyres either at our garage
                                or the mobile tyre fitting van, to enable you to keep your vehicle running smoothly,
                                efficiently, economically and legally. We carry an extensive range of tyres which
                                range from top premium tyres, mid-range and budget tyres.
                            </p>
                            <p>
                                We can offer same day* fitting at your home, work or roadside assistance to get you
                                back on the road.
                                For same day or emergency fitting please CALL US.
                                <br/><br/><i style="opacity: 0.5;">*if ordered before 11am</i>
                            </p>

                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row mt-5 pt-5 services">
                        <h2 class="col-md-12 mb-5"><span class="marks">//</span>Our Services</h2>
                        <Services type="fitting" class="col-md-4"/>
                        <Services type="puncture" class="col-md-4"/>
                        <Services type="mobile" class="col-md-4"/>
                        <Services type="balancing" class="col-md-4"/>
                        <Services type="checks" class="col-md-4"/>
                        <Services type="pressure" class="col-md-4"/>
                    </div>
                </div>
            </div>


            <div class="bg bg-grey">
                <div class="container">
                    <h4 class="mb-5"><span class="marks">//</span>Who We Are</h4>
                    <div class="row team justify-content-center">
                        <div class="col-md-5">
                            <div class="row">
                                <div class="col-md-5 align-self-end">
                                    <div class="member member-ben"/>
                                </div>
                                <div class="col-md-7 align-self-end">
                                    <h5 style="text-align: left"><span class="marks">//</span>Ben Smythe</h5>
                                    <p>Managing Director</p>
                                </div>
                            </div>
                        </div>
                        <!--<div class="col-md-5">-->
                        <!--<div class="row">-->
                        <!--<div class="col-md-5 align-self-end">-->
                        <!--<div class="member member-ben"></div>-->
                        <!--</div>-->
                        <!--<div class="col-md-7 align-self-end">-->
                        <!--<h5 style="text-align: left"><span class="marks">//</span>A Guy</h5>-->
                        <!--<p>Apprentice</p>-->
                        <!--</div>-->
                        <!--</div>-->
                        <!--</div>-->
                    </div>
                </div>
            </div>
            <div class="bg">
                <div class="container">
                    <div class="row justify-content-center warranty">
                        <div class="col-md-8">
                            <h4 class="mb-5"><span class="marks">//</span>Warranty</h4>
                            <p align="center">
                                A to B Tyres offers you a 3 Year Tyre warranty with every tyre purchased. Your proof of
                                purchase will be issued to you. Every six months the following checks will be carried
                                out on your purchased tyres:
                            </p>
                            <p align="center">
                                Tyre Pressures<br>
                                Tread Depth<br>
                                Tyre Condition<br>
                                Wheel Balance<br>
                                Check Please<br>
                                bring your receipt along with you each time you visit us.
                            </p>

                            <p class="mt-5 pt-5">
                                <b class="marks">PLEASE NOTE:</b> The manufacture will need to examine any suspected
                                tyre fault before it can
                                be deemed as faulty, which can take around 4-6 weeks. Unfortunately this will mean that
                                we are unable to replace your purchased tyre until the manufacturer has accepted
                                liability. This may result in you having to purchase a new tyre while we await the
                                manufacturer’s decision.
                            </p>
                            <p>
                                If the manufacture deems the tyre faulty the replacement tyre
                                will be based on the equivalent cost and the amount of legal tread life remaining.
                            </p>
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
	import Services from '~/components/Services.vue'

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
			Hero, Services
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

    .about {
        .bg {
            padding: 100px 0;
        }

        .team {
            p {
                margin-bottom: 0;
                text-transform: uppercase;
                font-size: 18px;
            }

            h5 {
                margin-bottom: 0;
            }

            .member {
                width: 100%;
                min-height: 170px;

                &.member-ben {
                    background: url("~@/assets/img/ben.jpg") center / cover;
                }
            }
        }

        .warranty {
            font-size: 18px;
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
