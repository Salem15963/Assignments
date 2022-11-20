package com.codindojo.login.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codindojo.login.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
 
	Optional<User> findByEmail(String email);
	
	List<User> findAll();
 
}	