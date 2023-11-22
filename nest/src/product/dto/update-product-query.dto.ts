import { PartialType } from '@nestjs/mapped-types';
import { CreateProductQueryDto } from './create-product-query.dto';

export class UpdateProductQueryDto extends PartialType(CreateProductQueryDto) {}
