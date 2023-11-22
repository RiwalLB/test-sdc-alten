import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './shared/prisma/prisma.module';
import { LoggerModule } from 'nestjs-pino';
import { PinoService } from './shared/logging/pino.service';

@Module({
    imports: [
        LoggerModule.forRoot(PinoService.createStreams()),
        ProductModule,
        PrismaModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
