import { Field, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class CreateProduct {

    @Field(() => String, { nullable: true })
    sku?: Types.ObjectId;

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

@InputType()
export class ListProducts {

    @Field(() => String, { nullable: true })
    sku?: Types.ObjectId;

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

@InputType()
export class UpdateProduct {

    @Field(() => String, { nullable: true })
    sku?: Types.ObjectId;

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