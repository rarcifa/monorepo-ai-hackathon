import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { generateFloorPlan } from 'api/floorPlanAPI';
import { IResult, TAsyncThunkConfig } from 'features/types/floorplan';

export const generateFloorPlansAction: AsyncThunk<
  IResult,
  {
    totalFloor: number[];
    roomOneFloor: number[];
    roomTwoFloor: number[];
    roomThreeFloor: number[];
  },
  TAsyncThunkConfig
> = createAsyncThunk(
  'floorplan/generateFloorPlansAction',
  async (
    { totalFloor, roomOneFloor, roomTwoFloor, roomThreeFloor },
    { rejectWithValue }
  ) => {
    try {
      const data: IResult = await generateFloorPlan(
        totalFloor,
        roomOneFloor,
        roomTwoFloor,
        roomThreeFloor
      );
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
