package com.app.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.app.Entity.Flatowner;
import com.app.Entity.UserRole;

public interface UserRepository extends JpaRepository<Flatowner, Long> {
	@Query("select f from Flatowner f join fetch f.roles where f.f_email=?1")
	Optional<Flatowner> findByEmail(String f_email);
	
	@Query("select r.roles from Flatowner r join r.roles where r.f_email=?1")
	UserRole GetRoleofUser(String f_email);
}
