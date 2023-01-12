import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getTopInputSearch } from "../../models/rtk-body-models/getTopSearchInput";
import { TopInputSearchType } from "../../models/top-input-search";

export const topInputRtk = createApi({
  reducerPath: "topInputRtk",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api/",
  }),
  endpoints: (build) => ({
    getTopInputSearch: build.query<TopInputSearchType, getTopInputSearch>({
      query: (body) => ({
        url: `v2.1/films/search-by-keyword`,
        params: {
          keyword: body.keyword,
          page: body.page
        },
        headers: {
          "X-API-KEY": "2d6f4996-3732-4ecc-ad4b-6787aed18135",
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useLazyGetTopInputSearchQuery } = topInputRtk;
