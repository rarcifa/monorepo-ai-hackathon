import { body, ValidationChain } from 'express-validator';

export const floorplanBody: ValidationChain[] = [
  body('total_area', 'total_area should be a number')
    .optional({ checkFalsy: true })
    .isNumeric(),
  body('room_one_area', 'total_area should be a number')
    .optional({ checkFalsy: true })
    .isNumeric(),
  body('room_two_area', 'total_area should be a number')
    .optional({ checkFalsy: true })
    .isNumeric(),
  body('room_three_area', 'total_area should be a number')
    .optional({ checkFalsy: true })
    .isNumeric(),
];

export const validator: {
  generateFloorplan: ValidationChain[];
} = {
  generateFloorplan: floorplanBody,
};
