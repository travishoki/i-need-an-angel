'use client';

import { SubmitEvent, useCallback, useEffect, useState } from 'react';
import CatForm from './CatForm';
import CatList from './CatList';
import { ROOT_URL } from './const';
import { getFavorites, toggleCatFavorite } from './FavoriteButton.helpers';
import { Cat } from './types';

const CATS_URL = `${ROOT_URL}/cat`;

export default function CatContent() {
	const [currentCat, setCurrentCat] = useState<Cat>();
	const [tagValue, setTagValue] = useState('');
	const [textValue, setTextValue] = useState('');
	const [loading, setLoading] = useState(true);

	// Seeded from storage, then kept here so both lists render from one source.
	const [favoriteIds, setFavoriteIds] = useState(getFavorites);

	const onToggleFavorite = (id: string) => {
		setFavoriteIds(toggleCatFavorite(id));
	};

	const fetchCats = useCallback(
		({ tag, text }: { tag?: string; text?: string }) => {
			let url = CATS_URL;

			if (tag || text) {
				url += '?';
			}
			if (tag) {
				url += `tags=${tag}`;
			}
			if (text) {
				url += `says=${text}`;
			}

			fetch(url, {
				headers: {
					Accept: 'application/json',
				},
				method: 'GET',
			})
				.then((response) => response.json())
				.then((data: Cat) => {
					setCurrentCat(data);
				})
				.finally(() => {
					setLoading(false);
				});
		},
		[],
	);

	useEffect(() => {
		fetchCats({});
	}, [fetchCats]);

	const onClickSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);
		fetchCats({ tag: tagValue, text: textValue });
	};

	return (
		<>
			<CatForm
				onChangeTag={setTagValue}
				onChangeText={setTextValue}
				onClickSubmit={onClickSubmit}
				tagValue={tagValue}
				textValue={textValue}
			/>

			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					<CatList
						catsList={currentCat ? [currentCat] : []}
						favoriteIds={favoriteIds}
						onToggleFavorite={onToggleFavorite}
					/>

					{favoriteIds.length ? (
						<>
							<h2 className="mt-[30px] mb-[20px] text-xs font-semibold tracking-wide text-zinc-500 uppercase">
								Favorites
							</h2>
							<CatList
								catsList={favoriteIds.map((id) => ({ id }))}
								favoriteIds={favoriteIds}
								onToggleFavorite={onToggleFavorite}
							/>
						</>
					) : null}
				</>
			)}
		</>
	);
}
