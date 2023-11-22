package com.example.alten.category.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.alten.category.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
