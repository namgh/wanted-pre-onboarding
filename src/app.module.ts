import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModule } from './apis/company/company.module';
import { JobPostingModule } from './apis/jobPosting/jobPosting.module';
import { UserModule } from './apis/user/user.module';
@Module({
  imports: [
    CompanyModule,
    JobPostingModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }), //

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'my_database',
      port: 3306,
      username: process.env.DB_USER_NAME,
      password: process.env.DB_SECRET,
      database: 'wanted',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
