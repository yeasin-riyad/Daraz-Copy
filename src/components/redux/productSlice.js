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
    registerUser:builder.mutation({
      query:(user)=>({
        url: 'api/register',
        method: 'POST',
        body: user,
      })

    }),
    addToCart:builder.mutation({
      query:({id,data})=>({
        url:`api/addToCart/${id}`,
        method:'POST',
        body:data

      }),
    }),
    addToFavorite:builder.mutation({
      query:(data)=>({
        url:`api/favorite`,
        method:'POST',
        body:data

      }),
    }),
    myCartItems:builder.query({
      query:(id)=>({
        url:`api/myCartItems/${id}`,
      })
    }),
    myfavoriteItems:builder.query({
      query:(email)=>({
        url:`api/favorite/${email}`,
        
      })

    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetProductsQuery,useGetProductQuery,useRegisterUserMutation,useAddToCartMutation,useMyCartItemsQuery,useAddToFavoriteMutation,useMyfavoriteItemsQuery} = productsApi;
