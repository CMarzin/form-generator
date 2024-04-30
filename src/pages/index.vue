<script setup lang="ts">
import { ref } from 'vue'

import { createEmptyFormValues, userNameFormSchema } from '@/composables/baseForm/useFormFactory'

let baseInputsData = ref(createEmptyFormValues())
let schema = userNameFormSchema

function handleSubmit(data: typeof baseInputsData.value) {
    console.table(data)
}
</script>

<template>
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
name: Static schema
</route>