import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserInput } from './dto/user.input';
import { UserSerivce } from './user.service';

@ApiTags('유저')
@Controller('User')
export class UserController {
  constructor(private readonly userService: UserSerivce) {}

  @Post()
  async create(@Body() input: UserInput) {
    return await this.userService.create({ input });
  }
}
