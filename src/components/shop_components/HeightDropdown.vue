<template>
  <div>
    <select v-on:change="clickSelectHeightIdEvent" v-model="selectedHeightId" class="form-select form-select-sm mb-5" aria-label=".form-select-sm example">
      <option selected disabled value="0">--Kõrgusvahemik--</option>
      <option v-for="height in heights" :key="height.heightId" :value="height.heightId">{{height.heightGap}}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'HeightDropdown',
  data: function () {
    return {
      selectedHeightId: '0',
      heights: [
        {
          heightId: 0,
          heightGap: ''
        }
      ]
    }
  },
  methods: {
    clickSelectHeightIdEvent: function () {
      this.$emit('clickSelectHeightIdEvent', this.selectedHeightId)
    },
    getHeightDropDownInfo: function () {
      this.$http.get("/product/height")
          .then(response => {
            this.heights = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getHeightDropDownInfo()
  }
}
</script>