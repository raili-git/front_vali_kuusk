<template>
  <div>
    <div>
      <h1>Müüjaks registreerumine</h1>
    </div>

    <div class="col-lg-2">
      <div>
        <a href="#" v-on:click="clickNavigateToLogin" class="link-primary">Tagasi</a>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-5">

          <div class>
            <div class="input-group m-2">
              <span class="input-group-text">Kasutajanimi</span>
              <input type="text" class="form-control">
            </div>
            <div class="input-group m-2">
              <span class="input-group-text">Parool</span>
              <input type="password" class="form-control">
            </div>
            <div class="input-group m-2">
              <span class="input-group-text"> Parool uuesti</span>
              <input type="password" class="form-control">
            </div>

            <div>
              <button type="button" class="btn btn-secondary">Loo kasutaja</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "RegistrationView",
  methods: {
    clickNavigateToLogin: function () {
      this.$router.push({
        name: 'login'
      })
    }
  }
}




</script>

