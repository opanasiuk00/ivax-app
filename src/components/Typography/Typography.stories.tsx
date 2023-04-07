import { Typography } from './Typography';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
	title: 'Example/Typography',
	component: Typography,
}

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
	args: {
		tag: 'h2',
		children: 'Your deadline is our religion',
	},
};

export const h1: Story = {
	render: () => <Typography tag="h1">Paint your thoughts with <Typography tag="span">IVAX</Typography></Typography>,
};
export const h2: Story = {
	render: () => <Typography tag="h2">What our clients <Typography tag="span">say about us</Typography></Typography>,
};