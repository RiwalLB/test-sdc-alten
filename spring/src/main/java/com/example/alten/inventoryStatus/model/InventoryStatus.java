package com.example.alten.inventoryStatus.model;

import java.util.List;

import com.example.alten.product.model.Product;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class InventoryStatus {

    @Id
    private Long id;

    @Column(nullable = false)
    private String label;

    @OneToMany(mappedBy = "inventoryStatus")
    private List<Product> products;

    public Long getId() {
        return id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
