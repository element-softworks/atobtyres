<template>
    <Layout portfolioNav="true">
        <div class="index">
            <Hero clipped>
                <h1><span class="marks">//</span>IPSWICH TYRE FITTING SERVICE</h1>
                <div class="arrows">
                    <img src="/chevron-double-down.svg" alt="drop down"/>
                </div>
                <div class="social">
                    <a href="https://instagram.com/atobtyres" target="_blank" rel="noopener noreferrer">
                        <font-awesome :icon="['fab', 'instagram']"/>
                    </a>
                    <a href="https://facebook.com/atobtyres" target="_blank" rel="noopener noreferrer">
                        <font-awesome :icon="['fab', 'facebook-f']"/>
                    </a>
                    <a href="https://www.google.com/search?q=atobtyres&oq=google+reviews+atobtyres#lrd=0x47d9a1b2aa8983f7:0xb2c39dbbbc895ea9,1,,," target="_blank" rel="noopener noreferrer">
                        <font-awesome :icon="['fab', 'google']"/>
                    </a>
                </div>
                <div class="phone">
                    <div class="">
                        <a href="tel:01473269030">
                            <img src="/phone.svg" alt="Phone A To B Tyres"/> 01473 269030
                        </a>
                    </div>
                </div>
            </Hero>
            <div class="container">
                <div class="row icons d-flex align-items-center justify-content-center">
                    <div class="col-md-2 col-4">
                        <g-image src="~/assets/img/brand-toyo.png" alt="Toyo Tyes" class="img-fluid"/>
                    </div>
                    <div class="col-md-2 col-xs-4">
                        <g-image src="~/assets/img/brand-michelin.png" alt="Michelin Tyes" class="img-fluid"/>
                    </div>
                    <div class="col-md-2">
                        <g-image src="~/assets/img/brand-dunlop.png" alt="Dunlop Tyes" class="img-fluid"/>
                    </div>
                    <div class="col-md-2">
                        <g-image src="~/assets/img/brand-goodyear.png" alt="Goodyear Tyes" class="img-fluid"/>
                    </div>
                    <div class="col-md-2">
                        <g-image src="~/assets/img/brand-pirelli.png" alt="Pirelli Tyes" class="img-fluid"/>
                    </div>
                </div>
            </div>
            <div class="bg bg-grey">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <h2><span class="marks">//</span>About Us</h2>
                        </div>
                        <div class="col-md-7">
                            <div class="justify-content-center row">
                                <p class="intro">
                                    A to B Tyres Ltd is a family run tyre business in Ipswich near you. We offer a
                                    friendly and professional service supplying and fitting tyres either at our garage
                                    or the mobile tyre fitting van, to enable you to keep your vehicle running smoothly,
                                    efficiently, economically and legally. We carry an extensive range of tyres which
                                    range from top premium tyres, mid-range and budget tyres.
                                    <br/><br/>
                                    We can offer same day* fitting at your home, work or roadside assistance to get you
                                    back on the road.
                                    For same day or emergency fitting please CALL US.
                                    <br/><br/><i style="color: #4A4B4C!important;">*if ordered before 11am</i>
                                </p>

                                <g-link to="/about" class="btn btn-dark">View More</g-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg">
                <div class="container">
                    <div class="row mt-5 pt-5 services">
                        <h2 class="col-md-12 mb-5">
                            <span class="marks">//</span>Our Services
                        </h2>
                        <Services type="fitting" class="col-md-4 col-12 col-sm-6"/>
                        <Services type="puncture" class="col-md-4 col-12 col-sm-6"/>
                        <Services type="mobile" class="col-md-4 col-12 col-sm-6"/>
                        <Services type="balancing" class="col-md-4 col-12 col-sm-6"/>
                        <Services type="checks" class="col-md-4 col-12 col-sm-6"/>
                        <Services type="pressure" class="col-md-4 col-12 col-sm-6"/>
                    </div>
                </div>
            </div>

            <div class="bg bg-grey">
                <div class="container">
                    <h2 class="col-md-12 mb-5 mt-5">
                        <span class="marks">//</span>Our Reviews
                    </h2>
                    <p class="row justify-content-center text-center">See what our clients have to say about us, and don't forget to leave your own review!</p>

                    <div class="row justify-content-center">
                        <div class="col-md-4 col-lg-3">
                            <a class="review" href="https://www.facebook.com/pg/atobtyres/reviews" target="_blank" rel="noopener noreferrer">
                                <span class="review-social review-social-facebook row justify-content-center"><font-awesome :icon="['fab', 'facebook']"/></span>
                                <span class="stars row justify-content-center">
                                    <font-awesome icon="star" />
                                    <font-awesome icon="star" />
                                    <font-awesome icon="star" />
                                    <font-awesome icon="star" />
                                    <font-awesome icon="star" />
                                </span>
                                <p class="rated row justify-content-center text-center">5.0 Rating on Facebook</p>
                                <p class="row justify-content-center text-center">29 Reviews</p>
                            </a>
                        </div>
                        <div class="col-md-4 col-lg-3">
                            <a class="review" href="https://www.google.com/search?q=atobtyres&oq=google+reviews+atobtyres#lrd=0x47d9a1b2aa8983f7:0xb2c39dbbbc895ea9,1,,," target="_blank" rel="noopener noreferrer">
                                <span class="review-social review-social-google row justify-content-center"><font-awesome :icon="['fab', 'google']"/></span>
                                <span class="stars row justify-content-center">
                                    <font-awesome icon="star" />
                                    <font-awesome icon="star" />
                                    <font-awesome icon="star" />
                                    <font-awesome icon="star" />
                                    <font-awesome icon="star" />
                                </span>
                                <p class="rated row justify-content-center text-center">5.0 Rating on Google</p>
                                <p class="row justify-content-center text-center">36 Reviews</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg">
                <div class="container">
                    <h2 class="col-md-12 mb-5 mt-5">
                        <span class="marks">//</span>Latest Jobs
                    </h2>
                    <div class="row insta-posts">
                        <a
                                v-for="post in posts"
                                :key="posts.id"
                                class="col-md-4"
                                :href="post.link"
                                target="_blank"
                        >
                            <span>{{ post.date }}</span>
                            <div
                                    :style="'background: url(' + post.image + ') center / cover'"
                                    class="img-fluid"
                            ></div>
                            <span class="caption">{{ post.captionNoTags }}</span>
                            <!--<pre>{{post}}</pre>-->
                        </a>
                    </div>
                </div>
            </div>

            <div class="bg bg-grey">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6 opening">
                            <h4><span class="marks">//</span>Opening Times</h4>
                            <div class="justify-content-center row">
                                <ul>
                                    <li>
                                        Monday
                                        <span>8:30am to 5:30pm</span>
                                    </li>
                                    <li>
                                        Tuesday
                                        <span>8:30am to 5:30pm</span>
                                    </li>
                                    <li>
                                        Wednesday
                                        <span>8:30am to 5:30pm</span>
                                    </li>
                                    <li>
                                        Thursday
                                        <span>8:30am to 5:30pm</span>
                                    </li>
                                    <li>
                                        Friday
                                        <span>8:30am to 5:30pm</span>
                                    </li>
                                    <li>
                                        Saturday
                                        <span>8:30am to 1:00pm</span>
                                    </li>
                                    <li>
                                        Sunday
                                        <span>Closed</span>
                                    </li>
                                </ul>
                                <p>
                                    Appointments available on request<br/>outside these hours.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h4><span class="marks">//</span>Where to find us</h4>
                            <div class="justify-content-center row">
                                <p class="para col-md-12">
                                    Elton Park Business Centre<br/>
                                    Russell House<br/>Hadleigh Road<br/>Ipswich, Suffolk<br/>IP2
                                    0DD
                                </p>
                                <ClientOnly>
                                    <GmapMap
                                            ref="mapRef"
                                            :center="{ lat, lng }"
                                            :zoom="15"
                                            class="col-md-8"
                                            map-type-id="terrain"
                                            style="width: 100%; height: 200px"
                                            :options="{
                      zoomControl: false,
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
                                                v-on:click.passive="center = m.position"
                                        />
                                    </GmapMap>
                                </ClientOnly>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
	import config from "config";
	import Hero from "~/components/Hero.vue";
	import Services from "~/components/Services.vue";
	import moment from "moment";

	export default {
		metaInfo: {
			title: "Home",
			meta: [
				{property: "og:type", content: "article"},
				{property: "og:title", content: "Home - " + config.name},
				{property: "og:description", content: config.desc},
				{property: "og:url", content: config.url},
				{property: "og:image", content: config.url + "static-index.png"},
				{property: "twitter:card", content: "summary_large_image"},
				{property: "twitter:title", content: "Home - " + config.name},
				{property: "twitter:description", content: config.desc},
				{property: "twitter:site", content: "@elementsworks"},
				{property: "twitter:creator", content: "@elementsworks"},
				{property: "twitter:image", content: config.url + "static-index.png"}
			]
		},
		components: {
			Hero,
			Services
		},
		methods: {
			message: function (event) {
				FB.CustomerChat.show(true);
				FB.CustomerChat.update({
					logged_in_greeting:
						"Welcome to our homepage, let us know if you have any questions!",
					logged_out_greeting: "Welcome to our site, log in to chat with us.",
					ref: this.type
				});
			}
		},
		mounted() {
			let api = "";
			// let api = "http://localhost:3000";
			this.axios.get(`https://api.merlinpanel.com/v1/client/social/instagram`,
                { params: { websiteId: "5f231222aa27330cc98e35e9" } }
                ).then(response => {

				this.posts = response.data.feed.slice(0, 3).map(feed => {
					var regexp = new RegExp("#([^\\s]*)", "g");

					return {
						// ...post,
						// date: moment.unix(post.time).format("MMM D"),
						// captionNoTags: postText,
                        id: feed.id,
                        date: moment.unix(feed.time).format("MMM D"),
                        link: feed.link,
                        captionNoTags: feed.caption.replace(regexp, ""),
                        image: feed.type === 'carousel' ? feed.content[0][0].url : feed.content[0].url,
					};
				});
			});
		},
		destroyed() {
		},
		data: function () {
			return {
				lat: 52.058529,
				lng: 1.125027,
				posts: [],
				markers: [
					{
						position: {lat: 52.058529, lng: 1.125027},
						label: "I",
						type: "info"
					}
				],
				offices: [
					{
						name: "",
						position: "Main Office",
						text1: "Kingdom",
						lat: 52.058529,
						lng: 1.125027
					}
				]
			};
		}
	};
</script>

<style lang="scss">
    @import "~assets/css/config";
    @import "~assets/css/includes/responsive";
    @import "~assets/css/includes/layout";

    .index {
        h2 {
            text-transform: uppercase;
            font-weight: 900;
            margin: 0 auto;
            font-size: 50px;
            letter-spacing: -2.5px;
        }

        .hero {
            position: relative;

            .arrows {
                // position: absolute;
                // bottom: 30px;
            }

            .social {
                position: absolute;
                float: left;
                bottom: 30px;
                left: 50px;
                font-weight: bold;

                a {
                    color: white;
                    font-size: 30px;
                    margin-right: 30px;

                    &:hover {
                        color: rgba(255, 255, 255, 0.9);
                        text-decoration: none;
                    }

                    &:last-child {
                        margin-right: 0;
                    }
                }

                img {
                    max-height: 21px;
                    margin-top: -6px;
                }
            }

            .phone {
                position: absolute;
                float: right;
                bottom: 30px;
                right: 50px;
                font-weight: bold;

                a {
                    font-size: 25px;
                    color: white;

                    &:hover {
                        color: rgba(255, 255, 255, 0.9);
                        text-decoration: none;
                    }
                }

                img {
                    max-height: 21px;
                    margin-top: -6px;
                }
            }
        }

        .icons {
            .col-md-2 {
                width: 20%;
                flex: 0 0 20%;
                max-width: 20%;

                img {
                    padding: 20px 0;
                }
            }
        }

        .intro {
            padding: 30px 0;
            text-align: center;
        }

        .btn-dark {
            background: #171717;
            font-size: 18px;
            font-weight: 300;
            text-transform: uppercase;
            padding: 10px 30px;

            &:hover {
                color: white !important;
                background: #333;
                border-color: #333;
            }
        }

        .review {
            text-decoration: none;
            color: initial;

            > * {
                opacity: 1;
                transition: opacity ease-in-out .2s;
            }

            &:hover {
                > * {
                    opacity: 0.8;
                }
            }

            .review-social {
                font-size: 40px;
                margin-bottom: 20px;
                margin-top: 20px;

                &.review-social-facebook {
                    color: #3b5998;
                }

                &.review-social-google {
                    color: black;
                }
            }

            .stars {
                color: #f5b04d;
                font-size: 20px;
                margin-bottom: 20px;

                > * {
                    margin-left: 2.5px;

                    &:first-child {
                        margin-left: 0;
                    }
                }
            }

            .rated {
                font-weight: 600;
                font-size: 18px;
                margin-bottom: 0;
            }
        }

        .insta-posts {
            min-height: 400px;

            div,
            a {
                min-height: 300px;
                color: #111;

                &:hover {
                    text-decoration: none;
                }
            }

            span {
                text-transform: uppercase;
                margin-top: 10px;
                display: block;
                letter-spacing: 0.9;
                font-size: 18px;

                &.caption {
                    text-transform: inherit;
                    padding-top: 10px;
                    font-size: 15px;
                    opacity: 0.7;
                    @extend .animate;
                }
            }

            .col-md-4 {
                &:hover {
                    .caption {
                        opacity: 1;
                    }
                }
            }
        }

        .opening {
            ul {
                list-style-type: none;
                padding-left: 0;

                li {
                    font-size: 20px;
                    padding-bottom: 10px;

                    span {
                        float: right;
                        padding-left: 50px;
                    }
                }
            }

            p {
                font-size: 20px;
                text-align: center;
            }
        }

        .para {
            font-size: 20px;
            text-align: center;
        }

        h4 {
            margin-bottom: 40px;
        }
    }

    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
        .hero.hero-clipped {
            height: 80vh;
            min-height: 500px;

            h1 {
                font-size: 50px;
            }

            .phone, .social {
                right: auto;
                left: 50%;
                transform: translateX(-50%);
                width: 100%;
            }

            .phone {
                bottom: 90px;
            }
        }
        .index {
            .intro {
                padding: 30px;
            }

            .services {
                padding: 0 !important;
            }

            .insta-posts {
                span {
                    padding-top: 30px;
                }
            }

            .icons {
                .col-md-2 {
                    width: 33.32%;
                    flex: 0 0 33.32%;
                    max-width: 33.32%;

                    img {
                        padding: 20px 0;
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
