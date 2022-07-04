<template>
  <div>
    <div>자식</div>
    <input v-model="inputTag" @input="onInput" @blur="onBlur">
    <div> 자식인풋: {{inputTag}}</div>
  </div>
</template>

<script setup>
import {ref} from "vue";

// const inputTag = ref('');

const props = defineProps({
  inputTag: {
    type: String
  }
})

const onInput = (event) => {
  emits('update:inputTag',event.target.value);
}

// const onBlur = (e) => {
//   emits('update:inputTag',"gd");
// }


const emits = defineEmits(['update:inputTag']);

// emits('update:inputTag' , props.inputTag);

</script>

<style scoped>

</style>