<template>

  <div class="container">

    <div class="row d-grid justify-content-md-center mb-5">
      <h3>Muuda müügis olevat puud:</h3>
    </div>
{{productId}}
    <div class="row justify-content-start">

      <div>
        <img :src="treeInfo.productImage" class="treePic">
      </div>

      <div class="col-lg-2">
        <TreeTypeDropdown v-model="treeInfo.typeId"/>
      </div>

      <div class="col-lg-2">
        <HeightDropdown v-model="treeInfo.heightId"/>
      </div>

      <div class="col-lg-2">
        <div class="input-group">
          <span class="input-group-text" id="inputGroup-sizing-sm"> Hind, € </span>
          <input v-model="treeInfo.price" type="number" class="form-control">
        </div>
      </div>

    </div>

    <div class="row d-grid justify-content-md-end">
      <button v-on:click="modifyTreeInfo" type="button" class="btn btn-secondary">Salvesta muudatused</button>
    </div>


  </div>
</template>

<script>
import TreeTypeDropdown from "@/components/shop_components/TreeTypeDropdown";
import HeightDropdown from "@/components/shop_components/HeightDropdown";

export default {
  name: "ModifyTreeView",
  components: {HeightDropdown, TreeTypeDropdown},
  data: function () {
    return {
      productId: sessionStorage.getItem('productId'),

      treeInfo: {
        typeId: 0,
        heightId: 0,
        price: 0,
        productImage: '',
      }
    }
  },
  methods: {
    getTreeInfo: function () {
      this.$http.get("/some/path", {
            params: {
              productId: this.productId
            }
          }
      ).then(response => {
        this.treeInfo = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    modifyTreeInfo: function () {
      this.$http.post("/some/path", this.treeInfo
      ).then(response => {
        this.treeInfo = response.data
        this.$router.push({
          name: 'treeRoute'
        })
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

  },
  beforeMount() {
    this.getTreeInfo()
  }
}
</script>

<style scoped>

</style>