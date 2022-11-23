<template>
  <div>
    <select class="form-select form-select-sm mb-5" aria-label=".form-select-sm example">
      <option selected disabled value="0">--Maakond--</option>
      <option v-for="county in counties" :key="county.countyId" :value="county.countyId">{{county.countyName}}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'CountyDropdown',
  data: function () {
    return {
      counties: [
        {
          countyId: 0,
          countyName: ''
        }
      ]
    }
  },

  methods: {
    getCountyDropdoenInfo: function () {
      this.$http.get("/shop/county")
          .then(response => {
            this.counties = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
    },
  beforeMount() {
    this.getCountyDropdoenInfo()
  }
}
</script>