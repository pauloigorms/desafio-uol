import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Types } from 'mongoose';

import { Product, ProductDocument } from './products.model'
import { ProductsService } from './products.service'

import {
    CreateProduct,
    ListProducts,
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

}