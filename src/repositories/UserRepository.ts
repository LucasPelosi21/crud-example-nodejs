import { AppDataSource } from '../database/ormconfig';
import User from '../models/users.model';

export default class UserRepository {
  private repository;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  public show = async (id: string): Promise<User | null> =>
    this.repository.findOne({
      where: {
        id,
      },
    });

  public store = async (data: User): Promise<User> =>
    this.repository.save(data);
}
