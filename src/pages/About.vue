<template>
	<Layout>
		<div class="about">
			<Hero title="About Us">
				<HeroGraphic slot="graphic"/>

				<p>
					We are dedicated team working on the latest technologies to serve our clients from
					all around the world with bespoke and innovative solutions.
				</p>
			</Hero>
		</div>


		<div class="container">
			<h1 class="py-5">Content</h1>
		</div>
	</Layout>
</template>

<script>
	import config from 'config';
	import Hero from '~/components/Hero.vue'

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
			Hero
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
				team: [
					{
						name: "Luke Brown",
						position: "CEO and Full Stack Developer",
						text1: "Since the start of this decade, Luke has been a full stack freelancer developer and systems administrator.",
						text2: "In 2015, Luke founded Element Softworks, determined to build a reliable name for anyone in need of digital services locally and across the globe.",
						img: "luke"
					},
					{
						name: "Ryan Impey",
						position: "Full Stack Developer",
						text1: "Joining the team as the first full time employee, Ryan's entrance into the company marked a major milestone.",
						text2: "His focus is on developing bespoke web systems along side Luke, primarily based on Reuben and Joe's designs, ready for a release the client can be proud of.",
						img: "ryan"
					},
					{
						name: "Reuben Westrop",
						position: "Frontend/Graphic Designer",
						text1: "Reuben joined the team to focus on prototyping and designing sites requested through our Merlin Panel project.",
						text2: "His creativity builds from the client's requirements, onto his designs, ready to inspire the development team to make beautiful and engaging websites.",
						img: "reuben"
					},
					// {
					// 	name: "Ben Stacy",
					// 	position: "Marketing Specialist",
					// 	text1: "In today's modern world, marketing is everything. And it is important to have someone on your side who breaths this.",
					// 	text2: "Ben works with a number of large US companies, focusing on their advertising, SEO and marketing outputs. And he is ready to help you on yours.",
					// 	img: "ben"
					// },
					{
						name: "Joe Methven",
						position: "UX/UI Specialist",
						text1: "Overseeing and directly impacting all creative design aspects (such as graphics, wireframes, UX) in any team is no easy task.",
						text2: "Thankfully Joe is here with his wide knowledge of UX/UI and design spreading across over 100+ projects to help bring to life our clients dreams.",
						img: "joe"
					},
					{
						name: "Ben Smythe",
						position: "Business Relations",
						text1: "It is key to have someone who can truly connect and engage with existing and potential clients to find out their needs.",
						text2: "Ben advises the business on the best routes to take with new and existing projects. He also puts in place strategies to find new clients keep their satisfaction high.",
						img: "ben"
					}
				]
			}
		},
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

	.about {
		.card-team {
			background: white;
			border: 1px solid #efefef;
			/*border: none;*/
			.card-img-top {
				background: #ccc;
				min-height: 246px;
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
			.card-body {
				padding-bottom: 50px;
				max-height: 150px;
				overflow: hidden;
				background: white;
				@extend .animate;
			}
			&:hover {
				.card-body {
					max-height: 370px;
					overflow: hidden;
					margin-top: -220px;
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

		.cta {
			background: #f8f8f8;
		}
	}

	.about-team {
		padding-top: 60px;
		padding-bottom: 240px;
		background: #f6f6f6;
	}

	.about-intro {
		padding-top: 80px;
		padding-bottom: 100px;

		p {
			font-size: 20px;
		}
	}

	.about-stack {
		padding-top: 60px;
		margin-top: 0;
		// padding-bottom: 60px;
		.card {
			margin-top: -200px;
			background: white;
			border: 1px solid #efefef;
			border-radius: 0;
			.card-header {
				background: #facc00;
				padding: 0;
				border: none;

				.card-header-pills {
					margin-left: 0;
					margin-right: 0;
				}
				.nav-item {
					.nav-link {
						&:hover {
							background: rgba(255, 255, 255, 0.31);

							&.active {
								background: white !important;
								cursor: default;
							}
						}

						border-radius: 0;
						padding: 22px 100px 10px;
						text-align: center;
						margin-bottom: 0;
						height: 100%;
						font-size: 20px;
						font-weight: bold;

					}

					&:last-child {
						.nav-link {
							margin-bottom: 0.75rem;
						}
					}
				}

			}

			.card-body {
				padding: 80px;
				.img-fluid {
					padding-top: 10px;
				}
			}
		}
		.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
			background: white;
			color: #222;
		}
		a {
			color: #222;
		}
		h4 {
			font-weight: bold;
		}
	}

	// Extra small devices (portrait phones, less than 576px)
	@media (max-width: 575.98px) {
		.jumbotron.jumbotron-second {
			padding-top: 50px !important;
			.intro {
				padding: 20px 0;
				h1 {
					padding-top: 0;
				}
			}
			img {
				min-height: 280px;
				padding-top: 100px;
			}
		}
		.about .card-team {
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
		.about-stack {
			.nav-pills {
				.nav-item {
					width: 100%;
					.nav-link {
						padding: 22px 100px !important;
					}
				}
			}
			.card {
				.card-body {
					padding: 15px;
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
