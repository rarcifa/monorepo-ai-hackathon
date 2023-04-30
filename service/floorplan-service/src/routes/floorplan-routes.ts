import { controller } from '@src/handlers/floorplan/controller';
import { validator } from '@src/handlers/floorplan/validator';

import { verifyErrors } from '@lib/middlewares/validation.middleware';

import { supplyStatsRouter } from '@config/constants';

supplyStatsRouter.post(
  '/generate',
  validator.generateFloorplan,
  verifyErrors,
  controller.generateFloorplan
);

export default supplyStatsRouter;
