import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entities/user.entity';
import { Order } from '../entities/order.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

import { ProductsService } from '../../products/services/products.service';

@Injectable()
export class UsersService {
  constructor(
    private productService: ProductsService,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne(id);
    if (!user) {
      throw new NotFoundException(`user #${id} not found`);
    }
    return user;
  }

  create(data: CreateUserDto) {
    const newUser = this.userRepo.create(data);
    return this.userRepo.save(newUser);
  }

  async update(id: number, changes: UpdateUserDto) {
    const user = await this.userRepo.findOne(id);
    this.userRepo.merge(user, changes);
    return this.userRepo.save(user);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }

  async getOrderByUser(id: number) {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: await this.productService.findAll(),
    };
  }
}
