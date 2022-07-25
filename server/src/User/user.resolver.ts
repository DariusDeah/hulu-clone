import { userService } from "./user.service";
import { IUser } from "./user.typeDef";

class UserResolver {
  async createUser(user: IUser) {
    return await userService.createUser(user);
  }
  async findUsers() {
    const users = await userService.findUsers();
    return users;
  }
  async findUserByEmail(email: string) {
    const user = await userService.findUserByEmail(email);
    return user;
  }
}
export const userResolvers = new UserResolver();
