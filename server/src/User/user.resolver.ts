import { userService } from "./user.service";

class UserResolver {
  async findUsers() {
    const users = await userService.findUsers();
    return users;
  }
}
export const userResolvers = new UserResolver();
