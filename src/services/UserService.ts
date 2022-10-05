import User from '../models/users.model';
import UserRepository from '../repositories/UserRepository';
import { hashPassword } from '../utils/encryptedPassword';

export default class UserService {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  public show = async (id: string): Promise<User | null> =>
    this.repository.show(id);

  public list = async (): Promise<User[] | null> => this.repository.list();

  public store = async (data: User): Promise<User> => {
    const createData = { ...data };
    createData.password = await hashPassword(createData.password);

    return this.repository.store(createData);
  };

  public updateData = async (id: string, data: User): Promise<User | null> => {
    const updateData = { ...data };
    updateData.password = await hashPassword(updateData.password);

    return this.repository.updateData(id, updateData);
  };

  public removeData = async (id: string): Promise<User | null> =>
    this.repository.removeData(id);
}
