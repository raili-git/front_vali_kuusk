<template>
  <div class="container">
    <div class="row d-grid justify-content-md-end">
      <button v-on:click="clickNavigateToHome" type="button" class="btn btn-secondary">Logi välja</button>
    </div>

    <div class="row">
      <h3 class="row justify-content-center fw-bold mb-4 ms-1">
        Sinu müügis olevad puud:
      </h3>
    </div>

    <div class="row justify-content-md-center">
      <SellerTreeTable :products="products" @removeProductFromSalesList="removeProductFromSalesList"/>
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
      this.$emit('loginUpdateEvent')
      this.$router.push({
        name: 'home'
      })
    },

    removeProductFromSalesList: function (productId) {
      this.$http.patch("/product/trees/remove", null, {
            params: {
              userId: this.userId,
              productId: productId
            }
          }
      ).then(response => {
        this.getUserProductsByUserId()
      }).catch(error => {
        console.log(error)
      })
    },

  },
  beforeMount() {
    this.getUserProductsByUserId()
  }

}
</script>

