import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company.service';
import { CompanyInput } from './dto/company.input';

@ApiTags('회사')
@Controller('Company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async create(@Body() input: CompanyInput) {
    return await this.companyService.create({ input });
  }
}
