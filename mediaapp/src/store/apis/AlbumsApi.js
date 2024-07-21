import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

/** Creating a RTK Query API
 * 1. Identify a group of related requests in the app
 * 2. Make a new file that will create the API
 * 3. Add a 'reducerPath' to store multiple states related to data, request status, errors.
 * 4. Add a 'baseQuery' to set how and where to send requests.
 * 5. Add an 'endpoint' for each request. Read requests are 'queries' and write requests are 'mutations'.
 * 6. Export all the automatically generated hooks.
 * 7. Connect the API to the store - Reducer, middleware and listeners.
 * 8. Export the hooks from the store/index.js.
 * 9. Use the generated hooks in the required components.
 */

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3006'
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({ // A Query runs immediately when a component is displayed on screen (automatically).
                providesTags: (result, error, user) => { //user holds the object that is passed as the argument to the useFetchAlbumsQuery() hook.
                    const tags = result.map((album) => {
                        return  {type: 'Album', id: album.id}
                    });
                    tags.push( {type: 'UserAlbums', id: user.id});
                    return tags;
                },
                query: (user) => {
                    return {
                        method: 'GET',
                        url: '/albums',
                        params: {
                            userId: user.id
                        }
                    };
                }
            }),
            addAlbum: builder.mutation({  // A Mutation gives a function that will be run when any data need to be changed (based on a user action).
                invalidatesTags: (result, error, user) => { //user holds the object that is passed as the argument to the useAddAlbumMutation() hook.
                    return [ {type: 'UserAlbums', id: user.id} ]
                },
                query: (user) => {
                    return {
                        method: 'POST',
                        url: '/albums',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        }
                    }
                }
            }),
            deleteAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [ {type: 'Album', id: album.id} ]
                },
                query: (album) => {
                    return {
                        method: 'DELETE',
                        url: `/albums/${album.id}`
                    }
                }
            })
        };
    } 
});

export const { useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation } = albumsApi;
export { albumsApi };

