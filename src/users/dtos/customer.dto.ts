import {
  IsString,
  IsNotEmpty,
  IsPhoneNumber,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

import { CreateSkillDto } from './skill.dto';
import { Type } from 'class-transformer';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly lastName: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly phone: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSkillDto)
  readonly skills: CreateSkillDto[];
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
