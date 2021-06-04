<script>
import fetchDiploma from "@/api/fetchDiploma.js";
export default {
  render() {
    return "";
  },
  async created() {
    const { slug } = this.$route.params;
    const diploma = await fetchDiploma({ slug });

    this.$router.push({
      name: "diplomaWithLanguage",
      params: {
        slug,
        language: diploma.language.toLowerCase(),
      },
    });
  },
};
</script>
