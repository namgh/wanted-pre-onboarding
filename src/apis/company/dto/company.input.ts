import { ApiProperty } from '@nestjs/swagger';

export class CompanyInput {
  @ApiProperty({
    type: String,
    description: '회사이름',
    default: '',
  })
  readonly companyName: string;

  @ApiProperty({
    type: String,
    description: '지역',
    default: '',
  })
  readonly region: string;

  @ApiProperty({
    type: String,
    description: '국가',
    default: '',
  })
  readonly country: string;
}
