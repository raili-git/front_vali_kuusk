<template>
  <div>
    <div class="row">
      <h3 class="row justify-content-center fw-bold mb-4 ms-1">
        Müüja andmed
      </h3>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-4">
        <div class="input-group m-5">
          <span class="input-group-text">Kasutajanimi</span>
        </div>
        <div class="input-group m-5">
          <span class="input-group-text">Eesnimi</span>
          <input v-model="profileRequest.firstName" type="text" class="form-control">
        </div>
        <div class="input-group m-5">
          <span class="input-group-text">Perekonnanimi</span>
          <input v-model="profileRequest.lastName" type="text" class="form-control">
        </div>
        <div class="input-group m-5">
          <span class="input-group-text">Telefon</span>
          <input v-model="profileRequest.phoneNumber" type="text" class="form-control">
        </div>
        <div class="input-group m-5">
          <span class="input-group-text">E-post</span>
          <input v-model="profileRequest.email" type="text" class="form-control">
        </div>
      </div>

      <div class="col-lg-4 m-5 ">

        <div class="ms-5 col-lg-12">
          <CountyDropdown @changeCountyEvent="setSelectedCountyId"/>
        </div>

        <div class="input-group m-5">
          <span class="input-group-text">Aadress</span>
          <input v-model="profileRequest.addressStreet" type="text" class="form-control">
        </div>

        <div class="mb-5">
          <input v-model="termsAreAccepted" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Nõustu tingimustega
          </label>
        </div>

        <div class="mb-5">
          <router-link to="/terms-seller" target="_blank" class="link" >Tingimused</router-link>
        </div>

        <div class="input-group mb-4 justify-content-center">
          <button v-on:click="addContact" type="button" class="btn btn-secondary">Salvesta</button>
        </div>

        <div class="row justify-content-center ms-5 ">
          <AlertError :message="errorResponse.message"/>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import CountyDropdown from "@/components/shop_components/CountyDropdown";
import AlertError from "@/components/alerts/AlertError";

export default {
  name: "ContactView",
  components: {AlertError, CountyDropdown},
  data: function () {
    return {

      userId: sessionStorage.getItem('userId'),
      profileRequest:
          {
            userId:sessionStorage.getItem('userId'),
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
      },

      termsAreAccepted: false
    }
  },
  methods: {

    displayRequiredFieldsNotFilledAlert: function () {
      this.errorResponse.message = 'Nõutud väljad ei ole täidetud!?';
    },
    displayCheckboxNotSelected: function () {
      this.errorResponse.message = 'Nõustu tingimustega.';
    },

    addContactInfo: function () {
      this.$http.post("/profile-info", this.profileRequest
      ).then(response => {
        this.$emit('loginUpdateEvent')
        this.$router.push({
          name: 'treeRoute'
        })
      }).catch(error => {
        console.log(error)
      })
    },


    allRequiredFieldsAreFilled: function () {
      return this.profileRequest.phoneNumber.length !== 0 && this.profileRequest.email.length !== 0 &&
          this.profileRequest.firstName.length !== 0 && this.profileRequest.lastName.length !== 0 &&
          this.profileRequest.addressStreet.length !== 0 && this.profileRequest.addressCountyId !== 0 ;
    },



    addContact: function () {
      this.errorResponse.message = '';
      if (!this.allRequiredFieldsAreFilled()) {
        this.displayRequiredFieldsNotFilledAlert();
      } else if (!this.termsAreAccepted) {
        this.displayCheckboxNotSelected();
      } else {
        this.addContactInfo();
      }
    },
    setSelectedCountyId: function (selectedCountyId) {
      this.profileRequest.addressCountyId = selectedCountyId
    },

  }
}
</script>

