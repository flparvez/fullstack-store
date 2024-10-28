import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  tagTypes: ['Product', 'Cart'],
  endpoints: (builder) => ({

    addProduct: builder.mutation({
      query: ({ body,id}) => ({
        url: `product?userId=${id}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Product', id: 'LIST' }, { type: 'Cart' }],
    }),
    
    editProduct: builder.mutation({
      query: ({ productSlug, updatedProduct,id }) => ({
        url: `product/${productSlug}?userId=${id}`,
        method: 'PATCH',
        body: updatedProduct,
      }),
      invalidatesTags: [{ type: 'Product', id: 'LIST' }, { type: 'Cart' }],
    }),

    getProducts: builder.query({
      query: () => 'product/',
      providesTags: [{ type: 'Product', id: 'LIST' }],
    }),

    getProductBySlug: builder.query({
      query: (productSlug) => `product/${productSlug}`,
      providesTags: (result, error, productSlug) => [{ type: 'Product', id: productSlug }],
    }),

    deleteProduct: builder.mutation({
      query: ({productSlug,userId}) => ({
        url: `product/${productSlug}?userId=${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Product', id: 'LIST' }, { type: 'Cart' }],
    }),


  }),
});

export const {
  useGetProductsQuery,
  useGetProductBySlugQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,

} = productsApi;
