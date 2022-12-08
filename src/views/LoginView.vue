<template>
  <div>
    <div class="col-lg-2 mt-5">
      <div>
        <router-link to="/">Tagasi avalehele</router-link>
      </div>
    </div>

    <div class="row justify-content-center">

      <div class="col-lg-3">

        <div>
          <AlertError :message="errorResponse.message"/>
        </div>

        <div class="row justify-content-center">
          <h3 class=" fw-bold mb-1 ms-1">
            Sisselogimine:
          </h3>
        </div>

        <div class="input-group mb-3 mt-5">
          <span class="input-group-text">Kasutajanimi</span>
          <input v-model="username" type="text" class="form-control">
        </div>

        <div class="input-group mb-5">
          <span class="input-group-text">Parool</span>
          <input v-model="password" type="password" class="form-control">
        </div>

        <div>
          <button v-on:click="login" type="button" class="btn btn-secondary">Logi sisse</button>
        </div>

        <div class="input-group mt-5 justify-content-center">
          <router-link to="/registration">Registreeru müüjaks</router-link>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import AlertError from "@/components/alerts/AlertError";

export default {
  name: "LoginView",
  components: {AlertError},
  data: function () {
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
        errorCode: 0,
      },
    }
  },


  methods: {
    displayRequiredFieldsNotFilledAlert: function () {
      this.errorResponse.message = 'Täida kõik väljad!';
    },

    sendLoginRequest: function () {
      this.$http.get("/login", {
            params: {
              username: this.username,
              password: this.password
            }
          }
      ).then(response => {
        this.loginResponse = response.data
        sessionStorage.setItem('userId', this.loginResponse.userId);
        this.$emit('loginUpdateEvent')
        this.$router.push({
          name: 'treeRoute'
        })
      }).catch(error => {
        this.errorResponse = error.response.data
      });
    },

    login: function () {
      this.errorResponse.message = ''
      if (this.username.length == 0 || this.password.length == 0) {
        this.displayRequiredFieldsNotFilledAlert();
      } else {
        this.sendLoginRequest();
      }
    }
  }
}

</script>

