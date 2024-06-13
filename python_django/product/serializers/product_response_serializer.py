from rest_framework import serializers
from ..models import Product
from ..resources.validation_resources import CURRENCY_TO_CENTS

class ProductResponseSerializer(serializers.ModelSerializer):
    inventory_status = serializers.SerializerMethodField()
    category = serializers.SerializerMethodField()
    price = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            'id', 'code', 'name', 'description', 'price', 'quantity',
            'inventory_status', 'category', 'image', 'rating'
        ]

    def get_inventory_status(self, obj):
        return {'id': obj.inventory_status.id, 'label': obj.inventory_status.label}

    def get_category(self, obj):
        return {'id': obj.category.id, 'label': obj.category.label}

    def get_price(self, obj):
        return obj.price / CURRENCY_TO_CENTS
