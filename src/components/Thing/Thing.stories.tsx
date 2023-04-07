import { Thing } from './Thing';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Thing> = {
	title: 'Example/Thing',
	component: Thing,
}

export default meta;

type Story = StoryObj<typeof Thing>;

export const Default: Story = {
	args: {
		children: 'Your deadline is<br/>our religion'
	},
};

export const ThingElem: Story = {
	render: () => <Thing>24/7 direct contact<br />with us </Thing>
}