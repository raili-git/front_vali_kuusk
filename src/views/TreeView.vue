<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-4 m-5">
        <h3>Sinu müügis olevad puud:</h3>
      </div>

      <div class="row d-grid justify-content-md-end col-lg-6 m-5">
        <button v-on:click="clickNavigateToHome" type="button" class="btn btn-secondary">Logi välja</button>
      </div>

    </div>

    <div class="row justify-content-md-center">
      <SellerTreeTable :click-navigate-to-modify-tree="clickNavigateToModifyTree"/>
    </div>

  </div>

</template>

<script>

import SellerTreeTable from "@/components/shop_components/SellerTreeTable";

export default {
  name: "TreeView",
  components: {SellerTreeTable},
  methods: {
    clickNavigateToHome: function () {
      this.$router.push({
        name: 'home'
      })
    },
    clickNavigateToModifyTree: function () {
      this.$router.push({
        name: 'modifyTreeRoute'
      })
    }
  }

}
</script>

