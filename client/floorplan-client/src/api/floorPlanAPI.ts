import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  SERVICE_API_BASE_URL,
  SERVICE_API_KEY,
  logger,
} from 'config/constants';
import { IResult } from 'features/types/floorplan';

export const serviceInstance: AxiosInstance = axios.create({
  baseURL: `${SERVICE_API_BASE_URL}/api/v1/floorplan-service`,
  headers: {
    'X-API-KEY': SERVICE_API_KEY,
  },
});

/**
 * @summary  returns results from floorplan api
 * @param  {number} page - page param
 * @returns  {Promise<IResult>} - returned value
 */
export const generateFloorPlan = async (
  total_size: number[],
  room_1_size: number[],
  room_2_size: number[],
  room_3_size: number[]
): Promise<IResult> => {
  const url = '/generate';
  try {
    const dapp: AxiosResponse<IResult, string> =
      await serviceInstance.get<IResult>(url, {
        params: {
          total_size,
          room_1_size,
          room_2_size,
          room_3_size,
        },
      });
    return dapp.data;
  } catch (e) {
    logger.info(`[floorPlanAPI/getAllDapps] - ${e}`);
    return Promise.reject(e);
  }
};
