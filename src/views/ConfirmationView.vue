<template>
  <div class="mt-5">
    <h1>Makse edukalt sooritatud!</h1>
    <h3> Ostuinfo saadeti Teie meilile</h3>
    <div class="mt-5">
      <button v-on:click="clickNavigateToShop" type="button" class="btn btn-secondary btn-lg">Osta veel üks puu!</button>
    </div>
    <div>
      <img src="../assets/bear_with_tree-4714.png" class="bear">

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