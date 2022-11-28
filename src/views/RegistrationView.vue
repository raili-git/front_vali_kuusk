<template>
  <div>
    <div>
      <h1>Müüjaks registreerumine</h1>
    </div>

    <div class="col-lg-2">
      <div>
        <router-link to="/login">Tagasi sisselogimisse</router-link>
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
              <button v-on:click="clickNavigateToContact" type="button" class="btn btn-secondary">Loo kasutaja</button>
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
    clickNavigateToContact: function (){
      this.$router.push({
        name:'contactRoute'
      })
    }

  }
}




</script>

