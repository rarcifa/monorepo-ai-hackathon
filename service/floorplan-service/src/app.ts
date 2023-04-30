import * as routes from '@routes/index';
import * as bodyParser from 'body-parser';
import express from 'express';

import { logger } from '@helpers/logger';

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

/* routing setup */
routes.register(app);

/**
 * @summary  initiates app
 * @returns  {Promise<void>} - returned value
 */
export const onInit = async (): Promise<void> => {
  try {
    logger.info(`[src/app] - started`);
  } catch (e) {
    logger.info(`[src/app] - ${e.message}`);
    process.exit(0);
  }
};

export default app;
