import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/order-item.entity';
import { Product } from '../../products/entities/product.entity';

import { CreateOrderItemDto, UpdateOrderItemDto } from '../dtos/order-item.dto';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(OrderItem) private orderItemRepo: Repository<OrderItem>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  findAll() {
    return this.orderItemRepo.find({
      relations: ['product', 'order', 'order.customer'],
    });
  }

  async findOne(id: number) {
    const orderItem = await this.orderItemRepo.findOne(id, {
      relations: ['product', 'order', 'order.customer'],
    });
    if (!orderItem) {
      throw new NotFoundException(`OrderItem #${id} not found`);
    }
    return orderItem;
  }

  async create(data: CreateOrderItemDto) {
    const order = await this.orderRepo.findOne(data.orderId);
    const product = await this.productRepo.findOne(data.productId);
    const item = new OrderItem();
    item.order = order;
    item.product = product;
    item.quantity = data.quantity;
    return this.orderItemRepo.save(item);
  }

  async update(id: number, changes: UpdateOrderItemDto) {
    const orderItem = await this.orderItemRepo.findOne(id);
    if (changes.productId) {
      const product = await this.productRepo.findOne(changes.productId);
      orderItem.product = product;
    }
    if (changes.orderId) {
      const order = await this.orderRepo.findOne(changes.orderId);
      orderItem.order = order;
    }
    orderItem.quantity = changes.quantity;
    return this.orderItemRepo.save(orderItem);
  }

  remove(id: number) {
    return this.orderItemRepo.delete(id);
  }
}
