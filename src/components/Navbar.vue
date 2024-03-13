<template>
    <div class="pb-8">
        <v-toolbar   color="light" dark src="https://www.wallpapertip.com/wmimgs/56-567334_red-gradient-backgrounds-images-pictures-becuo-red-gradient.jpg">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Web Marvel</v-toolbar-title>

            <v-spacer></v-spacer>
                <v-btn v-for="(item, index) in routs" :key="index" @click="addrouter(item.ruta)">
                    <span class="mr-2">{{ item.nombre }}</span>
                </v-btn>
        </v-toolbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            drawer: true,
            routs: [
                { nombre: 'Home', ruta: '/' },
                { nombre: 'Characters', ruta: '/charactes' },
                { nombre: 'Comics', ruta: '/comics' },
                { nombre: 'Series', ruta: '/series' }
            ]
        };

    },
    methods: {
        addrouter(ruta) {
            this.$router.push(ruta)

        }

    }

};
</script>