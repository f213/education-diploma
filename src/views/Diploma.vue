<template>
  <section class="diploma" v-if="fetched">
    <DiplomaImage :diploma="diploma" />
    <LanguageSwitcher class="diploma__lang-switcher" v-if="languages.length > 1" :languages="languages" />
  </section>
</template>

<script>
import fetchDiploma from "@/api/fetchDiploma.js";

import DiplomaImage from "@/components/DiplomaImage.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

export default {
  name: "Home",
  components: {
    DiplomaImage,
    LanguageSwitcher,
  },
  data() {
    return {
      fetched: undefined,
    };
  },
  computed: {
    diploma() {
      // return root diploma if the language is requested, otherwise — find the diploma for approriate language
      if (this.fetched.language === this.language.toUpperCase()) {
        return this.fetched;
      }
      return this.fetched.other_languages.find((diploma) => diploma.language === this.language.toUpperCase());
    },
    slug() {
      const { params } = this.$route;
      return params.slug;
    },
    language() {
      if (this.$route.params.language) {
        return this.$route.params.language.toLowerCase();
      }
      return this.fetched ? this.fetched.language.toLowerCase() : undefined;
    },
    otherLanguages() {
      return this.fetched.other_languages.map((diploma) => diploma.language.toLowerCase());
    },
    languages() {
      return [this.fetched.language.toLowerCase(), ...this.otherLanguages].sort();
    },
  },
  async created() {
    this.fetched = await fetchDiploma({ slug: this.slug });
  },
};
</script>

<style lang="postcss" scoped>
.diploma {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 85vh;
  padding-top: 2rem;

  &__lang-switcher {
    margin-top: 1rem;
  }
}
</style>
