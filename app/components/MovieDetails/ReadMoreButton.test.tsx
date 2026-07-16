import { fireEvent, render, screen } from '@testing-library/react';
import { ReadMoreButton } from './ReadMoreButton';

const noop = () => {};

describe('ReadMoreButton', () => {
	it('shows "Read More" and an unrotated chevron when collapsed', () => {
		render(<ReadMoreButton expanded={false} onClick={noop} />);

		expect(
			screen.getByRole('button', { name: /read more/i }),
		).toBeInTheDocument();
		expect(screen.queryByText(/read less/i)).not.toBeInTheDocument();

		const chevron = document.querySelector('svg');
		expect(chevron).not.toHaveClass('rotate-180');

		expect(screen.getByText('Read More')).toBeInTheDocument();
	});

	it('shows "Read Less" and a rotated chevron when expanded', () => {
		render(<ReadMoreButton expanded={true} onClick={noop} />);

		expect(
			screen.getByRole('button', { name: /read less/i }),
		).toBeInTheDocument();
		expect(screen.queryByText(/read more/i)).not.toBeInTheDocument();

		const chevron = document.querySelector('svg');
		expect(chevron).toHaveClass('rotate-180');

		expect(screen.getByText('Read Less')).toBeInTheDocument();
	});

	it('calls onClick when clicked', () => {
		const handleClick = jest.fn();
		render(<ReadMoreButton expanded={false} onClick={handleClick} />);

		fireEvent.click(screen.getByRole('button'));

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
