import { Request, Response } from 'express';

export interface IController {
  generateFloorplan: (_req: Request, res: Response) => Promise<Response>;
}
