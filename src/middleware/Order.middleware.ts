import { NextFunction, Request, Response } from 'express';
import { tokenValidate } from '../services/token.service';

function productsValidation(productsIds: number[]) {
  if (!productsIds) return { code: 400, message: '"productsIds" is required' };
  if (!Array.isArray(productsIds)) return { code: 422, message: '"productsIds" must be an array' };
  if (productsIds.length === 0) {
    return { code: 422, message: '"productsIds" must include only numbers' };
  }
}

export default function orderMidlleware(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const payload = tokenValidate(token);
    req.body.user = payload;

    const isValid = productsValidation(productsIds);
    if (isValid?.code) {
      const { code, message } = isValid;
      return res.status(code).json({ message });
    }
    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}