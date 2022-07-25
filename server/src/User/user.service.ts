import console from "console";
import { dbRepository } from "../DB/DBRepository";

class UserService {
  async findUsers() {
    const users = await dbRepository.UserDB.selectRecords();
    return users;
  }
  async findUserByEmail(email: string) {
    const user = await dbRepository.UserDB.selectRecord(
      `{email} = "${email}" `
    );
    return user;
  }
}
export const userService = new UserService();
