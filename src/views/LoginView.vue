<template>
  <div>
    <div class="col-lg-2">
      <div>
        <router-link to="/">Tagasi avalehele</router-link>
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
        <button v-on:click="clickNavigateToTrees" type="button" class="btn btn-secondary">Logi sisse</button>
      </div>

      <div class="input-group mt-5 justify-content-center">
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
    clickNavigateToTrees: function (){
      this.$router.push({
        name:'treeRoute'
      })
    }


  }
}

</script>

<style scoped>

</style>

