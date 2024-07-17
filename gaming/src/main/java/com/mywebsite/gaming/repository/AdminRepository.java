package com.mywebsite.gaming.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mywebsite.gaming.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer>{
	
	Optional<Admin> findByGmail(String gmail);	
}
