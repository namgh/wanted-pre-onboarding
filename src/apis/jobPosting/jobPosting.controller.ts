import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JobPostingInput } from './dto/jobPosting.input';
import { JobPostingUpdate } from './dto/jobPosting.update';
import { JobPostingService } from './jobPosting.service';

@ApiTags('채용')
@Controller('JobPosting')
export class JobPostingController {
  constructor(private readonly jobPostingService: JobPostingService) {}

  @Post()
  async create(@Body() input: JobPostingInput) {
    return await this.jobPostingService.create({ input });
  }

  @Put(':id')
  async update(@Body() input: JobPostingUpdate, @Param('id') id: string) {
    return await this.jobPostingService.update({ id, input });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.jobPostingService.delete({ id });
  }
}
