export interface ItemFactsResponse {
  total: number
  items: ItemFacts[]
}

export interface ItemFacts {
  text: string
  type: string
  spoiler: boolean
}
