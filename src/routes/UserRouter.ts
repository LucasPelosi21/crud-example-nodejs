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
    router.get('', apiKey, this.controller.list);
    router.post('', this.controller.store);
    router.get('/:id', apiKey, this.controller.show);
    router.put('/:id', apiKey, this.controller.update);
    router.delete('/:id', apiKey, this.controller.remove);
    return router;
  };
}
