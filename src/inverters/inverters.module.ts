import { Module } from '@nestjs/common';
import { InvertersService } from './inverters.service';
import { InvertersController } from './inverters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Inverters, InvertersSchema } from './schemas/Inverters.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Inverters.name, schema: InvertersSchema }],
      'inverters',
    ),
  ],
  controllers: [InvertersController],
  providers: [InvertersService],
})
export class InvertersModule {}
