<template>
  <div>
    <select class="form-select form-select-sm mb-5" aria-label=".form-select-sm example">
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
      heights: [
        {
          heightId: 0,
          heightGap: ''
        }
      ]
    }
  },
  methods: {
    getHeightDropDownInfo: function () {
      this.$http.get("/shop/height")
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