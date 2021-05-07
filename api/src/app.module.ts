import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceModule } from './invoice/invoice.module';
import { AddressModule } from './address/address.module';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [ ConfigModule.forRoot({
    envFilePath: '../.env'
  }),TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_DATABASE,
    autoLoadEntities: true,
    synchronize: true
  }), InvoiceModule, AddressModule, UsersModule, ProfileModule,
  
],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule {}
