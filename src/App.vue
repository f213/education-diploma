<template>
  <div id="app">
    <router-view />
    <Copyright />
  </div>
</template>

<script>
import Copyright from "@/components/Copyright.vue";

export default {
  components: { Copyright },
};
</script>
<style lang="postcss">
body {
  font-size: 18px;
  font-family: "Roboto", sans-serif;
}
a {
  color: #ff8562;
  text-decoration: none;
}
.router-link-active {
  font-weight: 500;
  color: unset;
}
</style>
