<template>

  <div>
    <div>
      <h1>Ostu kinnitus</h1>
    </div>

    <div class="col-lg-2">
      <div>
        <a href="#" class="link-primary">Tagasi</a>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-start">
        <div class="col-5">
          <div>
            <div class="input-group m-5">
              <span class="input-group-text">Eesnimi</span>
              <input type="text" class="form-control">
            </div>
            <div class="input-group m-5">
              <span class="input-group-text">Perekonnanimi</span>
              <input type="password" class="form-control">
            </div>
            <div class="input-group m-5">
              <span class="input-group-text">Telefon</span>
              <input type="password" class="form-control">
            </div>
            <div class="input-group m-5">
              <span class="input-group-text">E-post</span>
              <input type="password" class="form-control">
            </div>
          </div>

        </div>

        <div class="col-lg-7">
          Tarneviis: Tulen ise järele + puu aadress/ Kuller + aadress
        </div>


      </div>

      <div>
        <button type="button" class="btn btn-secondary">Maksma</button>
      </div>

    </div>
  </div>


</template>

<script>
export default {
  name: "PaymentView"
}
</script>

<style scoped>

</style>