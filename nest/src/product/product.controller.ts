import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
    HttpCode,
} from '@nestjs/common';
import { CreateProductQueryDto } from './dto/create-product-query.dto';
import { UpdateProductQueryDto } from './dto/update-product-query.dto';
import { ProductBusiness } from './product.business';
import { ProductResponseDto } from './dto/product-response.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductController {
    constructor(private readonly productBusiness: ProductBusiness) {}

    /**
     * Entry point to create a new product
     * @param createProductDto Request DTO
     * @returns The newly created product
     */
    @Post()
    @HttpCode(200)
    create(
        @Body() createProductDto: CreateProductQueryDto,
    ): Promise<ProductResponseDto> {
        return this.productBusiness.create(createProductDto);
    }

    /**
     * Entry point to list all products
     * @returns The list of all products
     */
    @Get()
    findAll(): Promise<ProductResponseDto[]> {
        return this.productBusiness.findAll();
    }

    /**
     * Entry point to find one product by id
     * @param id id of the target product
     * @returns The product if found
     * @throws 404 - Not Found error if not found
     */
    @Get(':id')
    findOne(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<ProductResponseDto> {
        return this.productBusiness.findOne(id);
    }

    /**
     * Entry point to update a product by id
     * @param id target id
     * @param updateProductDto  Request DTO
     * @returns The updated product if it exists
     * @throws 404 - Not Found error if the product is not found
     */
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateProductDto: UpdateProductQueryDto,
    ): Promise<ProductResponseDto> {
        return this.productBusiness.update(id, updateProductDto);
    }

    /**
     * Entry point to delete a product by id
     * @param id
     */
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.productBusiness.remove(id);
    }
}
