import { ApiProperty } from '@nestjs/swagger';

export class UserInput {
  @ApiProperty({
    type: String,
    description: '이름',
    default: '',
  })
  readonly name: string;

  @ApiProperty({
    type: String,
    description: 'email',
    default: '',
  })
  readonly email: string;
}
