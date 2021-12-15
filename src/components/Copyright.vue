<template>
  <div class="copyright">
    <p class="copyright__notice">© {{ year }} <a href="https://education.borshev.com">Школа Сильных Программистов</a></p>
  </div>
</template>
<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="postcss" scoped>
.copyright {
  font-size: 14px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: right;
  padding-bottom: 1rem;

  &__notice {
    display: block;
    margin-right: 0.5rem;
    white-space: nowrap;
  }

  @media print {
    display: none;
  }
}
</style>
