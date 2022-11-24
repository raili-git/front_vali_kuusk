<template>
  <div class="col-lg-5">
    <div>
      <a href="#" v-on:click="clickNavigateToHome" class="link-primary">Tagasi avalehele</a>
    </div>
  </div>

</template>

<script>
export default {
  name: "LoginView",
  methods: {
    clickNavigateToHome: function () {
      this.$router.push({
        name: 'home'
      })
    },
  }
}

</script>

<style scoped>

</style>

