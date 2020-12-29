import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Product, ProductSchema } from './products.model';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    ],
})
export class ProductsModule {}
