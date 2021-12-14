<template>
  <div class="steakdetail">
    <Navbar />
    <div class="container">
        <!-- breadcrumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb shadow">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/steaks" class="text-dark">Steak</router-link>
              </li>
              <li class="breadcrumb-item active text-dark" aria-current="page">
                Steak Order
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "SteakDetail",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>