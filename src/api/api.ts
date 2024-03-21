import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { QueryClient } from 'react-query';

const queryClient = new QueryClient();

export const jsonPlaceholderApi = createApi({
	reducerPath: 'jsonPlaceholderApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
	endpoints: (builder) => ({
		fetchPosts: builder.query<any[], void>({
			query: () => 'posts',
		}),
		fetchPost: builder.query<any, number>({
			query: (postId) => `posts/${postId}`,
		}),
	}),
});

export const { useFetchPostsQuery, useFetchPostQuery } = jsonPlaceholderApi;

export { queryClient }; // Экспортируем QueryClient
