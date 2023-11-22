package com.example.alten.product.dto;

import org.springframework.format.annotation.NumberFormat;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@JsonIgnoreProperties(ignoreUnknown = false)
public class CreateProductDto {

    @NotBlank
    @Size(max = 255)
    private String code;

    @NotBlank
    @Size(max = 255)
    private String name;

    @NotBlank
    @Size(max = 255)
    private String description;

    @NotNull
    @Min(0)
    @Max(Integer.MAX_VALUE)
    @NumberFormat(style = NumberFormat.Style.CURRENCY)
    private Integer price;

    @NotNull
    @Min(0)
    @Max(Integer.MAX_VALUE)
    private Integer quantity;

    @NotNull
    @Min(0)
    private Long inventoryStatusId;

    @NotNull
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
