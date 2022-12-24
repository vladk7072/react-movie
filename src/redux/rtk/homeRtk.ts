import { getPremFilms } from "../../models/rtk-body-models/getPremFilms";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PremiersFilmsResponse } from "../../models/premiers-films";
import { TopFilmsResponse } from "../../models/top-films";

export const homeRtk = createApi({
  reducerPath: "homeRtk",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api/",
  }),
  endpoints: (build) => ({
    getTopFilms: build.query<TopFilmsResponse, void>({
      query: () => ({
        url: `v2.2/films/top`,
        headers: {
          "X-API-KEY": "2d6f4996-3732-4ecc-ad4b-6787aed18135",
          "Content-Type": "application/json",
        },
      }),
    }),
    getPremiersFilms: build.query<PremiersFilmsResponse, getPremFilms>({
      query: (body) => ({
        url: `v2.2/films/premieres`,
        headers: {
          "X-API-KEY": "2d6f4996-3732-4ecc-ad4b-6787aed18135",
          "Content-Type": "application/json",
        },
        params: {
          year: body.year,
          month: body.month,
        },
      }),
    }),
  }),
});

export const { useGetTopFilmsQuery, useLazyGetPremiersFilmsQuery } = homeRtk;
