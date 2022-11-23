<template>

  <div class="container">
    <div class="row justify-content-start" >
      <div class="d-grid gap-2 col col-lg-3">
        <div>
          <TreeTypeDropdown/>


          <HeightDropdown/>

    <div>
      <select class="form-select form-select-sm mb-5" aria-label=".form-select-sm example">
        <option  selected disabled value="0">--Maakond--</option>
        <option value="1">One</option>
      </select>
    </div>

          <div>
            <button type="button" class="btn btn-secondary">Tühjenda valikud</button>
          </div>

      </div>
      </div>
      <div class="col col-lg-9">
        tabel
      </div>
    </div>

  </div>


</template>

<script>
import TreeTypeDropdown from "@/components/shop_components/TreeTypeDropdown";
import HeightDropdown from "@/components/shop_components/HeightDropdown";

export default {
  name: "ShopView",
  components: {HeightDropdown, TreeTypeDropdown}
}
</script>

