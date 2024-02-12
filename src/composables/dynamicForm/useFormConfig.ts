import InputText from '@/components/InputText.vue';

type ValueOf<Obj> = Obj[keyof Obj]; // little helper to get the ValueOf our const

type FormInputsComponents =
  | typeof InputText;

/**
 * Why we Omit modelValue here ?
 * The modelValue props will be added directly in the template instead of in the config.
 * We can safely omit this required props.
 */

type InputTextProps = Omit<
  InstanceType<typeof InputText>['$props'],
  'modelValue'
>;

export interface baseFormInputComponents {
  name: ValueOf<typeof inputConfigKey>;
  required: boolean;
  label: string;
  props: InputTextProps;
  component: () => FormInputsComponents;
}

type InputConfigType = {
  [key in ValueOf<typeof inputConfigKey>]: baseFormInputComponents;
};


const inputConfigKey = {
  FIRST_NAME: 'first_name',
  LAST_NAME: 'last_name',
} as const;


const inputConfig: InputConfigType = {
  [inputConfigKey.FIRST_NAME]: {
    required: true,
    name: inputConfigKey.FIRST_NAME,
    label: `First name`,
    props: {
      placeholder: `first name`,
      name: 'first name',
    },
    component: () => InputText,
  },
	[inputConfigKey.LAST_NAME]: {
		required: true,
		name: inputConfigKey.LAST_NAME,
		label: `Last name`,
		props: {
			placeholder: `last name`,
			name: 'last name',
		},
		component: () => InputText,
	},
}

export { inputConfigKey, inputConfig }
