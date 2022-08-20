import { Company } from 'src/apis/company/entities/company.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JobPosting {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Company, (company) => company.jobPosting)
  company: Company;

  @Column()
  position: string;

  @Column()
  compensation: number;

  @Column({ length: 5000 })
  content: string;

  @Column()
  stack: string;
}
