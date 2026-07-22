import { formatDate } from './Details.helpers';

describe('formatDate', () => {
	it('formats date', () => {
		expect(formatDate('2022-07-18T11:28:29.596Z')).toBe('July 18, 2022');
	});

	it('returns "Invalid Date" for unparseable input', () => {
		expect(formatDate('not-a-date')).toBe('Invalid Date');
	});
});
