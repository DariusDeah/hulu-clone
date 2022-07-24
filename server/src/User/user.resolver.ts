import { userService } from "./user.service";

class UserResolver {
  async findUsers() {
    return await userService.findUsers();
  }
}
export const userResolvers = new UserResolver();
