import console from "console";
import { dbRepository } from "../DB/DBRepository";
import { IUser } from "./user.typeDef";

class UserService {
  async createUser(user: IUser) {
    const createdUser = await dbRepository.UserDB.insertRecord(user);
    console.log(createdUser, user);
    return createdUser;
  }
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
