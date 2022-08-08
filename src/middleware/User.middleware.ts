import { Request, Response, NextFunction } from 'express';

function usernameValidation(username: string) {
  if (!username) return { code: 400, message: '"username" is required' };
  if (typeof username !== 'string') return { code: 422, message: '"username" must be a string' };
  if (username.length < 3) {
    return { code: 422, message: '"username" length must be at least 3 characters long' };
  }
}

function classeValidation(classe: string) {
  if (!classe) return { code: 400, message: '"classe" is required' };
  if (typeof classe !== 'string') return { code: 422, message: '"classe" must be a string' };
  if (classe.length < 3) {
    return { code: 422, message: '"classe" length must be at least 3 characters long' };
  }
}

function levelValidation(level: number) {
  if (level === undefined) return { code: 400, message: '"level" is required' };
  if (typeof level !== 'number') return { code: 422, message: '"level" must be a number' };
  if (level <= 0) {
    return { code: 422, message: '"level" must be greater than or equal to 1' };
  }
}

function passwordValidation(password: string) {
  if (!password) return { code: 400, message: '"password" is required' };
  if (typeof password !== 'string') return { code: 422, message: '"password" must be a string' };
  if (password.length < 8) {
    return { code: 422, message: '"password" length must be at least 8 characters long' };
  }
}

export default function userMiddleware(req: Request, res: Response, next: NextFunction) {
  const { username, classe, level, password } = req.body;

  const usernameRes = usernameValidation(username);
  if (usernameRes?.code) return res.status(usernameRes.code).json({ message: usernameRes.message });

  const classeRes = classeValidation(classe);
  if (classeRes?.code) return res.status(classeRes.code).json({ message: classeRes.message });

  const levelRes = levelValidation(level);
  if (levelRes?.code) return res.status(levelRes.code).json({ message: levelRes.message });

  const passwordRes = passwordValidation(password);
  if (passwordRes?.code) return res.status(passwordRes.code).json({ message: passwordRes.message });

  next();
}