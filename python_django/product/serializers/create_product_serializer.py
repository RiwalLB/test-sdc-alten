from rest_framework import serializers
from ..models import Product, Category, InventoryStatus
from ..resources.validation_resources import (
    STRING_MAX_SIZE,
    INTEGER_MAX_VALUE,
    CURRENCY_TO_CENTS,
)


class CreateProductQueryDto(serializers.ModelSerializer):
    code = serializers.CharField(max_length=STRING_MAX_SIZE)
    name = serializers.CharField(max_length=STRING_MAX_SIZE)
    description = serializers.CharField(max_length=STRING_MAX_SIZE)
    price = serializers.IntegerField(min_value=0, max_value=INTEGER_MAX_VALUE)
    quantity = serializers.IntegerField(min_value=0, max_value=INTEGER_MAX_VALUE)
    inventory_status = serializers.PrimaryKeyRelatedField(
        queryset=InventoryStatus.objects.all()
    )
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    image = serializers.CharField(
        max_length=STRING_MAX_SIZE, allow_blank=True, required=False
    )
    rating = serializers.IntegerField(
        min_value=0, max_value=INTEGER_MAX_VALUE, required=False, allow_null=True
    )

    def validate_price(self, value):
        # Transform price to cents
        return value * CURRENCY_TO_CENTS

    class Meta:
        model = Product
        fields = "__all__"
