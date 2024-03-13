<template>
    <v-row>
        <v-col v-for="(item, index) in characters" :key="index" class="ma-2">
            <v-card class="mx-auto text-center text-h1" width="350" height="600">
                <v-img :src="`${item.thumbnail.path}.${item.thumbnail.extension}`" height="300"></v-img>

                <v-card-title class="pb-8 mt-5">
                    {{ item.name }}
                </v-card-title>

                <v-card-text class="text-truncate">
                    {{ item.description }}
                   
                </v-card-text>          
            </v-card>

        </v-col>

    </v-row>
</template>


<script>
export default {
    components: {

    },

    computed: {
        characters() {
            return this.$store.getters.getCharacters

        }
    },
    created() {
        this.$store.dispatch('fetchCharacters')
    },
    methods: {
      
}
  
}
</script>


<style>
.text-truncate {
    max-width: 100%; /* Establece el ancho máximo para el texto */
  max-height: 100%; /* Establece la altura máxima para el texto */
  white-space: nowrap; /* Evita que el texto se divida en varias líneas */
  overflow: hidden; /* Oculta el texto que desborda el ancho y alto máximos */
  text-overflow: ellipsis; /* Agrega puntos suspensivos al texto truncado */
}
</style>