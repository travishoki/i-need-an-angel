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

	const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setFavoriteIds(getFavorites());
	}, []);

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

			<div className="mb-[20px]">
				{loading ? (
					<div className="flex min-h-[300px] min-w-[300px] items-center justify-center">
						<p className="text-center">Loading...</p>
					</div>
				) : (
					<>
						{currentCat && (
							<CatCard
								catId={currentCat.id}
								isFavorite={favoriteIds.includes(currentCat.id)}
								onToggleFavorite={onToggleFavorite}
								size="m"
								url={currentCat.url}
							/>
						)}
					</>
				)}
			</div>

			<h2 className="mb-[10px] text-center text-lg font-semibold tracking-wide text-zinc-500 uppercase">
				Favorites
			</h2>
			{favoriteIds.length ? (
				<FavoritedCatList
					favoriteIds={favoriteIds}
					onToggleFavorite={onToggleFavorite}
				/>
			) : (
				<p className="text-center">
					Favorite a cat image to add it to the list
				</p>
			)}
		</>
	);
}
