import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Types } from 'mongoose'

import { Product } from './products.model'
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
    async products(@Args('filters', { nullable: true }) filters?: ListProducts) {
        return await this.productService.list(filters)
    }

    @Mutation(() => Product)
    async nproduct(@Args('product') product?: CreateProduct) {
        return await this.productService.create(product)
    }

    @Query(() => Product)
    async product(@Args('sku', { type: () => String }) sku: Types.ObjectId) {
        return await this.productService.bySku(sku)
    }    

    @Mutation(() => Product)
    async uproduct(@Args('product') product: UpdateProduct) {
        return await this.productService.update(product)
    }

    @Mutation(() => Boolean)
    async rproduct(@Args('sku', { type: () => String }) sku: Types.ObjectId) {
        return this.productService.delete(sku)
    }

}