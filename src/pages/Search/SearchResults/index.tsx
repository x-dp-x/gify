import React from 'react';
import { Favourite } from '../../../components/Favourite';
import {
  ResultContainer,
  ResultCard,
  ResultCardImage,
} from '../../../components/ResultCard';
import { SearchResult } from '../../../types/searchResult';

export interface SearchResultsProps {
  searchResults: SearchResult[];
  addToFavourites(value: SearchResult): void;
}

// TODO: Add animation to loading cards

export const SearchResults = ({
  searchResults,
  addToFavourites,
}: SearchResultsProps) => (
  <ResultContainer>
    {searchResults.map(({ title, id, images }: SearchResult) => {
      const fixedWidth = images && images.fixed_width;
      const url = fixedWidth && fixedWidth.url;
      const width = fixedWidth && fixedWidth.width;
      const height = fixedWidth && fixedWidth.height;
      return (
        <ResultCard
          key={id}
          data-testid={`search-card-${id}`}
          width={width}
          height={height}
        >
          <Favourite
            onClick={() => {
              addToFavourites({
                id,
                title,
                images,
              });
            }}
          />
          <ResultCardImage
            data-testid={`search-image-${id}`}
            src={url}
            alt={title}
          />
        </ResultCard>
      );
    })}
  </ResultContainer>
);
