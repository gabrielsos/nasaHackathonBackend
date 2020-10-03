import { Request, Response } from 'express';
import db from '../database/connection';

import randomDigits from '../utils/crypto';

export default class LoginController {
  async index(request: Request, response: Response) {
    const users = await db('users').select('*');

    return response.json(users);
  }

  async newPassword(request: Request, response: Response) {
    const { loginName, password } = request.body;

    try {
      await db('users')
        .update('password', password)
        .where('loginName', loginName);

      return response.status(200).json(loginName);
    } catch {
      return response
        .status(400)
        .json({ erro: 'Não foi possível mudar sua senha' });
    }
  }

  async create(request: Request, response: Response) {
    const { loginName, email, name, password } = request.body;

    try {
      await db('users').insert({
        loginName,
        name,
        email,
        password,
      });

      return response.json({ loginName, email, name, password });
    } catch {
      return response
        .status(400)
        .json({ erro: 'Usuário ou e-mail já cadastrado' });
    }
  }
}
