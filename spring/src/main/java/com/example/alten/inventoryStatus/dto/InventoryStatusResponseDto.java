package com.example.alten.inventoryStatus.dto;

import com.example.alten.inventoryStatus.model.InventoryStatus;

public class InventoryStatusResponseDto {
    public Long id;
    public String label;

    public InventoryStatusResponseDto(InventoryStatus inventoryStatus) {
        this.id = inventoryStatus.getId();
        this.label = inventoryStatus.getLabel();
    }
}
