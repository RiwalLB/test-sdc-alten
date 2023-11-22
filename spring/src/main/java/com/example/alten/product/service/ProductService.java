package com.example.alten.product.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.alten.category.model.Category;
import com.example.alten.category.repository.CategoryRepository;
import com.example.alten.inventoryStatus.model.InventoryStatus;
import com.example.alten.inventoryStatus.repository.InventoryStatusRepository;
import com.example.alten.product.dto.CreateProductDto;
import com.example.alten.product.dto.UpdateProductDto;
import com.example.alten.product.exception.ProductNotFoundException;
import com.example.alten.product.model.Product;
import com.example.alten.product.repository.ProductRepository;
import com.example.alten.shared.BeanUtilsHelper;

import java.util.List;

@Service
@Transactional
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final InventoryStatusRepository inventoryStatusRepository;

    @Autowired
    public ProductService(ProductRepository productRepository,
            CategoryRepository categoryRepository,
            InventoryStatusRepository inventoryStatusRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.inventoryStatusRepository = inventoryStatusRepository;
    }

    public Product create(CreateProductDto createProductDto) {
        Product product = new Product();
        product.setCode(createProductDto.getCode());
        product.setName(createProductDto.getName());
        product.setDescription(createProductDto.getDescription());
        product.setPrice(createProductDto.getPrice());
        product.setQuantity(createProductDto.getQuantity());

        Category category = categoryRepository.getReferenceById(createProductDto.getCategoryId());
        product.setCategory(category);

        InventoryStatus inventoryStatus = inventoryStatusRepository
                .getReferenceById(createProductDto.getInventoryStatusId());
        product.setInventoryStatus(inventoryStatus);

        product.setImage(createProductDto.getImage());
        product.setRating(createProductDto.getRating());

        return productRepository.save(product);
    }

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Product findOne(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }

    public Product update(Long id, UpdateProductDto updateProductDto) {
        System.out.println(updateProductDto);
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));

        BeanUtils.copyProperties(updateProductDto, existingProduct,
                BeanUtilsHelper.getNullPropertyNames(updateProductDto));

        if (updateProductDto.getCategoryId() != null) {
            Category category = categoryRepository.getReferenceById(updateProductDto.getCategoryId());
            existingProduct.setCategory(category);
        }

        if (updateProductDto.getInventoryStatusId() != null) {
            InventoryStatus inventoryStatus = inventoryStatusRepository
                    .getReferenceById(updateProductDto.getInventoryStatusId());
            existingProduct.setInventoryStatus(inventoryStatus);
        }

        return productRepository.save(existingProduct);
    }

    public void remove(Long id) {
        productRepository.deleteById(id);
    }
}
