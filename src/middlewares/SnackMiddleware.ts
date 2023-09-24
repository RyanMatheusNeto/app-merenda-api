import { NextFunction, Request, Response } from "express";

export default class SnackMiddleware {
  getBodyFromFileUploader(req: Request, _: Response, next: NextFunction) {
    const newBody = req.body.data;

    req.body = JSON.parse(newBody);

    return next();
  }
}
