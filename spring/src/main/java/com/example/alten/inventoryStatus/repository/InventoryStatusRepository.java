package com.example.alten.inventoryStatus.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.alten.inventoryStatus.model.InventoryStatus;

public interface InventoryStatusRepository extends JpaRepository<InventoryStatus, Long> {
}
