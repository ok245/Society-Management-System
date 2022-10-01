package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Entity.Bill;

public interface BillRepository extends JpaRepository<Bill, Long> {

}
