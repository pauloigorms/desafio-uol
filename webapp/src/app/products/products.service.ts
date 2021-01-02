import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Product, ProductDocument } from './products.model';

import {
    CreateProduct,
    ListProducts
} from './products.inputs'

@Injectable()
export class ProductsService {

    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    ) {}

    create(payload: CreateProduct) {
        const product = new this.productModel(payload);
        return product.save();
    }
    
    list(filters: ListProducts) {
        return this.productModel.find({ ...filters }).exec();
    }

}
