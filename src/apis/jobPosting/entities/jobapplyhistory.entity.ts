import { User } from 'src/apis/user/entities/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { JobPosting } from './jobPosting.entity';

@Entity()
export class JobApplyHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => JobPosting)
  jobPosting: JobPosting;
}
