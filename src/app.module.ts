import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InvertersModule } from './inverters/inverters.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:20032/inverter', {
      connectionName: 'inverters',
    }),
    InvertersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
