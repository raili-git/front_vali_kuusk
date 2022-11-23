<template>

  <div class="container">
    <div class="row justify-content-start" >
      <div class="d-grid gap-2 col col-lg-3">
        <div>
          <TreeTypeDropdown/>

          <HeightDropdown/>

          <CountyDropdown/>

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
import CountyDropdown from "@/components/shop_components/CountyDropdown";

export default {
  name: "ShopView",
  components: {CountyDropdown, HeightDropdown, TreeTypeDropdown}
}
</script>

