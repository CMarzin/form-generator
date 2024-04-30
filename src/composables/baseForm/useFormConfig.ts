import InputText from '@/components/InputText.vue';

import type { ValueOf } from '@/types/Helpers'

const inputConfigKey = {
	FIRST_NAME: 'first_name',
	LAST_NAME: 'last_name',
} as const;

type FormInputsComponents = typeof InputText;

/**
 * Why we Omit modelValue here ?
 * The modelValue props will be added directly in the template instead of in the config.
 * We can safely omit this required props.
 */

type InputTextProps = Omit<
	InstanceType<typeof InputText>['$props'],
	'modelValue'
>;

interface baseFormInputComponents {
	name: ValueOf<typeof inputConfigKey>;
	required: boolean;
	label: string;
	props: InputTextProps;
	component: () => FormInputsComponents;
}

type InputConfigType = {
	[key in ValueOf<typeof inputConfigKey>]: baseFormInputComponents;
};

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
