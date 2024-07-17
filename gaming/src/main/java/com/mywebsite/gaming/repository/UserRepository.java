package com.mywebsite.gaming.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mywebsite.gaming.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	Optional<User> findByGmail(String gmail);
}
