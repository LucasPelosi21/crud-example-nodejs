import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { storeUserSchema, updateUserSchema } from '../schema/UserSchema';
import Exception from '../utils/Exception';

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
   * /users:
   *   get:
   *     tags: [User]
   *     summary: Lista os usuários
   *     security :
   *       - ApiKeyAuth : []
   *     responses:
   *       200:
   *         description: Usuários
   */
  public list = async (_: Request, res: Response): Promise<Response> => {
    const obj = await this.service.list();
    return res.send(obj);
  };

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
   *         description: Retorna usuário criado
   */
  public store = async (req: Request, res: Response): Promise<Response> => {
    req.body = await storeUserSchema
      .validate(req.body, { stripUnknown: true })
      .catch(err => {
        throw new Exception(400, err.errors.join(', '));
      });

    const obj = await this.service.store(req.body);
    return res.send(obj);
  };

  /**
   * @swagger
   *
   * /users/{id}:
   *   put:
   *     tags: [User]
   *     summary: Atualiza um usuário
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: true
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
   *     security:
   *       - ApiKeyAuth: []
   *       - XApiKeyAuth: []
   *     responses:
   *       200:
   *         description: Retorna usuário atualizado
   */

  public update = async (req: Request, res: Response): Promise<Response> => {
    req.body = await updateUserSchema
      .validate(req.body, { stripUnknown: true })
      .catch(err => {
        throw new Exception(400, err.errors.join(', '));
      });

    const obj = await this.service.updateData(req.params.id, req.body);
    return res.send(obj);
  };

  /**
   * @swagger
   *
   * /users/{id}:
   *   delete:
   *     tags: [User]
   *     summary: Deleta um usuário
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: true
   *     security :
   *       - ApiKeyAuth : []
   *       - XApiKeyAuth: []
   *     responses:
   *       200:
   *         description: Retorna o usuário
   *       404:
   *         description: usuário não encontrada
   */
  public remove = async (req: Request, res: Response): Promise<Response> => {
    const obj = await this.service.removeData(req.params.id);
    return res.send(obj);
  };
}
