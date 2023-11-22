import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductBusiness } from './product.business';
import { PrismaModule } from 'src/shared/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [ProductController],
    providers: [ProductService, ProductBusiness],
})
export class ProductModule {}
