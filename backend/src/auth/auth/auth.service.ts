import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../user/users.service';
import * as bcrypt from 'bcrypt';
import User from '../../user/user.entity';
import { CreateUserDTO } from '../../user/user.dto';

interface Response {
  expires_in: number;
  access_token: string;
  user_id: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async validate(steamId): Promise<User> {
    if (!steamId.startsWith(`https://steamcommunity.com/id/`)) {
      throw new HttpException(
        'Incorrect credential. SteamID must be: https://steamcommunity.com/id/<YourIDHere>',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    return await this.userService.findBySteam(steamId);
  }

  public async login(user: CreateUserDTO): Promise<Response | any> {
    return this.validate(user.steamId).then(userData => {
      if (!userData) {
        throw new HttpException("User doesn't exists.", HttpStatus.NOT_FOUND);
      }

      const decrypted = bcrypt.compareSync(user.password, userData.password);

      if (!decrypted) {
        throw new HttpException('Incorrect password.', HttpStatus.UNAUTHORIZED);
      }

      let payload = userData.steamId;
      const acessToken = this.jwtService.sign(payload);

      return {
        expires_in: 3600,
        access_token: acessToken,
        user_id: payload,
      };
    });
  }

  public async register(user: CreateUserDTO): Promise<any> {
    const validated = await this.validate(user.steamId);

    if (validated) {
      throw new HttpException(
        'User already exists.',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    return (await this.userService.create(user)).steamId;
  }
}
