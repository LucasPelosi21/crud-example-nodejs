import { Router } from 'express';
import UserController from '../controllers/UserController';
import { apiKey } from '../middlewares/ApiKeyMiddleware';

export default class UserRouter {
  private controller: UserController;

  constructor() {
    this.controller = new UserController();
  }

  public getRoutes = (): Router => {
    const router = Router();
    router.post('', this.controller.store);
    router.get('/:id', apiKey, this.controller.show);
    return router;
  };
}
