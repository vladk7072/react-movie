export interface ItemSimilarsResponse {
  total: number
  items: ItemSimilars[]
}

export interface ItemSimilars {
  filmId: number
  nameRu: string
  nameEn: string
  nameOriginal: string
  posterUrl: string
  posterUrlPreview: string
  relationType: string
}
