import React from 'react';
import {
  ResultContainer,
  ResultCard,
  ResultCardImage,
} from '../../components/ResultCard';
import { useFavourites } from '../../hooks/useFavourites';
import { SearchResult } from '../../types/searchResult';

// TODO: Add animation to loading cards

export const Favourites = () => {
  const { favourites = [] } = useFavourites();
  return (
    <ResultContainer>
      {favourites.map(({ title, id, images }: SearchResult) => {
        const fixedWidth = images && images.fixed_width;
        const url = fixedWidth && fixedWidth.url;
        const width = fixedWidth && fixedWidth.width;
        const height = fixedWidth && fixedWidth.height;
        return (
          <ResultCard
            key={id}
            data-testid={`fav-card-${id}`}
            width={width}
            height={height}
          >
            <ResultCardImage
              data-testid={`fav-image-${id}`}
              src={url}
              alt={title}
            />
          </ResultCard>
        );
      })}
    </ResultContainer>
  );
};
