<template>
  <div class="row mt-4">
    <div class="col">
      <div class="d-flex h-100">
        <div class="justify-content-center align-self-center">
          <h2>
            <strong>Delicius Steak Menu, </strong><br />
            Special for you
          </h2>
          <p>Ayo segera pilih dan pesan makanan favorit anda</p>
          <br />
          <router-link class="btn btn-success btn-lg" to="/steaks">Pesan</router-link>
        </div>
      </div>
    </div>
    <div class="col">
      <img src="../assets/images/hero.png" width="100%" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>