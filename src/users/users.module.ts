import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Customer, CustomerSchema } from './entities/customer.entity';
import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';

import { User, UserSchema } from './entities/user.entity';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

import { Order, OrderSchema } from './entities/order.entity';

import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Customer.name,
        schema: CustomerSchema,
      },
      {
        name: Order.name,
        schema: OrderSchema,
      },
    ]),
  ],
  controllers: [CustomerController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
