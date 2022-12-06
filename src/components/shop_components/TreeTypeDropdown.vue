<template>
  <div>
    <select v-on:change="clickSelectTypeIdEvent" v-model="selectedTypeId" class="form-select form-select-sm mb-5 " aria-label=".form-select-sm example">
      <option selected value="0">--Kõik puuliigid--</option>
      <option v-for="type in types" :key="type.typeId"  :value="type.typeId">{{ type.typeName }}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'TreeTypeDropdown',
  data: function () {
    return {
      selectedTypeId: '0',
      types: [
        {
          typeId: 0,
          typeName: ''
        }
      ]

    }
  },
  methods: {
      clickSelectTypeIdEvent: function (){
        this.$emit('changeTreeTypeEvent', this.selectedTypeId)
      },
    getTreeTypeDropDownInfo: function () {
      this.$http.get("/product/type")
          .then(response => {
            this.types = response.data
            // console.log(response.data)
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