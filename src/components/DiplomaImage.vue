<template>
  <div class="diploma-image" :class="{ 'diploma-image--loading': isLoading }">
    <img class="diploma-image__image" :src="diploma.image" @load="isLoading = false" />
    <Loader v-if="isLoading" />
  </div>
</template>
<script>
import Loader from "@/components/Loader.vue";

export default {
  components: {
    Loader,
  },
  props: {
    diploma: { type: Object, required: true },
  },
  data() {
    return {
      isLoading: true,
    };
  },
  watch: {
    "$route.params.language": function () {
      this.isLoading = true;
    },
  },
};
</script>

<style lang="postcss" scoped>
.diploma-image {
  position: relative;
  &__image {
    max-height: 85vh;
    max-width: 95vw;
  }
  &--loading {
    opacity: 0.3;
  }
}
</style>
