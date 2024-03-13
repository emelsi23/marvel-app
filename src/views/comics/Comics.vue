<template>
  <div>
    <Navbar />
    <h1 class="text-center pb-5 display-5 " >Comics</h1>

    <ComicsCards></ComicsCards>
    <Footer></Footer>
  </div>
</template>
  
<script>
import Navbar from "@/components/Navbar.vue";
import ComicsCards from "@/views/comics/components/ComicsCards";
import Footer from "@/components/Footer.vue";


export default {
  components: {
    Navbar,
    ComicsCards,
    Footer

  },
}
</script>
  