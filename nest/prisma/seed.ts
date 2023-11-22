import { PrismaClient } from '@prisma/client';
import { seedCategories } from './seeds/category.seed';
import { seedInventoryStatuses } from './seeds/inventory-status.seed';
import { seedProducts } from './seeds/products.seed';

const prisma = new PrismaClient();

async function main() {
    await seedCategories(prisma);
    await seedInventoryStatuses(prisma);
    await seedProducts(prisma);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    });
