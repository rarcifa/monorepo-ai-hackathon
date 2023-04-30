import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { generateFloorPlan } from 'api/floorPlanAPI';
import { IResult, TAsyncThunkConfig } from 'features/types/floorplan';

export const generateFloorPlansAction: AsyncThunk<
  IResult,
  {
    total_area_input_one: number;
    total_area_input_two: number;
    room_one_input_one: number;
    room_one_input_two: number;
    room_two_input_one: number;
    room_two_input_two: number;
    room_three_input_one: number;
    room_three_input_two: number;
  },
  TAsyncThunkConfig
> = createAsyncThunk(
  'floorplan/generateFloorPlansAction',
  async (
    {
      total_area_input_one,
      total_area_input_two,
      room_one_input_one,
      room_one_input_two,
      room_two_input_one,
      room_two_input_two,
      room_three_input_one,
      room_three_input_two,
    },
    { rejectWithValue }
  ) => {
    try {
      const data: IResult = await generateFloorPlan(
        total_area_input_one,
        total_area_input_two,
        room_one_input_one,
        room_one_input_two,
        room_two_input_one,
        room_two_input_two,
        room_three_input_one,
        room_three_input_two
      );
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
