<template>
    <v-row>
        <v-col v-for="(item, index) in items" :key="index" class="ma-2">
            <v-card class="mx-auto text-center text-h1" max-width="300" height="560">
                <v-img :src=item.image height="300"></v-img>

                <v-card-title class="pb-8 mt-5">
                    {{ item.name }}
                </v-card-title>

                <v-card-subtitle class="text-center">
                    {{item.description }}
                </v-card-subtitle>
                
                <v-btn color="red lighten-2" text @click="addrouter(item.ruta)">
                    Explore
                </v-btn>

            </v-card>

        </v-col>

    </v-row>
</template>


<script>
export default {
    data: () => ({
        show: false,
        items: [
            {name: "Characters",
             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTMZwCRn6Enm2sV3DloYE-fRLbDsJHguCmA&usqp=CAU",
             ruta: '/charactes',
             description: "See all the characters in the Marvel universe and some characteristics that could be useful to you."
        },
            { name: "Comics",
             image: "https://cdn.marvel.com/content/1x/avas_p_0189_ss13_copy.jpg",
              ruta: '/comics',
              description: "Great variety of all types of comics that exist in the amazing world of Marvel, made to suit your tastes."
            
            },
            { name: "Series",
             image: "https://c4.wallpaperflare.com/wallpaper/375/342/535/thor-chris-hemsworth-men-mjolnir-wallpaper-preview.jpg",
              ruta: '/series',
              description: "Different types of series of your preference about the Marvel universe that you may like."
            }
        ]
    }), methods: {
        addrouter(ruta) {
            this.$router.push(ruta)

        }

    }
}
</script>