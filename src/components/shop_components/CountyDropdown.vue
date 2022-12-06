<template>
  <div>
    <select v-on:change="clickSelectedCountyIdEvent" v-model="selectedCountyId" class="form-select form-select-sm mb-5" aria-label=".form-select-sm example">
      <option selected value="0">--Kõik maakonnad--</option>
      <option v-for="county in counties" :key="county.countyId" :value="county.countyId">{{county.countyName}}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'CountyDropdown',
  // props: {
  //   profileRequest: {}
  // },
  data: function () {
    return {
      selectedCountyId: '0',
      counties: [
        {
          countyId: 0,
          countyName: ''
        }
      ]
    }
  },

  methods: {
    clickSelectedCountyIdEvent: function () {
      this.$emit('changeCountyEvent', this.selectedCountyId)
    },
    getCountyDropdownInfo: function () {
      this.$http.get("/product/county")
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
    this.getCountyDropdownInfo()
  }
}
</script>