import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsController } from './cars/cars.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.17.0.3',
      port: 3306,
      username: 'genr',
      password: 'password',
      database: 'legendary_potato',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, CarsController],
  providers: [AppService],
})
export class AppModule {}
