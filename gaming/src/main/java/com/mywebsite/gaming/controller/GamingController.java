package com.mywebsite.gaming.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mywebsite.gaming.dto.UserDto;
import com.mywebsite.gaming.service.GamingService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/gaming")
public class GamingController {
	
	private GamingService gamingService;
	
	@PostMapping(path = "/adduser")
	ResponseEntity<String> addUser(@RequestBody UserDto dto) {
		String user = gamingService.addUser(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(user +"user added");

	}
	

}
