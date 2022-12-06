<template>
  <div class="col col-lg-9 justify-content-md-end">
    <table class="table table-hover table-success">
      <thead>
      <tr>
        <th scope="col">Foto</th>
        <th scope="col">Liik</th>
        <th scope="col">Kõrgusvahemik</th>
        <th scope="col">Piirkond</th>
        <th scope="col">Hind, €</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" :key="product.productId">
        <td> <img :src="product.productImage" class="treePic"> </td>
        <td>{{product.typeName}}</td>
        <td>{{ product.heightGap }}</td>
        <td>{{ product.countyName}}</td>
        <td>{{ product.productPrice }}</td>
        <td>
          <div>
            <button type="button" class="btn btn-secondary">Lisa ostukorvi</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'ShopTable',
  props: {
    products: Array ()
  }
}
</script>