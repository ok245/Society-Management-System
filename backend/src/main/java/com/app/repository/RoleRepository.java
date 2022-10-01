package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Entity.Role;
import com.app.Entity.UserRole;
public interface RoleRepository extends JpaRepository<UserRole,Long>{
 //find by role : enum
	Optional<UserRole> findByRoleName(Role user);
}
