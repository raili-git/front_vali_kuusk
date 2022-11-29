<template>
  <div class="container">
    <div class="row justify-content-start">
      <div class="col-lg-4 m-5">
        <h3>Lisa uus puu:</h3>
      </div>
      <div class="row d-grid justify-content-md-end col-lg-6 m-5">
        <button v-on:click="clickNavigateToHome" type="button" class="btn btn-secondary">Logi välja</button>
      </div>

      <div class="row justify-content-start">
          <div class="col-lg-2 ms-3">
            <TreeTypeDropdown/>
          </div>
          <di class="col-lg-2 ms-3">
            <HeightDropdown/>
          </di>
        <div class="col-lg-2 ms-5">
          <p> Hind,€:</p>
        </div>
        <div class="col-lg-2 ms-5">
          <p> Pilt</p>
        </div>
      </div>

      <div class="row d-grid justify-content-md-end bottom-50">
        <div class="row col-lg-6 m-5">
          <button v-on:click="clickNavigateToTrees" type="button" class="btn btn-secondary">Salvesta</button>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import TreeTypeDropdown from "@/components/shop_components/TreeTypeDropdown";
import HeightDropdown from "@/components/shop_components/HeightDropdown";
export default {
  name: "NewTreeView",
  components: {HeightDropdown, TreeTypeDropdown},
  methods: {
    clickNavigateToHome: function () {
      this.$router.push({
        name: 'home'
      })
    },
    clickNavigateToTrees: function () {
      this.$router.push({
        name:'treeRoute'
      })
    }
  }

}
</script>

<style scoped>

</style>