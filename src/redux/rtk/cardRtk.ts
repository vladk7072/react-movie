import { TopFilmType } from './../../models/rtk-body-models/getTopFilm';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AnyARecord } from 'dns';

export const cardRtk = createApi({
  reducerPath: "cardRtk",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api/",
  }),
  endpoints: (build) => ({
    getTopItemFilm: build.query<TopFilmType, string>({
      query: (body) => ({
        url: `v2.2/films/${body}`,
        headers: {
          "X-API-KEY": "2d6f4996-3732-4ecc-ad4b-6787aed18135",
          "Content-Type": "application/json",
        },
      }),
    }),
    getTopItemVideos: build.query<AnyARecord, string>({
      query: (body) => ({
        url: `v2.2/films/${body}/videos`,
        headers: {
          "X-API-KEY": "2d6f4996-3732-4ecc-ad4b-6787aed18135",
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});


export const { useLazyGetTopItemFilmQuery, useLazyGetTopItemVideosQuery } = cardRtk;