import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUser1588858580803 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'steamId',
            type: 'string',
            isUnique: true,
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'string',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'string',
            length: '255',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('users');
  }
}
