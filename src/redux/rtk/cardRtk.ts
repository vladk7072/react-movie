import { ItemSimilarsResponse } from './../../models/item-similars';
import { ItemVideoResponse } from './../../models/item-videos';
import { TopFilmType } from './../../models/rtk-body-models/getTopFilm';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ItemImagesResponse } from '../../models/item-images';

export const cardRtk = createApi({
  reducerPath: "cardRtk",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api/",
  }),
  endpoints: (build) => ({
    getItemFilm: build.query<TopFilmType, string>({
      query: (body) => ({
        url: `v2.2/films/${body}`,
        headers: {
          "X-API-KEY": "2d6f4996-3732-4ecc-ad4b-6787aed18135",
          "Content-Type": "application/json",
        },
      }),
    }),
    getItemVideos: build.query<ItemVideoResponse, string>({
      query: (body) => ({
        url: `v2.2/films/${body}/videos`,
        headers: {
          "X-API-KEY": "2d6f4996-3732-4ecc-ad4b-6787aed18135",
          "Content-Type": "application/json",
        },
      }),
    }),
    getItemImages: build.query<ItemImagesResponse, string>({
      query: (body) => ({
        url: `v2.2/films/${body}/images`,
        headers: {
          "X-API-KEY": "2d6f4996-3732-4ecc-ad4b-6787aed18135",
          "Content-Type": "application/json",
        },
      }),
    }),
    getItemSimilars: build.query<ItemSimilarsResponse, string>({
      query: (body) => ({
        url: `v2.2/films/${body}/similars`,
        headers: {
          "X-API-KEY": "2d6f4996-3732-4ecc-ad4b-6787aed18135",
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});


export const { useLazyGetItemFilmQuery, useLazyGetItemVideosQuery, useLazyGetItemImagesQuery, useLazyGetItemSimilarsQuery } = cardRtk;