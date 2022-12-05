<template>
  <div class="container">

    <div> Müüja id: {{ userId }}</div>

    <div class="row d-grid justify-content-md-end ">
      <button v-on:click="clickNavigateToHome" type="button" class="btn btn-secondary">Logi välja</button>
    </div>

    <div class="row justify-content-center mb-4">
      <h3>Sinu müügis olevad puud:</h3>
    </div>

    <div class="row justify-content-md-center">
      <SellerTreeTable :click-navigate-to-modify-tree="clickNavigateToModifyTree"/>
    </div>

  </div>

</template>

<script>

import SellerTreeTable from "@/components/shop_components/SellerTreeTable";

export default {
  data: function () {
    return {
      userId: sessionStorage.getItem('userId')
    }
  },
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

