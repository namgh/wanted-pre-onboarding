import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserSerivce } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserSerivce],
  controllers: [UserController],
})
export class UserModule {}
