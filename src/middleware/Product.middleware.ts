import { NextFunction, Request, Response } from 'express';

function nameValidation(name: string) {
  if (!name) return { code: 400, message: '"name" is required' };
  if (typeof name !== 'string') return { code: 422, message: '"name" must be a string' };
  if (name.length < 3) {
    return { code: 422, message: '"name" length must be at least 3 characters long' };
  }
}

function amountValidation(amount: string) {
  if (!amount) return { code: 400, message: '"amount" is required' };
  if (typeof amount !== 'string') return { code: 422, message: '"amount" must be a string' };
  if (amount.length < 3) {
    return { code: 422, message: '"amount" length must be at least 3 characters long' };
  }
}

export default function productMiddleware(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body;

  const nameIsValid = nameValidation(name);
  if (nameIsValid?.code) {
    const { code, message } = nameIsValid;
    return res.status(code).json({ message });
  }

  const amountIsValid = amountValidation(amount);
  if (amountIsValid?.code) {
    const { code, message } = amountIsValid;
    return res.status(code).json({ message });
  }

  next();
}