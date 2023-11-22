import { Injectable } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductQueryDto } from './dto/create-product-query.dto';
import { UpdateProductQueryDto } from './dto/update-product-query.dto';
import { ProductResponseDto } from './dto/product-response.dto';

@Injectable()
export class ProductBusiness {
    constructor(private readonly productService: ProductService) {}

    async create(
        createProductDto: CreateProductQueryDto,
    ): Promise<ProductResponseDto> {
        const product = await this.productService.create(createProductDto);

        return new ProductResponseDto(product);
    }

    async findAll(): Promise<ProductResponseDto[]> {
        const products = await this.productService.findAll();

        return products.map((product) => new ProductResponseDto(product));
    }

    async findOne(id: number): Promise<ProductResponseDto> {
        const product = await this.productService.findOne(id);

        return new ProductResponseDto(product);
    }

    async update(
        id: number,
        updateProductDto: UpdateProductQueryDto,
    ): Promise<ProductResponseDto> {
        const product = await this.productService.update(id, updateProductDto);

        return new ProductResponseDto(product);
    }

    async remove(id: number): Promise<void> {
        await this.productService.remove(id);
    }
}
