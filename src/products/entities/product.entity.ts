import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  Index,
} from 'typeorm';

import { Brand } from './brand.entity';
import { Category } from './category.entity';

@Entity()
@Index(['price', 'stock', 'name'])
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Brand, (brand) => brand.products)
  brand: Brand;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'varchar' })
  image: string;

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

  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable()
  categories: Category[];
}
