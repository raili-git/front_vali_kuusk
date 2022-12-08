<template>

  <div class="container">

    <div class="row d-grid justify-content-md-end">
      <button v-on:click="clickNavigateToHome" type="button" class="btn btn-secondary">Logi välja</button>
    </div>

    <div class="row justify-content-center mb-4">
      <h3>Müüdud puud:</h3>
    </div>

    <div class="row justify-content-start">


      <div class="row justify-content-center">
        <div class="col col-lg-9 ">
          <table class="table table-hover">
            <thead>
            <tr>
              <th scope="col">Pilt</th>
              <th scope="col">Liik</th>
              <th scope="col">Kõrgusvahemik</th>

              <th scope="col">Hind</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th>Foto</th>
              <td>Kuusk</td>
              <td>0-1</td>
              <td>50€</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
 </div>


</template>

<script>
export default {
  name: "HistoryView",
  methods: {
    clickNavigateToHome: function () {
      sessionStorage.clear()
      this.$emit('loginUpdateEvent')
      this.$router.push({
        name: 'home'
      })
    }
  }
}


</script>

<style scoped>

</style>