import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Product } from './product.entity';

@Entity({ name: 'brands' })
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'varchar' })
  image: string;

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

  @OneToMany(() => Product, (product) => product.brand)
  products: Product[];
}
