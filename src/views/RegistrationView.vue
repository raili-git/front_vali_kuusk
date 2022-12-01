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
              <input v-model="newUserRequest.username" type="text" class="form-control">
            </div>
            <div class="input-group m-2">
              <span class="input-group-text">Parool</span>
              <input v-model="newUserRequest.password" type="password" class="form-control">
            </div>
            <div class="input-group m-2">
              <span class="input-group-text"> Parool uuesti</span>
              <input v-model="passwordRepeat" type="password" class="form-control">
            </div>

            <div>
              <button v-on:click="registration" type="button" class="btn btn-secondary">Loo kasutaja</button>
            </div>

            <div>
              <AlertError :message="errorResponse.message"/>

            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import AlertError from "@/components/alerts/AlertError";

export default {
  name: "RegistrationView",
  components: {AlertError},
  data: function () {
    return {

      newUserRequest: {
        username: '',
        password: '',
      },

      passwordRepeat: '',

      errorResponse: {
        message: '',
        errorCode: 0,
      },
    }
  },
  methods: {
    displayRequiredFieldsNotFilledAlert: function () {
      this.errorResponse.message = 'Nõutud väljad ei ole täidetud!?';
    },
    displayPasswordsDoNotMatch: function () {
      this.errorResponse.message = 'Sisestatud paroolid ei ühti';
    },


    saveNewUser: function () {
      this.$http.post("/registration", this.newUserRequest
      ).then(response => {

        // this.newUserRequest = response.data
        this.$router.push({
          name: 'contactRoute'
        })
      }).catch(error => {
        this.errorResponse = error.response.data
      })
    },

    registration: function () {
      this.errorResponse.message = ''
      if (this.newUserRequest.username.length == 0 || this.newUserRequest.password.length == 0 || this.passwordRepeat.length == 0) {
        this.displayRequiredFieldsNotFilledAlert();
      } else if (this.newUserRequest.password !== this.passwordRepeat) {
        this.displayPasswordsDoNotMatch();
      } else {
        this.saveNewUser();
      }
    }

  }
}


</script>

