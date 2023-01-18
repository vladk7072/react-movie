export interface TopFilmsResponse {
  pagesCount: number;
  films: ItemTopFilmsResponse[];
}

export interface ItemTopFilmsResponse {
  filmId: number;
  nameRu: string;
  nameEn?: string;
  year: string;
  filmLength: string;
  countries: Country[];
  genres: Genre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange: any;
}

export interface Country {
  country: string;
}

export interface Genre {
  genre: string;
}