import { RequestHandler } from 'express';

export const notFound: RequestHandler = (_req, res) => {
  res.status(404).json({
    success: false,
    message: 'API not found!!',
    error: '',
  });
};
