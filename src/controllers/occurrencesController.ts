import { Request, Response } from 'express';
import db from '../database/connection';

export default class OccurrencesController {
  async create(request: Request, response: Response) {
    const { latitude, longitude, occurrenceDatetime, loginName } = request.body;

    console.log(latitude, longitude, occurrenceDatetime, loginName);

    try {
      await db('occurrences').insert({
        loginName,
        latitude,
        longitude,
        occurrenceDatetime,
      });

      return response.json({
        loginName,
        latitude,
        longitude,
        occurrenceDatetime,
      });
    } catch {
      return response
        .status(400)
        .json({ erro: 'Não foi possível criar a ocorrência' });
    }
  }

  async index(request: Request, response: Response) {
    const occurrences = await db('occurrences').select('*');

    return response.json(occurrences);
  }
}
