import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export default class Users extends BaseEntity {
  @ApiProperty()
  @PrimaryColumn()
  steamId: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  password: string;
}
