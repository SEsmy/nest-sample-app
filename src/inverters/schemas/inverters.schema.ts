import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InvertersDocument = Inverters & Document;

@Schema()
export class Inverters {
  @Prop()
  mcno: number;
}

export const InvertersSchema = SchemaFactory.createForClass(Inverters);
