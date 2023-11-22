import { CURRENCY_TO_CENTS } from 'src/shared/helpers/number.helper';
import { IProduct } from '../interface/product.entity';

export class ProductResponseDto {
    id: number;
    code: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    inventoryStatus: { id: number; label: string };
    category: { id: number; label: string };
    image: string | null;
    rating: number | null;

    constructor(product: IProduct) {
        this.id = product.id;
        this.code = product.code;
        this.name = product.name;
        this.description = product.description;
        this.price = product.price / CURRENCY_TO_CENTS;
        this.quantity = product.quantity;
        this.inventoryStatus = {
            id: product.inventoryStatus.id,
            label: product.inventoryStatus.label,
        };
        this.category = {
            id: product.category.id,
            label: product.category.label,
        };
        this.image = product.image;
        this.rating = product.rating;
    }
}
