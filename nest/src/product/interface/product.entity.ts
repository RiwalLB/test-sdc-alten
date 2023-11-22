import { Category, InventoryStatus, Product } from '@prisma/client';

export interface IProduct extends Product {
    inventoryStatus: InventoryStatus;
    category: Category;
}
