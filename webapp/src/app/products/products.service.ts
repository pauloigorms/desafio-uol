import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Product, ProductDocument } from './products.model';

import {
    CreateProduct,
    ListProduct,
    UpdateProduct
} from './products.inputs'

@Injectable()
export class ProductsService {

    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    ) {}

    create(payload: CreateProduct) {
        const data = new this.productModel(payload);
        return data.save();
    }

    getById(_id: Types.ObjectId) {
        return this.productModel.findById(_id).exec();
    }
    
    list(filters: ListProduct) {
        return this.productModel.find({ ...filters }).exec();
    }

    update(payload: UpdateProduct) {
        return this.productModel
          .findByIdAndUpdate(payload._id, payload, { new: true })
          .exec();
    }

    delete(_id: Types.ObjectId) {
        return this.productModel.findByIdAndDelete(_id).exec();
    }

}
