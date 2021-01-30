<template>
    <h1> {{ name }} </h1>
    <img :src="img"/>
    <p> {{ description }} </p>
</template>

<script setup>
    import {defineProps} from 'vue'

    defineProps({
        name: String,
        img: String,
        description: String,
        id: String
    })
</script>


<style scoped>
    h1 {
        color: #09f;
    }

    img {
        width: 320px;
        height: auto;
    }
</style>