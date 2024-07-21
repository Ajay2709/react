import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3006'
    }),
    endpoints(builder){
        return {
            fetchPhotos: builder.query({
                providesTags: (result, error, album) => {
                    const tags = result.map((photo) => {
                        return  {type: 'Photo', id: photo.id}
                    });
                    tags.push( {type: 'PhotosAlbum', id: album.id});
                    return tags;
                },
                query: (album) => {
                    return {
                        method: 'GET',
                        url: '/photos',
                        params: {albumId: album.id}
                    }
                }
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (result, error, photo) => {
                    return [{type: 'PhotosAlbum', id: result.albumId}]
                },
                query: ({albumId, name}) => {
                    return {
                        method: 'POST',
                        url: '/photos',
                        body: {
                            albumId: albumId,
                            name: name
                        }
                    }
                }
            }),
            deletePhoto: builder.mutation({
                invalidatesTags: (result, error, photo) => {
                    return [{type: 'PhotosAlbum', id: photo.albumId}]
                },
                query: (photo) => {
                    return {
                        method: 'DELETE',
                        url: `/photos/${photo.id}`
                    }
                }
            })
        }
    }
})

export const { useFetchPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation } = photosApi;
export {photosApi};