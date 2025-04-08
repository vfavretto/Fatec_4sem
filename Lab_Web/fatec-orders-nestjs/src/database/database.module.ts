import { Module } from '@nestjs/common';
import { ProductRepository } from './repository/product.repository';

@Module({
    providers: [ProductRepository],
    exports: [ProductRepository]
})
export class DatabaseModule {}
