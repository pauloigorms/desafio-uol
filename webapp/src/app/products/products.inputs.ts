import { Field, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class CreateProduct {

    @Field(() => String)
    sku?: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    description: string;

    @Field(() => Boolean)
    is_active: boolean;

    @Field(() => Number)
    price: string;

    @Field(() => Number)
    weigth: string;

    @Field(() => Number)
    status: string;
  
}

@InputType()
export class ListProduct {

    @Field({ nullable: true })
    _id?: string;

    @Field({ nullable: true })
    sku?: string;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    is_active?: boolean;

    @Field({ nullable: true })
    price?: number;

    @Field({ nullable: true })
    weigth?: number;

    @Field({ nullable: true })
    status?: number;

}

@InputType()
export class UpdateProduct {

    @Field(() => String)
    _id: Types.ObjectId;

    @Field(() => String, { nullable: true })
    sku?: string;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => Boolean, { nullable: true })
    is_active?: boolean;

    @Field(() => Number, { nullable: true })
    price?: number;

    @Field(() => Number, { nullable: true })
    weigth?: number;

    @Field(() => Number, { nullable: true })
    status?: number;

}