import { productImage } from '../models/productImage.model';

export interface productDetails {
    id: number;
    name: string;
    image_list: productImage[];
    tax_total: number;
    created: string;
    description: string;
    price_in_inr_with_tax: string;
    mrp: string;
}