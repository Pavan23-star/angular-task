import { productImage } from './productImage.model'

export interface productCard {
    id: number;
    name: string;
    price_in_inr_with_tax: string;
    mrp: string;
    description: string;
    tax_total: number;
    image_list: productImage[]
}