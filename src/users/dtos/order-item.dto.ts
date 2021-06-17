import { IsNotEmpty, IsPositive, IsNumber } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateOrderItemDto {
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly orderId: number;

  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly productId: number;

  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly quantity: number;
}

export class UpdateOrderItemDto extends PartialType(CreateOrderItemDto) {}
