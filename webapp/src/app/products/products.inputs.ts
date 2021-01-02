import { Field, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class ListProduct {

    @Field(() => String, { nullable: true })
    _id?: Types.ObjectId;

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