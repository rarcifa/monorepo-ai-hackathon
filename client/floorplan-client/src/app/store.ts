import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import floorplanSlice from 'features/floorplan/floorplanSlice';

export const store = configureStore({
  reducer: {
    floorplan: floorplanSlice,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
