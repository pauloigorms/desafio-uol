import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Product, ProductDocument } from './products.model';

import {
    CreateProduct,
    ListProducts,
    UpdateProduct
} from './products.inputs'

@Injectable()
export class ProductsService {

    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    ) {}

    create(product: CreateProduct) {
        const model = new this.productModel(product);
        return model.save();
    }
    
    list(filters: ListProducts) {
        return this.productModel.find({ ...filters }).exec();
    }

    update(product: UpdateProduct) {
        return this.productModel.findOneAndUpdate({_id: product._id}, {$set: product}, {useFindAndModify: false}).exec();
    }

    delete(id: Types.ObjectId) {
        return this.productModel.findByIdAndDelete({_id: id}).exec();
    }
    
}
