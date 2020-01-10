<template>
  <Layout>
    <div class="shop">
      <Hero>
        <div class="row justify-content-between align-items-center">
          <div class="col-md-4 col-sm-8">
            <h1><span class="marks">//</span>Shop</h1>
            <p>
              Use our online shop to find the right tyres for you.
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

      <iframe title="Shop" width="100%" height="1050px" src="/shop.html">
      </iframe>
    </div>
  </Layout>
</template>

<script>
import config from "config";
import Hero from "~/components/Hero.vue";

export default {
  metaInfo: {
    title: "Shop",
    meta: [
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Shop - " + config.name },
      { property: "og:description", content: config.desc },
      { property: "og:url", content: config.url },
      { property: "og:image", content: config.url + "static-shop.png" },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: "Shop - " + config.name },
      { property: "twitter:description", content: config.desc },
      { property: "twitter:site", content: "@elementsworks" },
      { property: "twitter:creator", content: "@elementsworks" },
      { property: "twitter:image", content: config.url + "static-shop.png" }
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
</style>
