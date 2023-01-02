export interface ItemImagesResponse {
  total: number
  totalPages: number
  items: ItemImages[]
}

export interface ItemImages {
  imageUrl: string
  previewUrl: string
}
