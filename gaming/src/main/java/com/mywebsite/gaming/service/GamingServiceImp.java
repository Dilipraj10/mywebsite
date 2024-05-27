package com.mywebsite.gaming.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mywebsite.gaming.dto.UserDto;
import com.mywebsite.gaming.entity.User;
import com.mywebsite.gaming.repository.UserRepository;
import com.mywebsite.gaming.utils.Utils;

@Service
public class GamingServiceImp  implements GamingService{
	
	@Autowired
	private UserRepository userRepository;
	
	public String addUser(UserDto dto) {
		return null;
	}


}
