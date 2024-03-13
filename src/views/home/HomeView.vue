<template>
  <div>
    <Navbar></Navbar>
    <h1 class="display-5 text-center pb-5">Home</h1>
    <div class="">
      <Carrusel></Carrusel>
    </div>
    <div class="mt-8 pb-8">
      <HomeCards></HomeCards>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HomeCards from "@/views/home/components/HomeCards.vue";
import Navbar from "@/components/Navbar.vue";
import Carrusel from "@/views/home/components/Carrusel.vue";
import Footer from "@/components/Footer.vue";





export default {
  name: 'Home',

  components: {

    Carrusel,
    Navbar,
    Footer,
    HomeCards
  },
}
</script>


<style></style>