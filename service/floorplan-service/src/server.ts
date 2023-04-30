import { config } from '@config/config';
import app, { onInit } from '@src/app';

import { logger } from '@helpers/logger';

app.listen(config.base.port, async (): Promise<void> => {
  try {
    await onInit();
    logger.info(
      `${config.service.default} service up && running on ${config.base.port}!`
    );
  } catch (e) {
    logger.info(`[src/server] - ${e.message}`);
    process.exit(0);
  }
});
