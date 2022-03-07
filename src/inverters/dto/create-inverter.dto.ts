import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInverterDto {
  @IsString()
  @ApiProperty({ type: String, description: '발전소 이름' })
  readonly psName: string;
}