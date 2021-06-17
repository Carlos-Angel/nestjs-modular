import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';

import { Product } from './product.entity';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @CreateDateColumn({
    name: 'created_att',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAtt: Date;

  @UpdateDateColumn({
    name: 'updated_att',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAtt: Date;

  @ManyToMany(() => Product, (product) => product.categories)
  products: Product[];
}
