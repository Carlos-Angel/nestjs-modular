import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';

import { isMatchPasswords } from '../../utils/handler-bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) return null;

    const isMatch = await isMatchPasswords(user.password, password);
    if (isMatch) return user;
    else return null;
  }
}
