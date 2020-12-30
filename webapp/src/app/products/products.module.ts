import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Product, ProductSchema } from './products.model';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),],
    providers: [ProductsResolver, ProductsService],
})
export class ProductsModule {}