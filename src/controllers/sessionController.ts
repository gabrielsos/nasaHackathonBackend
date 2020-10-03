import { Request, Response } from 'express';
import db from '../database/connection';

interface User {
  loginName: string;
  name: string;
  email: string;
}

export default class SessionController {
  async create(request: Request, response: Response) {
    const { loginName, password } = request.body;

    const user: User = await db('users')
      .where('loginName', loginName)
      .where('password', password)
      .select('loginName', 'name', 'email')
      .first();

    if (!user) {
      return response.json({ error: 'Credenciais inválidas' });
    }

    return response.json(user);
  }
}
