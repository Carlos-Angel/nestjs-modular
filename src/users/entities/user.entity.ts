import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Customer } from './customer.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Customer, (customer) => customer.user, { nullable: true })
  @JoinColumn()
  customer: Customer;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string; // encript

  @Column({ type: 'varchar', length: 255 })
  role: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAtt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAtt: Date;
}
