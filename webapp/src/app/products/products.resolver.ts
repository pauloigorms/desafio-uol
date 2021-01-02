import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Types } from 'mongoose';

import { Product, ProductDocument } from './products.model'
import { ProductsService } from './products.service'

import {
    CreateProduct,
    ListProducts,
    UpdateProduct
} from './products.inputs'

@Resolver(() => Product)
export class ProductsResolver {

    constructor(private productService: ProductsService) {}

    @Query(() => [Product])
    async products(
        @Args('filters', { nullable: true }) filters?: ListProducts,) {
        return await this.productService.list(filters);
    }

    @Mutation(() => Product)
    async nproduct(@Args('product') product?: CreateProduct) {
        return this.productService.create(product);
    }

    @Mutation(() => Product)
    async uproduct(@Args('product') product: UpdateProduct) {
        return this.productService.update(product);
    }

    @Mutation(() => String)
    async rproduct(@Args('id', { type: () => String }) id: Types.ObjectId) {
        return this.productService.delete(id);
    }

}