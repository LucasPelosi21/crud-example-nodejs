import { AppDataSource } from '../database/ormconfig';
import User from '../models/users.model';

export default class UserRepository {
  private repository;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  public list = async (): Promise<User[] | null> => this.repository.find();

  public show = async (id: string): Promise<User | null> =>
    this.repository.findOne({
      where: {
        id,
      },
    });

  public store = async (data: User): Promise<User> =>
    this.repository.save(data);

  public updateData = async (id: string, data: User): Promise<User | null> => {
    await this.repository.update(id, data);
    return this.show(id);
  };

  public removeData = async (id: string): Promise<User | null> => {
    const obj = await this.show(id);
    await this.repository.delete(id);
    return obj;
  };
}
