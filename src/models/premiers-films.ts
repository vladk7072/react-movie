export interface PremiersFilmsResponse {
  items: PremierItemResponse[]
  total: number
}

export interface PremierItemResponse {
  kinopoiskId: number
  nameRu: string
  nameEn: string
  year: number
  posterUrl: string
  posterUrlPreview: string
  countries: Country[]
  genres: Genre[]
  duration: number
  premiereRu: string
}

export interface Country {
  country: string
}

export interface Genre {
  genre: string
}