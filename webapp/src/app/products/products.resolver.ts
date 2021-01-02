import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Types } from 'mongoose';

import { Product, ProductDocument } from './products.model'
import { ProductsService } from './products.service'

import {
    ListProduct,
} from './products.inputs'

@Resolver(() => Product)
export class ProductsResolver {

    constructor(private productService: ProductsService) {}

    @Query(() => [Product])
    async products(
        @Args('filters', { nullable: true }) filters?: ListProduct, 
    ) {
        return await this.productService.list(filters);
    }

}