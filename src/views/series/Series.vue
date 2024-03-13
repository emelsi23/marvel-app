<template>
  <div>
    <Navbar />
    <h1 class="text-center pb-5 display-5 " >Series</h1>

    <SeriesCards></SeriesCards>
    <Footer></Footer>
  </div>
</template>
  
<script>
import Navbar from "@/components/Navbar.vue";
import SeriesCards from "@/views/series/components/SeriesCards";
import Footer from "@/components/Footer.vue";


export default {
  components: {
    Navbar,
    SeriesCards,
    Footer

  },
}
</script>
  