<template>
  <div class="diploma-image">
    <img class="diploma-image__image" :src="diploma.image" />
  </div>
</template>
<script>
export default {
  props: {
    diploma: { type: Object, required: true },
  },
};
</script>

<style lang="postcss" scoped>
.diploma-image {
  &__image {
    max-height: 85vh;
    max-width: 95vw;
  }
}
</style>
