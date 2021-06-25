import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Customer } from './customer.entity';
import { Product } from './../../products/entities/product.entity';

@Schema()
export class Order extends Document {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true, type: Types.ObjectId, ref: Customer.name })
  customer: Customer | Types.ObjectId;

  @Prop({ type: [{ type: Types.ObjectId, ref: Product.name }] })
  products: Types.Array<Product>;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
