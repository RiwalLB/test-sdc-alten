from rest_framework import viewsets
from rest_framework.response import Response
from .models import Product
from .serializers import CreateProductQueryDto, UpdateProductQueryDto, ProductResponseSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductResponseSerializer

    def create(self, request, *args, **kwargs):
        serializer = CreateProductQueryDto(data=request.data)
        if serializer.is_valid():
            product = serializer.save()
            response_serializer = ProductResponseSerializer(product)
            return Response(response_serializer.data)
        return Response(serializer.errors, status=400)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = UpdateProductQueryDto(instance, data=request.data, partial=True)
        if serializer.is_valid():
            product = serializer.save()
            response_serializer = ProductResponseSerializer(product)
            return Response(response_serializer.data)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = ProductResponseSerializer(instance)
        return Response(serializer.data)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = ProductResponseSerializer(queryset, many=True)
        return Response(serializer.data)
