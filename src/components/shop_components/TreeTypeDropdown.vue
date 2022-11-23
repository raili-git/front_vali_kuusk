<template>
  <div>
    <select class="form-select form-select-sm mb-5 " aria-label=".form-select-sm example">
      <option selected disabled value="0">--Puuliik--</option>
      <option v-for="type in types" :key="type.typeId"  :value="type.typeId">{{ type.typeName }}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'TreeTypeDropdown',
  data: function () {
    return {
      types: [
        {
          typeId: 0,
          typeName: ''
        }
      ]

    }
  },
  methods: {

    getTreeTypeDropDownInfo: function () {
      this.$http.get("/shop/type")
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getTreeTypeDropDownInfo()
  }

}
</script>