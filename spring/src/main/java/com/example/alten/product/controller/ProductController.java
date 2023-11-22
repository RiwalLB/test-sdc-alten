package com.example.alten.product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.alten.product.business.ProductBusiness;
import com.example.alten.product.dto.CreateProductDto;
import com.example.alten.product.dto.ProductResponseDto;
import com.example.alten.product.dto.UpdateProductDto;

import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductBusiness productBusiness;

    @Autowired
    public ProductController(ProductBusiness productBusiness) {
        this.productBusiness = productBusiness;
    }

    /**
     * Entry point to create a new product
     * 
     * @param createProductDto Request DTO
     * @returns The newly created product
     */
    @PostMapping
    public ResponseEntity<ProductResponseDto> create(@Valid @RequestBody CreateProductDto createProductDto) {
        ProductResponseDto createdProduct = productBusiness.create(createProductDto);
        return new ResponseEntity<>(createdProduct, HttpStatus.OK);
    }

    /**
     * Entry point to list all products
     * 
     * @returns The list of all products
     */
    @GetMapping
    public ResponseEntity<List<ProductResponseDto>> findAll() {
        List<ProductResponseDto> products = productBusiness.findAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    /**
     * Entry point to find one product by id
     * 
     * @param id id of the target product
     * @returns The product if found
     * @throws 404 - Not Found error if not found
     */
    @GetMapping("/{id}")
    public ResponseEntity<ProductResponseDto> findOne(@PathVariable Long id) {
        ProductResponseDto product = productBusiness.findOne(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    /**
     * Entry point to update a product by id
     * 
     * @param id               target id
     * @param updateProductDto Request DTO
     * @returns The updated product if it exists
     * @throws 404 - Not Found error if the product is not found
     */
    @PatchMapping("/{id}")
    public ResponseEntity<ProductResponseDto> update(@PathVariable Long id,
            @Valid @RequestBody UpdateProductDto updateProductDto) {
        ProductResponseDto updatedProduct = productBusiness.update(id, updateProductDto);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }

    /**
     * Entry point to delete a product by id
     * 
     * @param id
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remove(@PathVariable Long id) {
        productBusiness.remove(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
