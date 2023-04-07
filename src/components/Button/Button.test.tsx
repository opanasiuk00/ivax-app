import { render, screen } from '@testing-library/react';
import type { ButtonProps } from './Button';
import { Button, BUTTON_TEST } from './Button';

const buttonProps = {
	children: 'button text',
	variant: 'contained'
} satisfies ButtonProps;


describe('Button', () => {
	test('should display provider children', () => {
		render(<Button {...buttonProps} />);

		const children = screen.getByTestId(BUTTON_TEST.CHILDREN);

		// eslint-disable-next-line testing-library/no-node-access
		expect(children).toHaveTextContent(buttonProps.children)
	});
	test('should set right classes when provided contained variant', () => {
		const classNames = 'bg-secondary text-white';
		render(<Button {...buttonProps} variant='contained' />);

		const container = screen.getByTestId(BUTTON_TEST.CONTAINER);

		expect(container).toHaveClass(classNames)
	});
})