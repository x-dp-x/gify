import React from 'react';
import { SearchCardContainer, SearchCard, SearchCardImage } from './SearchCard';
import { SearchResultsProps, SearchResult } from '../../../types/searchResults';

export const SearchResults = ({ searchResults }: SearchResultsProps) => (
  <SearchCardContainer>
    {searchResults.map(({ title, id, images }: SearchResult) => {
      const fixedWidth = images && images.fixed_width;
      const url = fixedWidth && fixedWidth.url;
      const width = fixedWidth && fixedWidth.width;
      const height = fixedWidth && fixedWidth.height;
      return (
        <SearchCard
          key={id}
          data-testid={`search-card-${id}`}
          width={width}
          height={height}
        >
          <SearchCardImage
            data-testid={`search-image-${id}`}
            src={url}
            alt={title}
          />
        </SearchCard>
      );
    })}
  </SearchCardContainer>
);
