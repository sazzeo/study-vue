<template>
  <div>
    <div>부모</div>
    <input v-model="inputTag" />
    <div>부모인풋: {{inputTag}}</div>
    <hr>
    <div>
<!--      아래 둘이 같은 뜻-->
      <Child v-bind:inputTag="inputTag" v-on:update:inputTag="inputTag = $event"/>
      <Child v-model:inputTag="inputTag"/>
    </div>
  </div>

</template>

<script setup>
import Child from "./Child.vue";
import {ref} from "vue";
const inputTag = ref();

</script>

<style scoped>

</style>