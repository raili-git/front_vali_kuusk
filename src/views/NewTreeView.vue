<template>
  <div class="container">

    <div class="row d-grid justify-content-md-end">
      <button v-on:click="clickNavigateToHome" type="button" class="btn btn-secondary">Logi välja</button>
    </div>

    <div class="row d-grid justify-content-md-center mb-5">
      <h3>Lisa uus puu:</h3>
    </div>

    <div class="row justify-content-start">

          <div class="col-lg-2">
            <TreeTypeDropdown/>
          </div>

          <div class="col-lg-2">
            <HeightDropdown/>
          </div>

        <div class="col-lg-2">
          <div class="input-group">
            <span class="input-group-text">Hind,€</span>
            <input v-model="newTreeRequest.price" type="text" class="form-control">
          </div>
        </div>

        <div class="col-lg-2">
          <ImageInput @pictureInputSuccess="setPicture"/>
        </div>

    </div>

    <div class="row d-grid justify-content-md-end mt-5">
      <button v-on:click="clickNavigateToTrees" type="button" class="btn btn-secondary">Salvesta</button>
    </div>

  </div>

</template>

<script>
import TreeTypeDropdown from "@/components/shop_components/TreeTypeDropdown";
import HeightDropdown from "@/components/shop_components/HeightDropdown";
import ImageInput from "@/components/image/ImageInput";
export default {
  name: "NewTreeView",
  components: {ImageInput, HeightDropdown, TreeTypeDropdown},
  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),

      newTreeRequest: {
        userId: 0,
        typeId: 0,
        heightId: 0,
        price: '',
        status: '',
        pictureData: '',
        countyId: 0,
        addressIs: 0,
      },

    }
  },
  methods: {
    clickNavigateToHome: function () {
      this.$router.push({
        name: 'home'
      })
    },
    clickNavigateToTrees: function () {
      this.$router.push({
        name:'treeRoute'
      })
    },
    setPicture: function (picture) {
      this.newTreeRequest.pictureData = picture;
    },
  }

}
</script>

<style scoped>

</style>