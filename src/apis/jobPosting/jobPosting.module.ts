import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobApplyHistory } from './entities/jobapplyhistory.entity';
import { JobPosting } from './entities/jobPosting.entity';
import { JobPostingController } from './jobPosting.controller';
import { JobPostingService } from './jobPosting.service';

@Module({
  imports: [TypeOrmModule.forFeature([JobPosting, JobApplyHistory])],
  providers: [JobPostingService],
  controllers: [JobPostingController],
})
export class JobPostingModule {}
