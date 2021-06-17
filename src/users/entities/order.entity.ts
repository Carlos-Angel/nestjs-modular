import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import { Customer } from './customer.entity';
import { OrderItem } from './order-item.entity';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

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

  @ManyToOne(() => Customer, (customer) => customer.orders)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany(() => OrderItem, (item) => item.order)
  items: OrderItem[];
}
