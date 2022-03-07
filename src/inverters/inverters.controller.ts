import { Controller, Get } from '@nestjs/common';
import { InvertersService } from './inverters.service';
import { ApiResponse, ApiOkResponse } from '@nestjs/swagger';


@ApiResponse({
  description: '인버터 API',
})
@ApiOkResponse({
  description: '인버터 데이터 조회'})
@Controller()
export class InvertersController {
  constructor(private readonly invertersService: InvertersService) {}

  @Get('/inverter')
  getInverter(): Promise<string> {
    return this.invertersService.getInverter();
  }
}
