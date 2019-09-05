<template>
	<Layout>
		<div class="contact-us">
			<Hero>
				<div class="row">
					<div class="col-md-12 col-sm-12">
						<h1><span class="marks">//</span>Cookie Policy for A to B Tyres Ltd</h1>
						<p>
							This is the Cookie Policy for A to B Tyres Ltd, accessible from https://atobtyres.co.uk/
						</p>
					</div>
				</div>
			</Hero>
		</div>

		<div class="container py-5 terms">
			<section>
				<p><strong>What Are Cookies</strong></p>

				<p>As is common practice with almost all professional websites this site uses cookies, which are tiny
					files
					that are downloaded to your computer, to improve your experience. This page describes what
					information
					they gather, how we use it and why we sometimes need to store these cookies. We will also share how
					you
					can prevent these cookies from being stored however this may downgrade or 'break' certain elements
					of
					the sites functionality.</p>

				<p>For more general information on cookies see the Wikipedia article on HTTP Cookies.</p>

				<p><strong>How We Use Cookies</strong></p>

				<p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no
					industry
					standard options for disabling cookies without completely disabling the functionality and features
					they
					add to this site. It is recommended that you leave on all cookies if you are not sure whether you
					need
					them or not in case they are used to provide a service that you use.</p>

				<p><strong>Disabling Cookies</strong></p>

				<p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser
					Help
					for how to do this). Be aware that disabling cookies will affect the functionality of this and many
					other websites that you visit. Disabling cookies will usually result in also disabling certain
					functionality and features of the this site. Therefore it is recommended that you do not disable
					cookies.</p>


				<p><strong>The Cookies We Set</strong></p>

				<ul>


					<li>
						<p>Orders processing related cookies</p>
						<p>This site offers e-commerce or payment facilities and some cookies are essential to ensure
							that
							your order is remembered between pages so that we can process it properly.</p>
					</li>


				</ul>

				<p><strong>Third Party Cookies</strong></p>

				<p>In some special cases we also use cookies provided by trusted third parties. The following section
					details which third party cookies you might encounter through this site.</p>

				<ul>

					<li>
						<p>This site uses Google Analytics which is one of the most widespread and trusted analytics
							solution on the web for helping us to understand how you use the site and ways that we can
							improve your experience. These cookies may track things such as how long you spend on the
							site
							and the pages that you visit so we can continue to produce engaging content.</p>
						<p>For more information on Google Analytics cookies, see the official Google Analytics page.</p>
					</li>


					<li>
						<p>The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve
							more
							relevant ads across the web and limit the number of times that a given ad is shown to
							you.</p>
						<p>For more information on Google AdSense see the official Google AdSense privacy FAQ.</p>
					</li>


					<li>
						<p>We also use social media buttons and/or plugins on this site that allow you to connect with
							your
							social network in various ways. For these to work the following social media sites
							including;
							{List the social networks whose features you have integrated with your site?:12}, will set
							cookies through our site which may be used to enhance your profile on their site or
							contribute
							to the data they hold for various purposes outlined in their respective privacy
							policies.</p>
					</li>

				</ul>

				<p><strong>More Information</strong></p>

				<p>Hopefully that has clarified things for you and as was previously mentioned if there is something
					that
					you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does
					interact with one of the features you use on our site.</p>

				<p>However if you are still looking for more information then you can contact us through one of our
					preferred contact methods:</p>


				<p>
					<b>Email: <a href="mailto:BSMYTHE@HOTMAIL.CO.UK">BSMYTHE@HOTMAIL.CO.UK</a></b>
				</p>

			</section>
		</div>
	</Layout>
</template>
<script>
	import PostCard from '~/components/PostCard.vue'
	import config from 'config';
	import Hero from '~/components/Hero.vue'

	export default {
		metaInfo: {
			title: 'Terms of Service',
			meta: [
				{property: "og:type", content: 'article'},
				{property: "og:title", content: 'Terms - ' + config.name},
				{property: "og:description", content: config.desc},
				{property: "og:url", content: config.url},
				{property: "og:image", content: config.url + '/static-index.png'},
				{property: "twitter:card", content: "summary_large_image"},
				{property: "twitter:title", content: 'Terms - ' + config.name},
				{property: "twitter:description", content: config.desc},
				{property: "twitter:site", content: "@elementsworks"},
				{property: "twitter:creator", content: "@elementsworks"},
				{property: "twitter:image", content: config.url + 'static-index.png'},
			]
		},
		components: {
			PostCard,
			Hero
		},
		methods: {
			message: function (event) {
				FB.CustomerChat.show(true);
				FB.CustomerChat.update({
					logged_in_greeting: 'Seen something you like or what to chat about your next big project?',
					logged_out_greeting: 'Log in to chat with us about our portfolio or your next big project.',
					ref: this.type,
				});
			}
		}
	}
</script>

<style lang="scss">
	.privacy {
		a {
			font-weight: bold;
		}
	}
</style>
