import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobPosting } from './entities/jobPosting.entity';

@Injectable()
export class JobPostingService {
  constructor(
    @InjectRepository(JobPosting)
    private readonly jobPostingrepository: Repository<JobPosting>,
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
}
