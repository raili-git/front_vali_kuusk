<template>
  <div>
    <div class="col-lg-2">
      <div>
        <a href="#" v-on:click="clickNavigateToHome" class="link-primary">Tagasi avalehele</a>
      </div>
    </div>

    <div class="col-lg-4">
      <div class="input-group m-5">
        <span class="input-group-text">Kasutajanimi</span>
        <input type="text" class="form-control">
      </div>
      <div class="input-group m-5">
        <span class="input-group-text">Parool</span>
        <input type="password" class="form-control">
      </div>
      <div >
        <button type="button" class="btn btn-secondary">Logi sisse</button>
      </div>

      <div class="input-group mt-5 justify-content-center">
<!--        <button v-on:click="clickNavigateToRegistration">registreeru</button>-->
<!--        <a href="#" v-on:click="clickNavigateToRegistration" class="link-primary">Registreeru müüjaks</a>-->
        <router-link to="/registration">Registreeru müüjaks</router-link>
      </div>

    </div>



  </div>

</template>

<script>
export default {
  name: "LoginView",
  data: function (){
    return {
      username: '',
      password: '',

      loginResponse: {
        userId: '',
        roleId: 0,
        roleType: 0,
      },

      errorResponse: {
        message: '',
        errorCode: 0
      },
    }
  },


  methods: {




    clickNavigateToHome: function () {
      this.$router.push({
        name: 'home'
      })
    },
    clickNavigateToRegistration: function () {
      this.$router.push({
        name: 'registrationRoute'
      })
    }

  }
}

</script>

<style scoped>

</style>

