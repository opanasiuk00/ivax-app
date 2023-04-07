import { render, screen } from '@testing-library/react'
import { THING_TEST, Thing, ThingProps } from './Thing'

const thingProps = {
	children: 'Your deadline is our religion'
} satisfies ThingProps;

describe('Thing', () => {
	test('Should display provider children', () => {
		render(<Thing {...thingProps} />);

		const children = screen.getByTestId(THING_TEST.CHILDREN);
		// eslint-disable-next-line testing-library/no-node-access
		expect(children).toHaveTextContent(thingProps.children);
	})
})