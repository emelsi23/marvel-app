<template>
  <div>
    <Navbar />
    <h1 class="text-center pb-5 display-5 " >Characters</h1>

    <CharactersCards></CharactersCards>
    <Footer></Footer>
  </div>
</template>
  
<script>
import Navbar from "@/components/Navbar.vue";
import CharactersCards from "@/views/characters/components/CharactersCards";
import Footer from "@/components/Footer.vue";


export default {
  components: {
    Navbar,
    CharactersCards,
    Footer

  },
}
</script>
  