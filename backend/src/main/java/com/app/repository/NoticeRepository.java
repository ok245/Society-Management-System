package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.Entity.Notice;

@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long>{

}
