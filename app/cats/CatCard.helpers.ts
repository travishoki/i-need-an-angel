import { size } from './CatCard.types';

export const getCardSize = (size: size) => {
	/* eslint-disable no-magic-numbers */
	switch (size) {
		case 's':
			return 150;
		case 'm':
			return 300;
		case 'l':
			return 450;
	}
	/* eslint-enable no-magic-numbers */
};

export const getHeartSize = (size: size) => {
	/* eslint-disable no-magic-numbers */
	switch (size) {
		case 's':
			return 12;
		case 'm':
			return 24;
		case 'l':
			return 36;
	}
	/* eslint-enable no-magic-numbers */
};
