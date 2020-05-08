import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryServerDTO } from './app.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('query')
  @ApiResponse({
    status: 201,
    description: 'It will return the server informations',
  })
  @ApiResponse({
    status: 500,
    description: "Server doesn't exists with this host and/or port",
  })
  async serverQuery(@Body() serverIp: QueryServerDTO) {
    return await this.appService.serverQuery(serverIp);
  }
}
