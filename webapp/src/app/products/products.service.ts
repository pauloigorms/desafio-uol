import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { ObjectId } from 'bson'

import { Product, ProductDocument } from './products.model'

import {
    CreateProduct,
    ListProducts,
    UpdateProduct
} from './products.inputs'

@Injectable()
export class ProductsService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

    create(product: CreateProduct) {
        const model = new this.productModel(product)
        model.sku = model._id
        return model.save()
    }
    
    list(filters: ListProducts) {
        return this.productModel.find({ ...filters }).exec()
    }

    bySku(sku: Types.ObjectId) {
        try {
            return this.productModel.findOne({sku: new ObjectId(sku)})
        } 
        catch (err) {
            return err.message
        }
    }

    update(product: UpdateProduct) {
        product.sku = new ObjectId(product.sku)
        return this.productModel.findOneAndUpdate({sku: product.sku}, {$set: product}, {useFindAndModify: false}).exec()
    }

    delete(sku: Types.ObjectId) {
        if(this.productModel.findOneAndDelete({sku: new ObjectId(sku)}).exec())
            return true
        else
            return false
    }
    
}
