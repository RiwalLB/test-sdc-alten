import { Injectable } from '@nestjs/common';
import { CreateProductQueryDto } from './dto/create-product-query.dto';
import { UpdateProductQueryDto } from './dto/update-product-query.dto';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { IProduct } from './interface/product.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createProductDto: CreateProductQueryDto): Promise<IProduct> {
        const product = await this.prisma.product.create({
            data: {
                code: createProductDto.code,
                name: createProductDto.name,
                description: createProductDto.description,
                price: createProductDto.price,
                quantity: createProductDto.quantity,
                categoryId: createProductDto.categoryId,
                image: createProductDto.image,
                inventoryStatusId: createProductDto.inventoryStatusId,
                rating: createProductDto.rating,
            },
            include: {
                inventoryStatus: true,
                category: true,
            },
        });

        return product;
    }

    async findAll(): Promise<IProduct[]> {
        const products = await this.prisma.product.findMany({
            include: {
                inventoryStatus: true,
                category: true,
            },
            orderBy: {
                id: Prisma.SortOrder.asc,
            },
        });

        return products;
    }

    async findOne(id: number): Promise<IProduct> {
        const product = await this.prisma.product.findUniqueOrThrow({
            where: { id },
            include: {
                inventoryStatus: true,
                category: true,
            },
        });

        return product;
    }

    async update(
        id: number,
        updateProductDto: UpdateProductQueryDto,
    ): Promise<IProduct> {
        const product = await this.prisma.product.update({
            where: { id },
            data: {
                code: updateProductDto.code,
                name: updateProductDto.name,
                description: updateProductDto.description,
                price: updateProductDto.price,
                quantity: updateProductDto.quantity,
                categoryId: updateProductDto.categoryId,
                image: updateProductDto.image,
                inventoryStatusId: updateProductDto.inventoryStatusId,
                rating: updateProductDto.rating,
            },
            include: {
                inventoryStatus: true,
                category: true,
            },
        });

        return product;
    }

    async remove(id: number): Promise<void> {
        await this.prisma.product.delete({ where: { id } });
    }
}
