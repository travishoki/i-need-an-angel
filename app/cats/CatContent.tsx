'use client';

import { SubmitEvent, useCallback, useEffect, useState } from 'react';
import { buildCatUrl } from './CatContent.helpers';
import CatForm from './CatForm';
import FavoritedCatList from './FavoritedCatList';
import { getFavorites, toggleCatFavorite } from './FavoriteButton.helpers';
import { Cat } from './types';
import CatCard from './CatCard';

export default function CatContent() {
	const [currentCat, setCurrentCat] = useState<Cat>();
	const [tagValue, setTagValue] = useState('');
	const [textValue, setTextValue] = useState('');
	const [loading, setLoading] = useState(true);

	const [favoriteIds, setFavoriteIds] = useState(getFavorites);

	const fetchCats = useCallback(
		({ tag, text }: { tag?: string; text?: string }) => {
			const url = buildCatUrl({ tag, text });

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

	const onToggleFavorite = (id: string) => {
		setFavoriteIds(toggleCatFavorite(id));
	};

	const onClickSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);
		fetchCats({
			tag: tagValue,
			text: textValue,
		});
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
					{currentCat && (
						<CatCard
							catId={currentCat.id}
							isFavorite={false} // TODO: add in value
							onToggleFavorite={onToggleFavorite}
							url={currentCat.url}
						/>
					)}

					{favoriteIds.length ? (
						<>
							<h2 className="mt-[30px] mb-[20px] text-xs font-semibold tracking-wide text-zinc-500 uppercase">
								Favorites
							</h2>
							<FavoritedCatList
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
