<template>
  <div class="container mt-5">

    <div class="row d-grid justify-content-md-start">
      <router-link to="/" class="link">Tagasi avalehele</router-link>
    </div>

    <div class="row d-grid justify-content-md-end">
      <div class="d-flex flex-row">
        <div>

          <router-link to="/cart" class="link">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart3"
                 viewBox="0 0 16 16">
              <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
          </router-link>

        </div>
        <h4> {{ count }}</h4>
      </div>
    </div>

    <div class="row">
      <h3 class="row justify-content-start fw-bold mb-4 ms-1">
        Sorteeri:
      </h3>
    </div>

    <div>
      <div class="row justify-content-start">
        <div class="d-grid gap-2 col col-lg-2">
          <div>
            <TreeTypeDropdown @changeTreeTypeEvent="clickSelectTypeIdEvent"/>

            <HeightDropdown @changeHeightEvent="clickSelectHeightIdEvent"/>

            <CountyDropdown @changeCountyEvent="clickSelectedCountyIdEvent"/>

            <div>
              <button v-on:click="getSortedTrees" type="button" class="btn btn-secondary">Filtreeri</button>
            </div>
          </div>
        </div>
        <div class="col-lg-1">
        </div>
        <ShopTable :products="products" @addToCartEvent="addToCart"/>
      </div>
    </div>

    <div class="row d-grid justify-content-md-end mb-5">
      <button v-on:click="clickNavigateToCart" type="button" class="btn btn-secondary">Mine ostukorvi</button>
    </div>

  </div>


</template>

<script>
import TreeTypeDropdown from "@/components/shop_components/TreeTypeDropdown";
import HeightDropdown from "@/components/shop_components/HeightDropdown";
import CountyDropdown from "@/components/shop_components/CountyDropdown";
import ShopTable from "@/components/shop_components/ShopTable";

export default {
  name: "ShopView",
  components: {ShopTable, CountyDropdown, HeightDropdown, TreeTypeDropdown},
  data: function () {
    return {
      orderId: sessionStorage.getItem('orderId'),
      typeId: 0,
      heightId: 0,
      countyId: 0,

      products: [
        {
          productId: '',
          countyName: '',
          typeName: '',
          heightGap: '',
          productImage: '',
          productPrice: 0,
        }
      ],

      count: 0,

    }
  },
  methods: {

    getOrderDetails: function () {
      if (this.orderId == null) {
        this.getNewOrderId();
      }
    },


    getNewOrderId: function () {
      this.$http.get("/order/id", {
        params: {
          sessionId: Number(sessionStorage.getItem('sessionId'))
        }
      })
          .then(response => {
            this.orderId = response.data.orderId
            sessionStorage.setItem('orderId', this.orderId)
          })
          .catch(error => {
            console.log(error)
          })
    },


    getAllTrees: function () {
      this.$http.get("/product/shop")
          .then(response => {
            this.products = response.data
            this.getProductCount()
          })
          .catch(error => {
            console.log(error)
          })
    },

    getSortedTrees: function () {
      this.$http.get("/product/shop/sorting", {
            params: {
              typeId: this.typeId,
              heightId: this.heightId,
              countyId: this.countyId
            }
          }
      ).then(response => {
        this.products = response.data
      }).catch(error => {
        console.log(error)
      })
    },

    clickSelectTypeIdEvent: function (selectedTypeId) {
      this.typeId = selectedTypeId
    },
    clickSelectHeightIdEvent: function (selectedHeightId) {
      this.heightId = selectedHeightId
    },
    clickSelectedCountyIdEvent: function (selectedCountyId) {
      this.countyId = selectedCountyId
    },
    clickNavigateToCart: function () {
      sessionStorage.setItem('orderId', this.orderId)

      this.$router.push({
        name: 'cartRoute'
      })
    },

    addToCart: function (productId) {
      this.$http.post("/order/to-cart", null, {
            params: {
              orderId: this.orderId,
              productId: productId
            }
          }
      ).then(response => {
        this.getAllTrees()
      }).catch(error => {
        console.log(error)
      })
    },

    getProductCount: function () {
      this.$http.get("/order/count", {
            params: {
              orderId: this.orderId,
            }
          }
      ).then(response => {
        this.count = response.data
      }).catch(error => {
        console.log(error)
      })
    },

  },
  beforeMount() {
    this.getOrderDetails()
    this.getAllTrees()
    this.getProductCount()
  }
}
</script>

