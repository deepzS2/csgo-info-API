import { ApiProperty } from '@nestjs/swagger';

export class QueryServerDTO {
  @ApiProperty()
  host: string;

  @ApiProperty()
  port: number;
}
