import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
	title: 'Example/Button',
	component: Button,
}

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Contained',
		variant: 'contained'
	},
};

export const Contained: Story = {
	render: () => <Button variant='contained'>Contained</Button>,
};
export const Outlined: Story = {
	render: () => <Button variant='outlined'>Outlined</Button>,
};
