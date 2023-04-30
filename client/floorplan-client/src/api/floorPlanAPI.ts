import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { SERVICE_API_BASE_URL, logger } from 'config/constants';
import { IResult } from 'features/types/floorplan';

export const serviceInstance: AxiosInstance = axios.create({
  baseURL: `http://localhost:3040/api/v1/floorplan-service`,
});

/**
 * @summary  returns results from floorplan api
 * @param  {number} total_area_input_one - numeric param
 * @param  {number} total_area_input_two - numeric param
 * @param  {number} room_one_input_one - numeric param
 * @param  {number} room_one_input_two - numeric param
 * @param  {number} room_two_input_one - numeric param
 * @param  {number} room_two_input_two - numeric param
 * @param  {number} room_three_input_one - numeric param
 * @param  {number} room_three_input_two - numeric param
 * @returns  {Promise<IResult>} - returned value
 */
export const generateFloorPlan = async (
  total_area_input_one: number,
  total_area_input_two: number,
  room_one_input_one: number,
  room_one_input_two: number,
  room_two_input_one: number,
  room_two_input_two: number,
  room_three_input_one: number,
  room_three_input_two: number
): Promise<IResult> => {
  const url = '/generate';
  try {
    const dapp: AxiosResponse<IResult, string> =
      await serviceInstance.post<IResult>(url, {
        total_area_input_one,
        total_area_input_two,
        room_one_input_one,
        room_one_input_two,
        room_two_input_one,
        room_two_input_two,
        room_three_input_one,
        room_three_input_two,
      });
    return dapp.data;
  } catch (e) {
    logger.info(`[floorPlanAPI/getAllDapps] - ${e}`);
    return Promise.reject(e);
  }
};
