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
        <a href="#" v-on:click="clickNavigateToRegistration" class="link-primary">Registreeru müüjaks</a>
      </div>

    </div>



  </div>

</template>

<script>
export default {
  name: "LoginView",
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

