import crypto from 'crypto';
import * as dotenv from 'dotenv';
import express, { Router } from 'express';

dotenv.config();

// env
process.env.NODE_ENV = 'production';
process.env.NODE_ENV = 'development';

// integrations
export const COINGECKO_BASE_API: string = 'https://api.coingecko.com/api';

// request status
export const SUCCESS: string = 'success';
export const FAILED: string = 'failed';
export const INVALID_API_KEY: string = 'Invalid API key';
export const AUTHORIZATION_FAILED: string = 'Failed to authorize endpoint';
export const MESSAGE_OK: string = 'OK';

// utils
export const JWT_PAYLOAD: string = crypto.randomBytes(20).toString('hex');
export const CURRENT_DATE: Date = new Date();
export const MAX_LIMIT: number = 25;
export const DEFAULT_PAGE: number = 1;

// service config
export const IS_PROD_ENV: boolean = process.env.NODE_ENV === 'production';
export const IS_DEV_ENV: boolean = process.env.NODE_ENV === 'development';
export const DEFAULT_ENV: string = IS_DEV_ENV ? 'development' : 'production';
export const HOST: string = process.env.HOST;
export const PROTOCOL: string = process.env.PROTOCOL;
export const PORT: string = process.env.PORT;

// keys
export const OPENAI_API_KEY: string = process.env.OPENAI_API_KEY;

// router
export const supplyStatsRouter: Router = express.Router();
export const healthRouter: Router = express.Router();
export const logRouter: Router = express.Router();
