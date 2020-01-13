<template>
  <Layout>
    <div class="order">
      <Hero>
        <div class="row justify-content-between align-items-center">
          <div class="col-md-4 col-sm-8">
            <h1><span class="marks">//</span>Order</h1>
            <p>
              Use our online shop to find the right tyres for you. Get them
              fitted at your convenience.
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

      <div class="bg order">
        <div class="container">
          <div class="row justify-content-center main-text">
            <div class="col-md-12">
              <p>Mobile tyre fitting in ipswich and local areas<b>*</b></p>
              <p>Tyres fitted at your home or work for your convenience</p>
              <p>
                Our mobile tyre fitters supply and fit a comprehensive range of
                tyres suitable for all models, vehicle types and budgets. Please
                search and pick the tyres you would like to be fitted.
              </p>
            </div>
          </div>
        </div>
      </div>

      <iframe width="100%" height="1050px" title="Shop" src="/order.html">
      </iframe>

      <div class="container">
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
  </Layout>
</template>

<script>
import config from "config";
import Hero from "~/components/Hero.vue";

export default {
  metaInfo: {
    title: "Order",
    meta: [
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Order - " + config.name },
      { property: "og:description", content: config.desc },
      { property: "og:url", content: config.url },
      { property: "og:image", content: config.url + "static-order.png" },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: "Order - " + config.name },
      { property: "twitter:description", content: config.desc },
      { property: "twitter:site", content: "@elementsworks" },
      { property: "twitter:creator", content: "@elementsworks" },
      { property: "twitter:image", content: config.url + "static-order.png" }
    ]
  },
  components: {
    Hero
  }
};
</script>
<style lang="scss">
iframe {
  border: none;
}

.order {
  padding-bottom: 60px;

  .main-text {
    p {
      font-size: 20px;
    }
  }
}
</style>
