<template>
    <div class="hero" v-bind:class="clippedClass">
        <div class="hero-container" v-scroll-reveal>
            <!--<div class="hero-graphic">-->
                <!--<slot name="graphic"></slot>-->
            <!--</div>-->
            <div class="hero-content">
                <h1 v-html="title"></h1>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Hero",
        data() {
          return {
              clippedClass: {
                  'hero-clipped': this.clipped
              }
          }
        },
        props: {
            clipped: Boolean,
            title: String
        }
    }
</script>
