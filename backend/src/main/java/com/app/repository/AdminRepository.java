package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.app.Entity.Flatowner;

@Repository
public interface AdminRepository extends JpaRepository<Flatowner, Long>{

}
