import { JobPosting } from 'src/apis/jobPosting/entities/jobPosting.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  companyName: string;

  @Column()
  region: string;

  @Column()
  country: string;

  @OneToMany((type) => JobPosting, (jobposting) => jobposting.company)
  jobPosting: JobPosting[];
}
