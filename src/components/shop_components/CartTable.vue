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
      <tr>
        <th>Foto</th>
        <td>Kuusk</td>
        <td>0-1</td>
        <td>Harjumaa</td>
        <td>50€</td>
        <td>
          <div>
            <button type="button" class="btn btn-secondary">Eemalda</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'CartTable'
}
</script>