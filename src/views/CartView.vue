<template>
  <div class="container">
    <div class="col-lg-2">
      <div>
        <router-link to="/shop">Tagasi valima</router-link>
      </div>
    </div>
    <div>orderId{{orderId}}</div>
    <div class="row justify-content-center">
      <h3 class=" fw-bold mb-4 ms-1">
        Ostukorv:
      </h3>
    </div>

    <div class=" row justify-content-center">
      <CartTable :products="products"/>
    </div>

    <div class="row justify-content-start">
      <div class="col col-lg-2 ms-5 mt-5">

        <p> Tarneviis </p>

        <div class="row">
          <div class="form-check ">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              Tulen ise järele (0€)
            </label>
          </div>
        </div>

        <div class="row">

          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              Kuller (15€ puu)
            </label>
          </div>

          <div>
            <input placeholder="Aadress">
          </div>

        </div>

      </div>


      <div class="row d-grid justify-content-md-end">
        <p> Puude hind kokku:</p>
        <p> Tarne hind kokku:</p>
        <p> Ostu summa kokku:</p>
      </div>

      <div class="row d-grid justify-content-md-end">
        <button v-on:click="clickNavigateToPayment" type="button" class="btn btn-secondary">Edasi</button>
      </div>


    </div>


  </div>
</template>

<script>
import CartTable from "@/components/shop_components/CartTable";

export default {
  name: "CartView",
  components: {CartTable},
  data: function (){
    return {
      orderId: sessionStorage.getItem('orderId'),
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
    }

  },
  methods: {

    getTreesByOrderId: function () {
      this.$http.get("/order/cart", {
            params: {
              orderId: this.orderId
            }
          }
      ).then(response => {
        this.products = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    clickNavigateToPayment: function (){
      this.$router.push({
        name:'paymentRoute'
      })
    }

  },
  beforeMount() {
    this.getTreesByOrderId()
  }
}
</script>
