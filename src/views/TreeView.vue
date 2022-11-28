<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-4 m-5">
        <h3>Sinu müügis olevad puud:</h3>
      </div>
      <div class="col-lg-6 m-5">
        <button v-on:click="clickNavigateToHome" type="button" class="btn btn-secondary">Logi välja</button>
      </div>
    </div>

    <div class="row justify-content-md-center m-5">
      <div class="col-lg-10">
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col">(Pilt)</th>
            <th scope="col">Liik</th>
            <th scope="col">Kõrgus</th>
            <th scope="col">Hind</th>
            <th scope="col">Nupud</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>

</template>

<script>

export default {
  name: "TreeView",
  methods: {
    clickNavigateToHome: function () {
      this.$router.push({
        name: 'home'
      })
    }

  }
}
</script>

