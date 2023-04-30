import { controller } from '@src/handlers/floorplan/controller';
import { validator } from '@src/handlers/floorplan/validator';

import { verifyErrors } from '@lib/middlewares/validation.middleware';

import { floorplanRouter } from '@config/constants';

floorplanRouter.post(
  '/generate',
  validator.generateFloorplan,
  verifyErrors,
  controller.generateFloorplan
);

export default floorplanRouter;
