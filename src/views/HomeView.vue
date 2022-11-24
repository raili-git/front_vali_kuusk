<template>
  <div>
    <h1>Kas sa tahad jõulupuud</h1>
    <div class="row justify-content-center">
      <div class="col-lg-5">
        <button v-on:click="clickNavigateToShop" type="button" class="btn btn-secondary">OSTA</button>
      </div>
      <h1 class="col-lg-1">või</h1>
      <div class="col-lg-5">
        <button v-on:click="clickNavigateToLogin" class="btn btn-secondary">MÜÜA</button>
      </div>
      <h1 class="col-lg-1">?</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    clickNavigateToShop: function () {
      this.$router.push({
        name: 'shopRoute'
      })
    },

    clickNavigateToLogin: function () {
      this.$router.push({
        name: 'loginRoute'
      })
    }
  }
}
</script>


