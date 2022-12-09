<template>

  <div class="container">
    <div class="col-lg-2 mt-5">
      <div>
        <router-link to="/cart" class="link">Tagasi ostukorvi</router-link>
      </div>
    </div>

    <div class="row">
      <h2 class="row justify-content-center fw-bold mb-4 ms-1">
        Ostukinnitus
      </h2>
    </div>

      <div class="row justify-content-start">
        <div class="col-5">
          <div>
            <div class="input-group m-4">
              <span class="input-group-text">Eesnimi</span>
              <input type="text" class="form-control">
            </div>
            <div class="input-group m-4">
              <span class="input-group-text">Perekonnanimi</span>
              <input type="password" class="form-control">
            </div>
            <div class="input-group m-4">
              <span class="input-group-text">Telefon</span>
              <input type="password" class="form-control">
            </div>
            <div class="input-group m-4">
              <span class="input-group-text">E-post</span>
              <input type="password" class="form-control">
            </div>

            <div>
              Tarneviis: Tulen ise järele + puu aadress/ Kuller + aadress
            </div>
          </div>
        </div>
      </div>


    <div class="row d-grid justify-content-md-end mb-2">
      <router-link to="/terms-customer" target="_blank" class="link">Tingimused</router-link>
    </div>

    <div class="row d-grid justify-content-end">
      <div class="">
        <input v-model="termsAreAccepted" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Nõustu tingimustega
        </label>
      </div>
    </div>


    <div class="row d-grid justify-content-md-end mt-4">
      <button v-on:click="clickNavigateToConfirmation" type="button" class="btn btn-secondary">Maksma</button>
    </div>
  </div>


</template>

<script>
export default {
  name: "PaymentView",
  methods: {
    clickNavigateToConfirmation: function () {
      sessionStorage.clear()
      this.$router.push({
        name: 'confirmationRoute'
      })

    }
  }
}
</script>

<style scoped>

</style>