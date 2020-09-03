<template>
    <Layout>
        <div class="order">
            <Hero>
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-4 col-sm-8">
                        <h1><span class="marks">//</span>Order</h1>
                        <p>
                            Use our online shop to find the right tyres for you. Get them fitted at your convenience.

                        </p>
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <g-image
                                src="~/assets/img/shop.png"
                                class="img-fluid"
                                width="175px"
                        />
                    </div>
                </div>
            </Hero>


<!--            <div class="order-iframe" id="tyresoftscript">-->
<!--                &lt;!&ndash; <iframe width="100%" style="padding-top: 50px;" title="Shop" src="/tyresoft-iframe.html" /> &ndash;&gt;-->
<!--            </div>-->

            <div class="bg">
                <div class="container">
                    <div class="row justify-content-center main-text">
                        <div class="col-md-12">

                          <b>Mobile tyre fitting in ipswich and local areas<b>*</b></b>
                          <p>Tyres fitted at your home or work for your convenience</p>
                          <p>
                            Our mobile tyre fitters supply and fit a comprehensive range of
                            tyres suitable for all models, vehicle types and budgets. Please
                            search and pick the tyres you would like to be fitted.
                          </p>
                          <p>
                            <small
                            >*Ipswich and local areas maybe extra charge outside ipswich. To
                              cancel the job we need 24hrs notice and if not there will be a £50
                              charge. If the job can not be done due to no fault with the tyre
                              fitter then there will be a £50 charge.
                            </small>
                          </p>
                        </div>
                    </div>
                </div>

                <div class="tyresoft">
                    <!-- DO NOT REMOVE, TYRESOFT HAS HARDCODED THIS! -->
                    <div id="tyresoftscript"></div>
                </div>
            </div>
        </div>


        <div ref="tyresoft"></div>
    </Layout>
</template>

<script>
	import config from "config";
	import Hero from "~/components/Hero.vue";

	export default {
		metaInfo: {
			title: "Order",
			meta: [
				{property: "og:type", content: "article"},
				{property: "og:title", content: "Order - " + config.name},
				{property: "og:description", content: config.desc},
				{property: "og:url", content: config.url},
				{property: "og:image", content: config.url + "static-order.png"},
				{property: "twitter:card", content: "summary_large_image"},
				{property: "twitter:title", content: "Order - " + config.name},
				{property: "twitter:description", content: config.desc},
				{property: "twitter:site", content: "@elementsworks"},
				{property: "twitter:creator", content: "@elementsworks"},
				{property: "twitter:image", content: config.url + "static-order.png"}
			]
		},
		components: {
			Hero
		},
        async mounted() {
		    console.log("MOUNTED!");
            await this.loadScript();
        },
        beforeDestroy() {
		    this.destroyScript();
        },
        watch:{
            $route (to, from){
               console.log({to, from})
            }
        },
        methods: {
            destroyScript() {
                this.$refs.tyresoft.innerHTML = '';
            },
            loadScript () {
                let self = this;
                return new Promise((resolve, reject) => {

                    // if script is already loading via another component
                    if ( self.is_script_loading ){
                        // Resolve when the other component has loaded the script
                        this.$root.$on('script_loaded', resolve)
                        return
                    }

                    let script = document.createElement('script')
                    script.setAttribute('type', 'application/javascript');
                    script.setAttribute('src', 'https://widget.tires/public/tyresoftscript/v3main.js?tt=ttt')
                    script.async = true

                    this.$root.$emit('loading_script')

                    script.onload = () => {
                        /* emit to global event bus to inform other components
						 * we are already loading the script */
                        this.$root.$emit('script_loaded')
                        resolve()
                    }

                    this.$refs.tyresoft.appendChild(script);
                })
            },
            // async use_script () {
            //     try {
            //         await this.load_script()
            //         // .. do what you want after script has loaded
            //     } catch (err) { console.log(err) }
            //
            // }
        }
	};
</script>
<style lang="scss">
    iframe {
        border: none;
        height: 850px;
    }

    /*@media screen and (max-width: 720px) {*/
    /*    */
    /*}*/

    .order-iframe {

    }

    .order {
        .main-text {
            p {
                font-size: 20px;
            }
        }
    }

    .tyresoft {
        padding-top: 50px;
    }
</style>
