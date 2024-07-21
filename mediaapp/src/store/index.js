import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumsApi } from './apis/AlbumsApi';
import { photosApi } from "./apis/PhotosApi";

const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer, // will compile to albums: albumsApi.reducer
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat([albumsApi.middleware, photosApi.middleware]);
    }
});

setupListeners(store.dispatch);

export { store };
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/deleteUser';
export { useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation } from './apis/AlbumsApi';
export { useFetchPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation } from './apis/PhotosApi';