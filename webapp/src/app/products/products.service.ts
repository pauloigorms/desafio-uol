import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Product, ProductDocument } from './products.model';

import {
    ListProduct,
} from './products.inputs'

@Injectable()
export class ProductsService {

    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    ) {}   
    
    list(filters: ListProduct) {
        return this.productModel.find({ ...filters }).exec();
    }

}
