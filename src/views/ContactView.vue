<template>
  <div>
    <h3>Müüja andmed</h3>

      <div class="row justify-content-center">
          <div class="col-lg-4">
            <div class="input-group m-5">
              <span class="input-group-text">Kasutajanimi</span>
              {{ minni }}
            </div>
            <div class="input-group m-5">
              <span class="input-group-text">Eesnimi</span>
              <input v-model="profileRequest.firstName" type="text" class="form-control">
            </div>
                <div class="input-group m-5">
                  <span class="input-group-text">Perekonnanimi</span>
                  <input type="text" class="form-control">
                </div>
            <div class="input-group m-5">
              <span class="input-group-text">Telefon</span>
              <input type="text" class="form-control">
            </div>
            <div class="input-group m-5">
              <span class="input-group-text">E-post</span>
              <input type="text" class="form-control">
            </div>
        </div>

        <div class="col-lg-4 m-5">
          <div class="ms-5 col-lg-12">
            <CountyDropdown/>
          </div>

          <div class="input-group m-5">
            <span class="input-group-text">Aadress</span>
            <input type="text" class="form-control">
          </div>

          <div class="m-5">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Nõustu tingimustega
            </label>
          </div>

          <div>
            <router-link to="/terms-seller" target="_blank">Tingimused</router-link>
          </div>
          <div class="input-group mt-5 justify-content-center">
            <button v-on:click="addContactInfo" type="button" class="btn btn-secondary">Salvesta</button>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
import CountyDropdown from "@/components/shop_components/CountyDropdown";

export default {
  name: "ContactView",
  components: {CountyDropdown},
  data: function () {
    return {
      profileRequest:
          {
            phoneNumber: '',
            email: '',
            firstName: '',
            lastName: '',
            addressCountyId: 0,
            addressStreet: ''
          },

      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {
    addContactInfo: function () {
      this.$http.post("/profile-info", this.profileRequest
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    clickNavigateToTrees: function () {
      this.$router.push({
        name: 'treeRoute'
      })
    }
  }
}
</script>

<style scoped>

</style>