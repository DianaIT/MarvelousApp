<template>
<Header/>
  <Character 
  v-for="character of listOfChareacters" 
  :key="character.id" 
  :name="character.name" 
  :img="character.image" 
  :description="character.description" />
</template>

<script setup>

  import {default as Character} from './components/Character.vue'
  import {default as Header} from './components/Header.vue'
  import { getCharacters } from '../services/getCharacters.js'
  import { onMounted, ref } from 'vue'


    onMounted(() =>{
    getCharacters()
    .then(listOfCharactersResponse => {
      listOfChareacters.value = listOfCharactersResponse
    })
  })

   const listOfChareacters = ref([])
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>