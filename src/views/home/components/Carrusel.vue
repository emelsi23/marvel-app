<template>
    <v-carousel v-model="model" hide-delimiter-background cyclev>
        <v-carousel-item v-for="(item, index) in items" :key="index">
            <v-img :src="item.image" aspect-ratio="2.5"></v-img>
        </v-carousel-item>
    </v-carousel>
</template>
  
<script>
export default {
    data() {
        return {
            model: 0,
            items: [
                {
                    image: 'https://wallpapers.com/images/featured/marvel-bte9zcsa9pvyzpvk.jpg',
                },
                {
                    image: 'https://i.redd.it/44gbw2j81od51.jpg',
                },
                {
                    image: 'https://i.pinimg.com/originals/7a/f5/b3/7af5b3fb356e9359196954604514f648.jpg',
                },
            ]
        };
    },
    created() {
        setInterval(() => {
            this.model = (this.model + 1) % this.items.length;
        }, 5000);
    }
};
</script>
  