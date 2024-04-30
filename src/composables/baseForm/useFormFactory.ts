import { inputConfigKey, inputConfig } from './useFormConfig';

const {
	FIRST_NAME,
	LAST_NAME,
} = inputConfigKey;

function createEmptyFormValues() {
	return {
		[FIRST_NAME]: '',
		[LAST_NAME]: '',
	};
}

const userNameFormSchema = [
	inputConfig[FIRST_NAME],
	inputConfig[LAST_NAME],
];

export { createEmptyFormValues, userNameFormSchema }
