from rest_framework import serializers
from ..models import Product
from ..resources.validation_resources import STRING_MAX_SIZE, INTEGER_MAX_VALUE, CURRENCY_TO_CENTS

class UpdateProductQueryDto(serializers.ModelSerializer):
    code = serializers.CharField(max_length=STRING_MAX_SIZE, required=False)
    name = serializers.CharField(max_length=STRING_MAX_SIZE, required=False)
    description = serializers.CharField(max_length=STRING_MAX_SIZE, required=False)
    price = serializers.IntegerField(min_value=0, max_value=INTEGER_MAX_VALUE, required=False)
    quantity = serializers.IntegerField(min_value=0, max_value=INTEGER_MAX_VALUE, required=False)
    inventory_status_id = serializers.IntegerField(min_value=0, max_value=INTEGER_MAX_VALUE, required=False)
    category_id = serializers.IntegerField(min_value=0, max_value=INTEGER_MAX_VALUE, required=False)
    image = serializers.CharField(max_length=STRING_MAX_SIZE, allow_blank=True, required=False)
    rating = serializers.IntegerField(min_value=0, max_value=INTEGER_MAX_VALUE, required=False, allow_null=True)

    def validate_price(self, value):
        # Transform price to cents
        return value * CURRENCY_TO_CENTS
    
    class Meta:
        model = Product
        fields = '__all__'
