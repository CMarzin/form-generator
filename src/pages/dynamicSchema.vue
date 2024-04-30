<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import type { Ref } from 'vue'
import type { ValueOf } from '@/types/Helpers'

import { createEmptyFormValues, userNameFormSchema, firstNameFormSchema } from '@/composables/dynamicForm/useFormFactory'

const currentFormValue = {
	DEFAULT_SCHEMA: 'defaultSchema',
	FIRST_NAME_SCHEMA: 'firstNameSchema'
} as const

type CurrentSchema = ValueOf<typeof currentFormValue>

let baseInputsData = ref(createEmptyFormValues())

let schema = ref(userNameFormSchema)
let currentForm: Ref<CurrentSchema> = ref(currentFormValue.DEFAULT_SCHEMA)

watchEffect(() => {
  if (currentForm.value === 'firstNameSchema') {
    schema.value = firstNameFormSchema
  } else {
    schema.value = userNameFormSchema
  }
})

function switchForm(form: CurrentSchema) {
  currentForm.value = form
}

function handleSubmit(data: typeof baseInputsData.value) {
  if (currentForm.value === 'defaultSchema') {
    console.table(data)
  } else {
    console.table(data)
  }
}
</script>

<template>
<div class="switch-buttons">
	<button @click="switchForm('defaultSchema')">Default schema</button>
	<button @click="switchForm('firstNameSchema')">First name schema</button>
</div>
<form class="mt-2" @submit.prevent="handleSubmit(baseInputsData)">
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
	<button type="submit" class="mt-2">Submit</button>
</form>
<pre class="mt-2">{{ baseInputsData }}</pre>
</template>

<route lang="yaml">
name: Dynamic schema
</route>