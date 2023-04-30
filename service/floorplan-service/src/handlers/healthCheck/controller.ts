import { Request, Response } from 'express';

import { IHealthcheckResponse } from '@handlers/interfaces/healthCheckResponse';
import { HTTP_CODES } from '@lib/interfaces/status';

import { FAILED, MESSAGE_OK, SUCCESS } from '@config/constants';

/**
 * @summary  calls health service
 * @param  {Request} _req - request object
 * @param  {Response} res - response object
 * @returns  {Promise<Response>} - returned value
 */
export const healthCheck = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const healthcheck: IHealthcheckResponse = {
    uptime: process.uptime(),
    responsetime: process.hrtime(),
    message: MESSAGE_OK,
    timestamp: Date.now(),
  };
  try {
    return res
      .status(HTTP_CODES.OK)
      .json({ status: SUCCESS, data: healthcheck });
  } catch (e) {
    return res
      .status(HTTP_CODES.SERVICE_UNAVAILABLE)
      .json({ status: FAILED, error: e.message });
  }
};
