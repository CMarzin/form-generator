<script setup lang="ts">
import { ref } from 'vue';

import { createEmptyFormValues, baseFormSchema } from '@/composables/dynamicForm/useFormFactory';

let baseInputsData = ref(createEmptyFormValues());
let schema = baseFormSchema

function handleData(data: typeof baseInputsData.value) {
  console.log(data);
}
</script>

<template>
  <main>
    <pre>{{ baseInputsData }}</pre>
    <form @submit.prevent="handleData(baseInputsData)">
      <div
        v-for="(input, index) in schema"
        :key="`${input.name}-${index}`"
      >
        <label :for="input.name">{{ input.label }}
          <span v-if="input.required">*</span>
        </label>
        <component
          :is="input.component()"
          v-bind="input.props"
          v-model="baseInputsData[input.name]"
         />
      </div>
      <button type="submit">Submit</button>
    </form>
  </main>
</template>

<style scoped>
form {
  margin-top: 2rem;
}
</style>
