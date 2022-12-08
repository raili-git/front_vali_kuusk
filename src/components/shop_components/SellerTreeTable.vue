<template>
  <div class="col col-lg-9 ">
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">Foto</th>
        <th scope="col">Liik</th>
        <th scope="col">Kõrgusvahemik</th>
        <th scope="col">Hind, €</th>
        <th scope="col"></th>
      </tr>
      </thead>

      <tbody>
      <tr>
      <tr v-for="product in products" :key="product.productId">
<!--        <td>{{ product.productImage }}</td>-->
        <td> <img :src="product.productImage" class="treePic"> </td>
        <td>{{product.typeName}}</td>
        <td>{{ product.heightGap }}</td>
        <td>{{ product.productPrice }}</td>
        <td>
          <div class="d-grid gap-2 d-md-block">
            <button v-on:click="clickNavigateToModifyTree" type="button" class="btn btn-secondary">Muuda</button>
            <button type="button" class="btn btn-secondary ms-4 ">Eemalda</button>
          </div>
        </td>
      </tr>
      </tbody>

    </table>
  </div>
</template>
<script>
export default {
  name: 'SellerTreeTable',
  props: {
    products: Array()
  },
  methods: {
    clickNavigateToModifyTree: function () {
      this.$router.push({
        name: 'modifyTreeRoute'
      })

    }
  }
}
</script>