<template>
  <div class="steak">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col mt-4">
          <h2>Menu <strong>Steak</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari menu favoritmu disini ..."
              aria-label="cari"
              aria-describedby="basic-addon1"
              @keyup="searchSteak"
            />
            <span class="input-group-text" id="basic-addon1"
              ><b-icon-search></b-icon-search
            ></span>
          </div>
        </div>
      </div>

      <div class="row md-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Steaks",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchSteak() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then((Response) => this.setProducts(Response.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((Response) => this.setProducts(Response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>