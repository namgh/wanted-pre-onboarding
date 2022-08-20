import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async create({ input }) {
    const check = await this.companyRepository.find({
      companyName: input.companyName,
    });
    if (check.length) throw new ConflictException('이미 등록된 회사입니다');

    return await this.companyRepository.save(input);
  }
}
