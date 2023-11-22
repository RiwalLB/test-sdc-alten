import { PrismaClient } from '@prisma/client';

export async function seedCategories(prisma: PrismaClient) {
    const categories = [
        {
            id: 1,
            label: 'Accessories',
        },
        {
            id: 2,
            label: 'Fitness',
        },
        {
            id: 3,
            label: 'Clothing',
        },
        {
            id: 4,
            label: 'Electronics',
        },
    ];

    await Promise.all(
        categories.map((category) =>
            prisma.category.upsert({
                where: { id: category.id },
                update: {
                    label: category.label,
                },
                create: {
                    id: category.id,
                    label: category.label,
                },
            }),
        ),
    );
}
