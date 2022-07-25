import console from "console";
import { dbRepository } from "../DB/DBRepository";
import { compareHashAndString, hashString } from "../helpers/hashString";
import { IUser } from "./user.typeDef";

class UserService {
  async createUser(user: IUser) {
    if (user.password) {
      user.password = await hashString(user.password);
    }
    const createdUser = await dbRepository.UserDB.insertRecord(user);

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

  async login(email: string, password: string) {
    const user = await dbRepository.UserDB.selectRecord(
      `{email} = "${email}" `
    );

    if (!user) {
      throw new Error(`User ${email} not found`);
    }

    const isValidPassword = await compareHashAndString(
      user["password"],
      password
    );

    if (!isValidPassword) {
      throw new Error(`invalid login`);
    }
    return user;
  }
}

export const userService = new UserService();
