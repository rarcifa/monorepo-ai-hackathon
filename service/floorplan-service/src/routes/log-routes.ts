import * as controller from '@handlers/logs/controller';
import * as validator from '@handlers/logs/validator';
import { verifyErrors } from '@lib/middlewares/validation.middleware';

import { logRouter } from '@config/constants';

logRouter.post('/', validator.createLog, verifyErrors, controller.createLog);

export default logRouter;
