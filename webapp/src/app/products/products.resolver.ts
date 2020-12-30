import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Types } from 'mongoose';

import { Product, ProductDocument } from './products.model'
import { ProductsService } from './products.service'

import {
    CreateProduct,
    ListProduct,
    UpdateProduct
} from './products.inputs'

@Resolver(() => Product)
export class ProductsResolver {

    constructor(private productService: ProductsService) {}

    @Query(() => Product)
    async product(@Args('_id', { type: () => String }) _id: Types.ObjectId) {
        return this.productService.getById(_id);
    }

    @Query(() => Product)
    async products(@Args('filters', { nullable: true }) filters?: ListProduct, ) {
        return this.productService.list(filters);
    }

    @Mutation(() => Product)
    async createProduct(@Args('payload') payload: CreateProduct) {
        return this.productService.create(payload);
    }

    @Mutation(() => Product)
    async updateProduct(@Args('payload') payload: UpdateProduct) {
        return this.productService.update(payload);
    }

    @Mutation(() => Product)
    async deleteProduct(@Args('_id', { type: () => String }) _id: Types.ObjectId) {
        return this.productService.delete(_id);
    }

}