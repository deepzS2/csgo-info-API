import { Injectable } from '@nestjs/common';
import User from './user.entity';
import { CreateUserDTO } from './user.dto';

import bcrypt = require('bcrypt');

@Injectable()
export class UsersService {
  async findAll(): Promise<User[]> {
    return await User.find();
  }

  async findBySteam(steamId: string): Promise<User> {
    return await User.findOne({
      where: {
        steamId,
      },
    });
  }

  // async login(dto: CreateUserDTO): Promise<User> {
  //   const { steamId, password } = dto;

  //   const user = await User.findOne({
  //     steamId,
  //   });

  //   if (!user) {
  //     return;
  //   }

  //   const hashed = bcrypt.compareSync(password, user.password);

  //   if (!hashed) {
  //     return;
  //   }

  //   return user;
  // }

  public async create(dto: CreateUserDTO): Promise<User> {
    const userEntity = User.create();
    const { name, steamId, password } = dto;

    const hashed = bcrypt.hashSync(password, 10);

    userEntity.name = name;
    userEntity.steamId = steamId;
    userEntity.password = hashed;
    await User.save(userEntity);
    return userEntity;
  }
}
