import { userService } from "./user.service";

class UserResolver {
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
