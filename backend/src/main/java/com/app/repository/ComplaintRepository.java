package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Entity.Complaint;

public interface ComplaintRepository extends JpaRepository<Complaint, Long> {

}
