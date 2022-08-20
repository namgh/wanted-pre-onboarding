import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JobPostingApply } from './dto/jobPosting.apply';
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

  @Post('apply')
  async apply(@Body() input: JobPostingApply) {
    return await this.jobPostingService.apply({ input });
  }

  @Put(':id')
  async update(@Body() input: JobPostingUpdate, @Param('id') id: string) {
    return await this.jobPostingService.update({ id, input });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.jobPostingService.delete({ id });
  }

  @Get('all')
  async findAll() {
    return await this.jobPostingService.findAll();
  }

  @Get('search/:input')
  async search(@Param('input') input: string) {
    return await this.jobPostingService.search({ search: input });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.jobPostingService.findOne({ id });
  }
}
