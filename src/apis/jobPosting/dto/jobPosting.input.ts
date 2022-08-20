import { ApiProperty } from '@nestjs/swagger';

export class JobPostingInput {
  @ApiProperty({
    type: String,
    description: '회사_ID',
    default: '',
  })
  readonly companyId: string;
  @ApiProperty({
    type: String,
    description: '채용포지션',
    default: '',
  })
  readonly position: string;

  @ApiProperty({
    type: Number,
    description: '채용보상금',
    default: '',
  })
  readonly compensation: number;

  @ApiProperty({
    type: String,
    description: '채용내용',
    default: '',
  })
  readonly content: string;

  @ApiProperty({
    type: String,
    description: '사용기술',
    default: '',
  })
  readonly stack: string;
}
