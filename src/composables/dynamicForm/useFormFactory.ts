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

const firstNameForm = [
  inputConfig[FIRST_NAME],
];

export { createEmptyFormValues, baseFormSchema, firstNameForm }
