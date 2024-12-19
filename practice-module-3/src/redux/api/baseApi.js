import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) =>({
        getPosts: builder.query({
            query: () => '/posts'
        }),
        getCommentsByPostId : builder.query({
            query: (postId) =>`/posts/${postId}/comments`
        }),
        putPost: builder.mutation({
            query: (post) =>({
                url: '/posts',
                method: 'POST',
                body: post
            })
        })
    })
});

export const { useGetPostsQuery, useLazyGetCommentsByPostIdQuery, usePutPostMutation } = baseApi