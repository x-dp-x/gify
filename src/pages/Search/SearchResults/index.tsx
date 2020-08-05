import React from 'react';
import { useSearch } from '../../../hooks/useSearch';
import { SearchCardContainer, SearchCard, SearchCardImage } from './SearchCard';

interface SearchResult {
  title: string;
  id: string;
  images: {
    fixed_width: {
      url: string;
      width: string;
      height: string;
    };
  };
}

export const SearchResults = () => {
  const { searchResults } = useSearch();

  return (
    <SearchCardContainer>
      {searchResults.map(({ title, id, images }: SearchResult) => {
        const fixedWidth = images && images.fixed_width;
        const url = fixedWidth && fixedWidth.url;
        const width = fixedWidth && fixedWidth.width;
        const height = fixedWidth && fixedWidth.height;
        return (
          <SearchCard width={width} height={height}>
            <SearchCardImage key={id} src={url} alt={title} />
          </SearchCard>
        );
      })}
    </SearchCardContainer>
  );
};
