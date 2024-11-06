import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseUrl=process.env.NEXT_PUBLIC_BASU_URL;
// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `api/products`,
    }),
    getProduct:builder.query({
        query:(id)=> `api/products/${id}`
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery,useGetProductQuery } = productsApi;
