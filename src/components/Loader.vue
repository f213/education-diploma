<template>
  <Spinner class="app-loader" size="medium" />
</template>

<script>
import Spinner from "vue-simple-spinner";
export default {
  components: {
    Spinner,
  },
};
</script>

<style lang="postcss" scoped>
.app-loader {
  position: absolute;
  top: 50%;
  left: 47%;
  .vue-simple-spinner {
    opacity: 0.6;
  }
  &.non-centered .vue-simple-spinner {
    margin: 0 !important;
  }
}
</style>
