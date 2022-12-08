<template>
  <div class="col col-lg-9 ">
    <table class="table table-hover table-success">
      <thead>
      <tr>
        <th scope="col">Pilt</th>
        <th scope="col">Liik</th>
        <th scope="col">Kõrgusvahemik</th>
        <th scope="col">Piirkond</th>
        <th scope="col">Hind</th>
        <th scope="col"> Lisa</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" :key="product.productId">
        <th><img :src="product.productImage" class="treePic"></th>
        <td>{{product.typeName}}</td>
        <td>{{ product.heightGap }}</td>
        <td>{{ product.countyName}}</td>
        <td>{{ product.productPrice }}</td>
        <td>
          <div>
            <button v-on:click="removeProductFromCartEvent(product.productId)" type="button" class="btn btn-secondary">Eemalda</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'CartTable',
  props:{
    products: Array()
  },
  methods: {
    removeProductFromCartEvent: function (productId){
      this.$emit('removeProductFromCartEvent', productId)
    }

  }
}
</script>