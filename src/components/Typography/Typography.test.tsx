import { render, screen } from '@testing-library/react';
import { TYPOGRAPHY_TEST, Typography, TypographyProps } from './Typography'


const typographyProps = {
	children: 'test',
	tag: 'h2',
} satisfies TypographyProps;

describe('Typography', () => {
	test('Should display provider children', () => {
		render(<Typography {...typographyProps} />);

		const children = screen.getByTestId(TYPOGRAPHY_TEST.CONTAINER);
		// eslint-disable-next-line testing-library/no-node-access
		expect(children).toHaveTextContent(typographyProps.children);
	});

	test('should set right classes when provided h1 tag', () => {
		render(<Typography {...typographyProps} tag='h1' />)

		const children = screen.getByTestId(TYPOGRAPHY_TEST.CONTAINER);

		expect(children).toHaveClass('h1');
	})
})