import { ApiProperty } from '@nestjs/swagger';

export class JobPostingApply {
  @ApiProperty({
    type: String,
    description: 'user_ID',
    default: '',
  })
  readonly user: string;

  @ApiProperty({
    type: String,
    description: '회사공고_Id',
    default: '',
  })
  readonly jobPosting: string;
}
