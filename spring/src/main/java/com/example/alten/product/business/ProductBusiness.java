package com.example.alten.product.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.alten.product.dto.CreateProductDto;
import com.example.alten.product.dto.ProductResponseDto;
import com.example.alten.product.dto.UpdateProductDto;
import com.example.alten.product.model.Product;
import com.example.alten.product.service.ProductService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductBusiness {

    private final ProductService productService;

    @Autowired
    public ProductBusiness(ProductService productService) {
        this.productService = productService;
    }

    public ProductResponseDto create(CreateProductDto createProductDto) {
        Product product = productService.create(createProductDto);

        return mapToResponseDto(product);
    }

    public List<ProductResponseDto> findAll() {
        List<Product> products = productService.findAll();

        return products.stream()
                .map(this::mapToResponseDto)
                .collect(Collectors.toList());
    }

    public ProductResponseDto findOne(Long id) {
        Product product = productService.findOne(id);

        return mapToResponseDto(product);
    }

    public ProductResponseDto update(Long id, UpdateProductDto updateProductDto) {
        Product product = productService.update(id, updateProductDto);

        return mapToResponseDto(product);
    }

    public void remove(Long id) {
        productService.remove(id);
    }

    private ProductResponseDto mapToResponseDto(Product product) {
        return new ProductResponseDto(product);
    }
}
