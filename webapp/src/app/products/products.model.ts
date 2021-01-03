import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Field, ObjectType } from '@nestjs/graphql'
import { Document, Types } from 'mongoose'

@ObjectType()
@Schema()
export class Product {
  
    @Field(() => String)
    @Prop()
    sku: Types.ObjectId

    @Field(() => String)
    @Prop()
    name: string

    @Field(() => String)
    @Prop()
    description: string

    @Field(() => Boolean)
    @Prop()
    is_active: boolean

    @Field(() => Number)
    @Prop()
    price: number

    @Field(() => Number)
    @Prop()
    weigth: number

    @Field(() => Number)
    @Prop()
    status: number
  
}

export type ProductDocument = Product & Document
export const ProductSchema = SchemaFactory.createForClass(Product)