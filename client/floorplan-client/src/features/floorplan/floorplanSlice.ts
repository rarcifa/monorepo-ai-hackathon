import { createSlice, Slice } from '@reduxjs/toolkit';
import { generateFloorPlansAction } from 'features/floorplan/actions/generateFloorPlansAction';
import { ELoadingState, IResult } from 'features/types/floorplan';

export interface IFloorplanSlice {
  results?: IResult;
  loading: ELoadingState;
}

const initialState: IFloorplanSlice = {
  results: {
    data: [],
  },
  loading: ELoadingState.IDLE,
};

export const floorplanSlice: Slice<IFloorplanSlice, {}, 'floorplan'> =
  createSlice({
    name: 'floorplan',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(
        generateFloorPlansAction.pending,
        (state: IFloorplanSlice) => {
          state.loading = ELoadingState.PENDING;
        }
      );
      builder.addCase(
        generateFloorPlansAction.fulfilled,
        (state: IFloorplanSlice, action) => {
          state.loading = ELoadingState.SUCCEEDED;
          state.results = action.payload;
        }
      );
      builder.addCase(
        generateFloorPlansAction.rejected,
        (state: IFloorplanSlice) => {
          state.loading = ELoadingState.FAILED;
        }
      );
    },
  });

export default floorplanSlice.reducer;
