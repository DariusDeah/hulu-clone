import { dbRepository } from "../DB/DBRepository";

class UserService {
  async findUsers() {
    const users = await dbRepository.UserDB.selectRecords();
    return users;
  }
}
export const userService = new UserService();
