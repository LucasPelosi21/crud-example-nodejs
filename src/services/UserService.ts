import User from '../models/users.model';
import UserRepository from '../repositories/UserRepository';

export default class UserService {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  public show = (id: string): Promise<User | null> => this.repository.show(id);

  public store = (data: User): Promise<User> => this.repository.store(data);
}
