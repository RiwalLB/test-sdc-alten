package com.example.alten.product.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;

@JsonIgnoreProperties(ignoreUnknown = false)
public class UpdateProductDto {

    @Size(max = 255)
    private String code;

    @Size(max = 255)
    private String name;

    @Size(max = 255)
    private String description;

    @Min(0)
    @Max(Integer.MAX_VALUE)
    private Integer price;

    @Min(0)
    @Max(Integer.MAX_VALUE)
    private Integer quantity;

    @Min(0)
    private Long inventoryStatusId;

    @Min(0)
    private Long categoryId;

    @Size(max = 255)
    private String image;

    @Min(0)
    @Max(Integer.MAX_VALUE)
    private Integer rating;

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Integer getPrice() {
        return price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public Long getInventoryStatusId() {
        return inventoryStatusId;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public String getImage() {
        return image;
    }

    public Integer getRating() {
        return rating;
    }
}
