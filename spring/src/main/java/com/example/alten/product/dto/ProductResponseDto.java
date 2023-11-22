package com.example.alten.product.dto;

import com.example.alten.category.dto.CategoryResponseDto;
import com.example.alten.inventoryStatus.dto.InventoryStatusResponseDto;
import com.example.alten.product.model.Product;

public class ProductResponseDto {

    public Long id;
    public String code;
    public String name;
    public String description;
    public int price;
    public int quantity;
    public InventoryStatusResponseDto inventoryStatus;
    public CategoryResponseDto category;
    public String image;
    public Integer rating;

    public ProductResponseDto(Product product) {
        this.id = product.getId();
        this.code = product.getCode();
        this.name = product.getName();
        this.description = product.getDescription();
        this.price = product.getPrice();
        this.quantity = product.getQuantity();
        this.inventoryStatus = new InventoryStatusResponseDto(product.getInventoryStatus());
        this.category = new CategoryResponseDto(product.getCategory());
        this.image = product.getImage();
        this.rating = product.getRating();
    }
}
