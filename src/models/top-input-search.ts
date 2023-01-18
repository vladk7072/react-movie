export interface TopInputSearchType {
  keyword: string;
  pagesCount: number;
  films: TopInputSearchFilmType[];
  searchFilmsCountResult: number;
  dataSuccess: boolean;
  count: number;
  fetching: boolean;
  hidden: boolean;
  inputVisible: boolean;
}

export interface TopInputSearchFilmType {
  filmId: number;
  nameEn: string;
  type: string;
  year: string;
  countries: Country[];
  genres: Genre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  nameRu?: string;
  filmLength?: string;
}

export interface Country {
  country: string;
}

export interface Genre {
  genre: string;
}