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

const baseFormSchema = [
  inputConfig[FIRST_NAME],
  inputConfig[LAST_NAME],
];

const textSchema = [
  inputConfig[FIRST_NAME],
  inputConfig[LAST_NAME],
];

export { createEmptyFormValues, baseFormSchema, textSchema }
