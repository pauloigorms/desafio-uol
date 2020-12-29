import { Types } from 'mongoose';

export class CreateProduct {
    name: string;
    description: string;
    is_active: boolean;
    price: number;
    weigth: number;
    status: number;
}
  
export class ListProduct {
    _id?: Types.ObjectId;
    name?: string;
    description?: string;
    is_active?: boolean;
    price?: number;
    weigth?: number;
    status?: number;
}
  
export class UpdateProduct {
    _id: Types.ObjectId;
    name?: string;
    description?: string;
    is_active?: boolean;
    price?: number;
    weigth?: number;
    status?: number;
}