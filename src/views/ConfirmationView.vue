<template>
  <div>
    <h1>Makse edukalt sooritatud!</h1>
    <h3> Ostuinfo saadeti Teie meilile</h3>
    <div>
      <button v-on:click="clickNavigateToShop" type="button" class="btn btn-secondary">Osta veel üks puu</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmationView",
  methods: {
    clickNavigateToShop: function () {
      this.$router.push({
        name:'shopRoute'
      })
    }
  }
}
</script>

<style scoped>

</style>