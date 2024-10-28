import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  tagTypes: ['Category'],
  endpoints: (builder) => ({

    getCategories: builder.query({
      query: () => 'categories/',
      providesTags: [{ type: 'Category', id: 'LIST' }],
    }),

    addCategory: builder.mutation({
      query: ({body,id}) => ({
        url: `categories?userId=${id}`,
        method: 'POST',
        body:body,
      }),
      invalidatesTags: [{ type: 'Category' }],
    }),
       // Query for getting single category
       getCategoryById: builder.query({
        query: (slug) => ({
          url: `categories/${slug}`,
        }),
        providesTags: [{ type: 'Category', id: 'LIST' }],
      }),
 // Edit Category
 editCategory: builder.mutation({
  query: ({ slug,userId, updatedCategory }) => ({
    url: `categories/${slug}?userId=${userId}`,
    method: 'PATCH',
    body: updatedCategory,
  }),
  invalidatesTags: [{ type: 'Category', id: 'LIST' }],
}),

// / delete category by id and userId
    deleteCategory: builder.mutation({
      query: ({slug,userId}) => ({
        // url: `order/${id}`,
        url: `categories/${slug}?userId=${userId}`,
       
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Category', id: 'LIST' }, { type: 'Category' }],
    }),

  }),
});

export const { useGetCategoriesQuery, useAddCategoryMutation,useEditCategoryMutation,useGetCategoryByIdQuery ,useDeleteCategoryMutation} = categoryApi;
