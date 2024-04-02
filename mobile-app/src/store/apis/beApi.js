import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '@env';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, {getState}) => {
    const {token} = getState().authReducer;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const beAPi = createApi({
  reducerPath: 'beApi',
  baseQuery,
  endpoints: builder => ({
    getPosts: builder.query({
      query: params => ({
        method: 'GET',
        url: 'posts',
        params,
      }),
    }),
    createPost: builder.mutation({
      query: body => ({
        method: 'POST',
        url: 'posts',
        body,
      }),
    }),
  }),
});

export const beApiEndpoints = {
  ...beAPi,
};
