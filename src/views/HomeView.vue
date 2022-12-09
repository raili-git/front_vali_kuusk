<template>
  <div class="position-absolute top-50 start-50 translate-middle">
    <div>
      <h1>Kas sa tahad jõulupuud</h1>
    </div>

    <div class="row d-grid justify-content-center">
      <div class="heading d-flex flex-row gap-3" >

        <div >
          <button v-on:click="clickNavigateToShop" type="button" class="btn btn-secondary btn-lg mt-3 mb-3">OSTA</button>
        </div>

        <div class="col-lg-4">
          <h1> või </h1>
        </div>
        <div>
          <button v-on:click="clickNavigateToLogin" class="btn btn-secondary btn-lg mt-3 mb-3">MÜÜA</button>
        </div>
        <div>
          <h1> ?</h1>
        </div>
      </div>

    </div>

    <div>
      <img src="../assets/Christmas_tree_car_7992.png" class="car">
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LoginView from "@/views/LoginView";

export default {
  name: 'HomeView',
  components: {
    LoginView,
    HelloWorld
  },
  data: function () {
    return {
      sessionResponse: {
        sessionId: 0
      }
    }
  },
  methods: {


    getSessionDetails: function () {
      let sessionHash = sessionStorage.getItem('sessionId')
      if (sessionHash == null) {
        this.getNewSessionId();
      }
    },


    getNewSessionId: function () {
      this.$http.get("/session")
          .then(response => {
            this.sessionResponse = response.data
            sessionStorage.setItem('sessionId', this.sessionResponse.sessionId)
          })
          .catch(error => {
            console.log(error)
          })
    },


    clickNavigateToShop: function () {
      this.$router.push({
        name: 'shopRoute'
      })
    },

    clickNavigateToLogin: function () {
      this.$router.push({
        name: 'loginRoute'
      })
    }
  },
  beforeMount() {
    this.getSessionDetails()

  }
}
</script>

<style>
body {
  /*background-image: url(../../public/tree.jpg);*/

  /*  background-size: 100%;*/
  /*  background-repeat: no-repeat;*/
  /*  max-width: 100vw;*/
  /*  height: 70vh;*/

}
</style>


