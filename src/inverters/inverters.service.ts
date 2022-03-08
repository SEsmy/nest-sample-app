import { Injectable } from '@nestjs/common';
import { CreateInverterDto } from './dto/create-inverter.dto';
import { UpdateInverterDto } from './dto/update-inverter.dto';
import { Connection, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Inverters, InvertersDocument } from './schemas/inverters.schema';

@Injectable()
export class InvertersService {
  constructor(
    @InjectModel(Inverters.name)
    private readonly invertersDocument: Model<InvertersDocument>,
  ) {}

  async getInverter(): Promise<string> {
    const res = await this.invertersDocument.findOne().exec();
    console.log(res);
    console.log('inverter');
    return 'inverter';
  }
}
