export interface SearchResultsProps {
  searchResults: SearchResult[];
}

export interface SearchResult {
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
