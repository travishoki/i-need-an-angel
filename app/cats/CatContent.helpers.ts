import { ROOT_URL } from './const';

const CAT_URL = `${ROOT_URL}/cat`;

export function buildCatUrl({ tag, text }: BuildCatUrlOptions) {
	let url = CAT_URL;

	if (tag) {
		url += `/${tag}`;
	}

	if (text) {
		url += `/says/${text}`;
	}

	return `${url}?fontSize=100`;
}

type BuildCatUrlOptions = {
	tag?: string;
	text?: string;
};
