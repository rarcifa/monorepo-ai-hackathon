import { Request, Response } from 'express';
import { IController } from '@interfaces/controller';
import { HTTP_CODES } from '@lib/interfaces/status';

import { FAILED, SUCCESS } from '@config/constants';
import { openAI } from '@src/helpers/openAI';

export const controller: IController = {
  /**
   * @summary  calls generateImage API
   * @param  {Request} _req - request object
   * @param  {Response} res - response object
   * @returns  {Promise<Response>} - returned value
   */
  generateFloorplan: async (req: Request, res: Response): Promise<Response> => {
    try {
      const {
        total_area_input_one,
        total_area_input_two,
        room_one_input_one,
        room_one_input_two,
        room_two_input_one,
        room_two_input_two,
        room_three_input_one,
        room_three_input_two,
      } = req.body;

      const response = await openAI.generateImage(
        `generate a floor plan in black and white that has 3 rooms in total. The room area will be as follows: 
        total_area: ${total_area_input_one}x${total_area_input_two}, 
        room_one: ${room_one_input_one}x${room_one_input_two}, 
        room_two: ${room_two_input_one}x${room_two_input_two}, 
        room_three: ${room_three_input_one}x${room_three_input_two}`
      );

      return res
        .status(HTTP_CODES.CREATED)
        .json({ status: SUCCESS, data: response });
    } catch (e) {
      return res
        .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json({ status: FAILED, error: e.message });
    }
  },
};
