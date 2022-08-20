import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Company } from '../company/entities/company.entity';
import { JobApplyHistory } from './entities/jobapplyhistory.entity';
import { JobPosting } from './entities/jobPosting.entity';

@Injectable()
export class JobPostingService {
  constructor(
    @InjectRepository(JobPosting)
    private readonly jobPostingrepository: Repository<JobPosting>,

    @InjectRepository(JobApplyHistory)
    private readonly jobApplyHistoryrepository: Repository<JobApplyHistory>,
  ) {}

  async create({ input }) {
    return await this.jobPostingrepository.save(input);
  }

  async update({ id, input }) {
    const posting = await this.jobPostingrepository.findOne({ id });
    return await this.jobPostingrepository.save({
      ...posting,
      ...input,
    });
  }

  async delete({ id }) {
    const result = await this.jobPostingrepository.delete({ id });
    result.affected ? true : false;
  }

  async findAll() {
    const all = await this.jobPostingrepository.find({
      relations: ['company'],
    });
    return all.map((ele) => {
      return {
        채용공고_id: ele.id,
        회사명: ele.company.companyName,
        국가: ele.company.country,
        지역: ele.company.region,
        채용포지션: ele.position,
        채용보상금: ele.compensation,
        사용기술: ele.stack,
      };
    });
  }

  async search({ search }) {
    const all = await getRepository(JobPosting)
      .createQueryBuilder('jobposting')
      .leftJoinAndSelect('jobposting.company', 'company')
      .where('company.companyName like :find ', {
        find: '%' + search + '%',
      })
      .orWhere('company.country like :find', { find: '%' + search + '%' })
      .orWhere('company.region like :find', { find: '%' + search + '%' })
      .orWhere('jobposting.position like :find', {
        find: '%' + search + '%',
      })
      .orWhere('jobposting.stack like :find', { find: '%' + search + '%' })
      .getMany();

    return all.map((ele) => {
      return {
        채용공고_id: ele.id,
        회사명: ele.company.companyName,
        국가: ele.company.country,
        지역: ele.company.region,
        채용포지션: ele.position,
        채용보상금: ele.compensation,
        사용기술: ele.stack,
      };
    });
  }

  async findOne({ id }) {
    const company = await getRepository(JobPosting)
      .createQueryBuilder('jobposting')
      .leftJoinAndSelect('jobposting.company', 'company')
      .leftJoinAndSelect('company.jobPosting', 'otherjob')
      .where('jobposting.id = :id', { id: id })
      .getOne();

    const otherjobposting = [];
    for (let i = 0; i < company.company.jobPosting.length; i++) {
      if (company.id !== company.company.jobPosting[i].id)
        otherjobposting.push(company.company.jobPosting[i].id);
    }

    return {
      채용공고_id: company.id,
      회사명: company.company.companyName,
      국가: company.company.country,
      지역: company.company.region,
      채용포지션: company.position,
      채용보상금: company.compensation,
      사용기술: company.stack,
      채용내용: company.content,
      회사가올린다른채용공고: otherjobposting,
    };
  }

  async apply({ input }) {
    const check = await this.jobApplyHistoryrepository.find({
      where: { user: input.user, jobPosting: input.jobPosting },
    });

    if (check.length) throw new ConflictException('이미 지원한 회사입니다.');
    return await this.jobApplyHistoryrepository.save(input);
  }
}
