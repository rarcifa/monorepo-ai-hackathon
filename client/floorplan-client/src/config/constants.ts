import log from 'loglevel';

// service config
export const IS_PROD_ENV: boolean = process.env.NODE_ENV === 'production';
export const IS_DEV_ENV: boolean = process.env.NODE_ENV === 'development';

// logger
export const logger: log.RootLogger = log;

// api keys
export const SERVICE_API_KEY: string =
  process.env.REACT_APP_SERVICE_API_KEY || '';

// integrations
export const SERVICE_API_BASE_URL: string =
  process.env.REACT_APP_SERVICE_API_BASE_URL || '';
