<template>
    <v-row>
        <v-col v-for="(item, index) in comics" :key="index" class="ma-2">
            <v-card class="mx-auto text-center text-h1" width="350" height="600" overflow-x: auto>
                <v-img :src="`${item.thumbnail.path}.${item.thumbnail.extension}`" height="300"></v-img>

                <v-card-title class="pb-8 mt-5">
                    {{ item.title }}
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
        comics() {
            return this.$store.getters.getSeries

        }
    },
    created() {
        this.$store.dispatch('fetchSeries')
    },
    methods: {
      

}
  
}
</script>

<style>
.text-truncate {
  max-width: 200px; /* Establece el ancho máximo que desees antes de truncar */
  
  overflow: hidden; /* Oculta el texto que desborda el ancho máximo */
  text-overflow: ellipsis; /* Agrega puntos suspensivos al texto truncado */
}
</style>