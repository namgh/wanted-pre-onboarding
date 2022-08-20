import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserSerivce {
  constructor(
    @InjectRepository(User)
    private readonly userrepository: Repository<User>,
  ) {}

  async create({ input }) {
    const check = await this.userrepository.find({ email: input.email });

    if (check.length) throw new ConflictException('등록한 email입니다.');

    return await this.userrepository.save(input);
  }
}
