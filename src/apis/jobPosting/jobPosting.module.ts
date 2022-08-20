import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobPosting } from './entities/jobPosting.entity';
import { JobPostingController } from './jobPosting.controller';
import { JobPostingService } from './jobPosting.service';

@Module({
  imports: [TypeOrmModule.forFeature([JobPosting])],
  providers: [JobPostingService],
  controllers: [JobPostingController],
})
export class JobPostingModule {}
