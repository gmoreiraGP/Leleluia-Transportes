import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const typeORM = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgrespass',
  database: 'leleluia',
  entities: [],    
  synchronize: true,
})

const env = ConfigModule.forRoot({
  envFilePath: '.env'
})

@Module({
  imports: [typeORM, env],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
