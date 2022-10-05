import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { userSchema } from '../schema/UserSchema';

export default class UserController {
  declare service: UserService;

  constructor() {
    this.service = new UserService();
  }

  /**
   * @swagger
   * tags:
   *   name: User
   *   description: API de usuários.
   */

  /**
   * @swagger
   *
   * /users/{id}:
   *   get:
   *     tags: [User]
   *     summary: Retorna User
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: true
   *     security :
   *       - XApiKeyAuth : []
   *     responses:
   *       200:
   *         description: JSON de User
   */
  public show = async (req: Request, res: Response): Promise<Response> => {
    const obj = await this.service.show(req.params.id);
    return res.send(obj);
  };

  /**
   * @swagger
   *
   * /users:
   *   post:
   *     tags: [User]
   *     summary: Criar um usuário
   *     requestBody:
   *         required: true
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 email:
   *                   type: string
   *                   example: lucas@teste.com.br
   *                 password:
   *                   type: string
   *                   example: teste123
   *     security :
   *       - XApiKeyAuth : []
   *     responses:
   *       200:
   *         description: User criado
   */
  public store = async (req: Request, res: Response): Promise<Response> => {
    const obj = await this.service.store(req.body);
    return res.send(obj);
  };
}
