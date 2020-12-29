
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Product {
  
    @Prop({ required: true })
    sku: Types.ObjectId;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    is_active: boolean;

    @Prop()
    price: number;

    @Prop()
    weigth: number;

    @Prop()
    status: number;
  
}

export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product);