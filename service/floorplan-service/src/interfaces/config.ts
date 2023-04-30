export interface IConfig {
  base: {
    protocol: string;
    host: string;
    port: string;
  };
  service: {
    prod: boolean;
    dev: boolean;
    default: string;
  };
  rabbitMQ: {
    url: string;
    exchange: string;
  };
  rateLimits: {
    windowMs: number;
    max: number;
    standardHeaders: boolean;
    legacyHeaders: boolean;
  };
}
