import { fireEvent, render, screen } from '@testing-library/react';
import { SliderArrow } from './SliderArrow';

const noop = () => {};

describe('SliderArrow', () => {
	it('renders the correct aria-label for each direction', () => {
		const { rerender } = render(
			<SliderArrow direction="left" disabled={false} onClick={noop} />,
		);
		expect(
			screen.getByRole('button', { name: 'Scroll left' }),
		).toBeInTheDocument();

		rerender(<SliderArrow direction="right" disabled={false} onClick={noop} />);
		expect(
			screen.getByRole('button', { name: 'Scroll right' }),
		).toBeInTheDocument();
	});

	it('is enabled and calls onClick when disabled is false', () => {
		const handleClick = jest.fn();
		render(
			<SliderArrow direction="left" disabled={false} onClick={handleClick} />,
		);

		const button = screen.getByRole('button');
		expect(button).toBeEnabled();
		expect(button).toHaveClass('cursor-pointer');

		fireEvent.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('is disabled and does not call onClick when disabled is true', () => {
		const handleClick = jest.fn();
		render(
			<SliderArrow direction="left" disabled={true} onClick={handleClick} />,
		);

		const button = screen.getByRole('button');
		expect(button).toBeDisabled();
		expect(button).toHaveClass('cursor-not-allowed');

		fireEvent.click(button);

		expect(handleClick).not.toHaveBeenCalled();
	});
});
