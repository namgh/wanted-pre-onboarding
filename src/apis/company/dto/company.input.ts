import { ApiProperty } from '@nestjs/swagger';

export class CompanyInput {
  @ApiProperty({
    type: String,
    description: '회사이름',
    default: '',
  })
  readonly companyName: string;
}
