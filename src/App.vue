<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Sans Forgetica";
  src: url(assets/SansForgetica-Regular.otf);
}

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

$family-code-test: "Sans Forgetica";

@import "~bulma";
@import "~buefy/src/scss/buefy";


* {
  overflow: hidden !important;
}

/* Particles JS */
.particles-js-canvas-el {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-image: linear-gradient(141deg, #090808 0%, #222 71%, #312d2c 100%);
}
</style>
