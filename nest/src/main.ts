import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import { PrismaExceptionFilter } from './shared/prisma/prisma.exception-filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { bufferLogs: true });

    app.useLogger(app.get(Logger));
    app.useGlobalInterceptors(new LoggerErrorInterceptor());
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );
    app.useGlobalFilters(new PrismaExceptionFilter());

    const config = new DocumentBuilder()
        .setTitle('Alten technical test')
        .setVersion('0.1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    app.enableCors();

    await app.listen(process.env['APP_PORT'] ?? 3000);

    process.stdout.write('Application successfully started!\n');
}
bootstrap();
