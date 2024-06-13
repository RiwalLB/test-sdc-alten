from django.db import models

class Category(models.Model):
    label = models.CharField(max_length=100)

    def __str__(self):
        return self.label

class InventoryStatus(models.Model):
    label = models.CharField(max_length=100)

    def __str__(self):
        return self.label

class Product(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    code = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.IntegerField()
    quantity = models.IntegerField()
    inventory_status = models.ForeignKey(InventoryStatus, on_delete=models.CASCADE, related_name='products')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    image = models.URLField(blank=True, null=True)
    rating = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.name
