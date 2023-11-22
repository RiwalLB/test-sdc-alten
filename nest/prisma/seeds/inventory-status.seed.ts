import { PrismaClient } from '@prisma/client';

export async function seedInventoryStatuses(prisma: PrismaClient) {
    const inventoryStatuses = [
        {
            id: 1,
            label: 'INSTOCK',
        },
        {
            id: 2,
            label: 'LOWSTOCK',
        },
        {
            id: 3,
            label: 'OUTOFSTOCK',
        },
    ];

    await Promise.all(
        inventoryStatuses.map((inventoryStatus) =>
            prisma.inventoryStatus.upsert({
                where: { id: inventoryStatus.id },
                update: {
                    label: inventoryStatus.label,
                },
                create: {
                    id: inventoryStatus.id,
                    label: inventoryStatus.label,
                },
            }),
        ),
    );
}
