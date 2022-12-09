<template>
  <div class="container">
    <div class="row d-grid justify-content-md-end">
      <button v-on:click="clickNavigateToHome" type="button" class="btn btn-secondary">Logi välja</button>
    </div>

    <div class="row">
      <h3 class="row justify-content-center fw-bold mb-4 ms-1">
        Lisa uus puu:
      </h3>
    </div>

    <div class="row justify-content-start">

          <div class="col-lg-2">
            <TreeTypeDropdown @changeTreeTypeEvent="setSelectedTypeId"/>
          </div>

          <div class="col-lg-2">
            <HeightDropdown @changeHeightEvent="setSelectedHeightId"/>
          </div>

        <div class="col-lg-2">
          <div class="input-group">
            <span class="input-group-text">Hind,€</span>
            <input v-model="newTreeRequest.productPrice" type="text" class="form-control">
          </div>
        </div>

        <div class="col-lg-2">
          <ImageInput v-model="newTreeRequest.productImage" @pictureInputSuccess="setPicture"/>
        </div>

    </div>

    <div class="row d-grid justify-content-md-end mt-5">
      <button v-on:click="addNewTree" type="button" class="btn btn-secondary">Salvesta</button>
    </div>

    <div class="row justify-content-center">
      <AlertError :message="errorResponse.message"/>
    </div>

  </div>

</template>

<script>
import TreeTypeDropdown from "@/components/shop_components/TreeTypeDropdown";
import HeightDropdown from "@/components/shop_components/HeightDropdown";
import ImageInput from "@/components/image/ImageInput";
import AlertError from "@/components/alerts/AlertError";
export default {
  name: "NewTreeView",
  components: {AlertError, ImageInput, HeightDropdown, TreeTypeDropdown},
  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),

      newTreeRequest: {
        userId: 0,
        // countyId: 0,
        typeId: 0,
        heightId: 0,
        productImage: '',
        productPrice: 0,
      },
      errorResponse: {
        message: '',
        errorCode: 0,
      },

    }
  },
  methods: {
    allRequiredFieldsAreFilled: function () {
      return this.newTreeRequest.productPrice > 0 && this.newTreeRequest.typeId !== 0
          && this.newTreeRequest.heightId !== 0 && this.newTreeRequest.productImage.length !== 0;
    },


    displayRequiredFieldsNotFilledAlert: function () {
      this.errorResponse.message = 'Nõutud väljad ei ole täidetud!?';
    },

    addNewTreeInfo: function () {
      this.newTreeRequest.userId = this.userId
      this.$http.post("/product/new-tree", this.newTreeRequest
      ).then(response => {

        this.$router.push({
          name: 'treeRoute'
        })
      }).catch(error => {
        console.log(error)
      })
    },

    addNewTree: function () {
      this.errorResponse.message = '';
      if(!this.allRequiredFieldsAreFilled()){
        this.displayRequiredFieldsNotFilledAlert();
      } else {
        this.addNewTreeInfo();
      }
    },

    clickNavigateToHome: function () {
      sessionStorage.clear()
      this.$emit('loginUpdateEvent')
      this.$router.push({
        name: 'home'
      })
    },

    setPicture: function (picture) {
      this.newTreeRequest.productImage = picture;
    },

    setSelectedTypeId: function (selectedTypeId) {
      this.newTreeRequest.typeId = selectedTypeId
    },
    setSelectedHeightId: function (selectedHeightId) {
      this.newTreeRequest.heightId = selectedHeightId
    },
  }

}
</script>

