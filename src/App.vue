<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import type { Ref } from 'vue';

import { createEmptyFormValues, baseFormSchema, firstNameForm } from '@/composables/dynamicForm/useFormFactory';

let baseInputsData = ref(createEmptyFormValues());
let schema = ref(baseFormSchema)
let currentForm: Ref<'baseForm' | 'firstNameForm'> = ref('baseForm')

watchEffect(() => {
  if (currentForm.value === 'firstNameForm') {
    schema.value = firstNameForm
  } else {
    schema.value = baseFormSchema
  }
})

function switchForm(form: 'baseForm' | 'firstNameForm') {
  currentForm.value = form
}
</script>

<template>
  <main>
    <div class="switch-buttons">
      <button @click="switchForm('baseForm')">Base form</button>
      <button @click="switchForm('firstNameForm')">Only first name form</button>
    </div>
    <form  class="mt-2">
      <div
        v-for="(input, index) in schema"
        :key="`${input.name}-${index}`"
      >
        <label :for="input.name">{{ input.label }}
          <span v-if="input.required" style="color: red">*</span>
        </label>
        <component
          :is="input.component()"
          v-bind="input.props"
          v-model="baseInputsData[input.name]"
         />
      </div>
    </form>
    <pre class="mt-2">{{ baseInputsData }}</pre>
    <pre class="mt-2">{{ currentForm }}</pre>
  </main>
</template>

<style scoped>
.mt-2 {
  margin-top: 2rem;
}
.switch-buttons {
  display: flex;
  gap: 2rem;
}
</style>
