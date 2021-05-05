import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceController } from './controllers/invoice.controller';
import { Invoice } from './models/invoice.model';
import { InvoiceService } from './services/invoice.service';

@Module({
  imports: [ ConfigModule.forRoot({
    envFilePath: '../.env'
  }),SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_DATABASE,
    autoLoadModels: true,
    synchronize: true
  }),
  SequelizeModule.forFeature([Invoice])
],
  controllers: [AppController, InvoiceController],
  providers: [AppService, InvoiceService],
})
export class AppModule {}
