import { IConfig } from '@interfaces/config';

import {
  DEFAULT_ENV,
  HOST,
  IS_DEV_ENV,
  IS_PROD_ENV,
  PORT,
} from '@config/constants';

export const config: IConfig = {
  base: {
    protocol: 'http',
    host: HOST,
    port: PORT,
  },
  service: {
    prod: IS_PROD_ENV,
    dev: IS_DEV_ENV,
    default: DEFAULT_ENV,
  },
  rabbitMQ: {
    url: 'amqp://localhost:5672',
    exchange: 'floorplanExchange',
  },
  rateLimits: {
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  },
};
