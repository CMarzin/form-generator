<script setup lang="ts">
import { computed } from 'vue';
interface InputTextProps {
	placeholder: string;
	name: string;
	modelValue: string;
}

const props = defineProps<InputTextProps>()
const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
	get() {
		return props.modelValue
	},
	set(value) {
		emit('update:modelValue', value)
	}
})

</script>

<template>
	<input
		v-model="inputValue"
		:id="name"
		type="text"
		:placeholder="placeholder"
		/>
</template>
