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
      <SellerTreeTable :products="products"/>
    </div>

  </div>

</template>

<script>

import SellerTreeTable from "@/components/shop_components/SellerTreeTable";

export default {
  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),

      products: [
        {
          productPrice: 0,
          productImage: '',
          heightGap: '',
          typeName: '',
          productId: '', //(vaja puu muutmiseks)

        }
      ]

    }
  },
  name: "TreeView",
  components: {SellerTreeTable},
  methods: {

    getUserProductsByUserId: function () {
      this.$http.get("/product/trees/by-user", {
            params: {
              userId: this.userId,
            }
          }
      ).then(response => {
        this.products = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    clickNavigateToHome: function () {
      sessionStorage.clear()
      this.$router.push({
        name: 'home'
      })
    },
  },
  beforeMount() {
    this.getUserProductsByUserId()
  }

}
</script>

