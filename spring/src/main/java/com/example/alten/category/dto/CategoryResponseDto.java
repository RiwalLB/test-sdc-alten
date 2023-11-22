package com.example.alten.category.dto;

import com.example.alten.category.model.Category;

public class CategoryResponseDto {
    public Long id;
    public String label;

    public CategoryResponseDto(Category category) {
        this.id = category.getId();
        this.label = category.getLabel();
    }
}
