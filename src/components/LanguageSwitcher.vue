<template>
  <div class="lang-switcher">
    <div class="lang-switcher__btn" v-for="(option, idx) in options" :key="option.language">
      <router-link :to="option.to">{{ option.language }}</router-link>
      <span class="lang-switcher__delimiter" aria-hidden="true" v-if="idx != options.length - 1">|</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    languages: {
      type: Array,
      required: true,
    },
  },
  computed: {
    options() {
      return this.languages.map((language) => {
        return {
          language,
          to: {
            name: "diplomaWithLanguage",
            params: {
              language,
              slug: this.$route.params.slug,
            },
          },
        };
      });
    },
  },
};
</script>
<style lang="postcss" scoped>
.lang-switcher {
  z-index: 900;
  &__btn {
    display: inline;
  }
  &__delimiter {
    margin: 0 0.2rem;
  }
}
</style>
