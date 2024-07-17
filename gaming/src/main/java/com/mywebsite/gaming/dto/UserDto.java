package com.mywebsite.gaming.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {

	private Integer userId;
	
	@NotBlank(message = "username should present")
	@Pattern(regexp = "^[A-Za-z]{2,20}$",message = "username should be alphabet only")
	private String username;
	
	@NotBlank(message = "Email should present")
	@Email
	private String gmail;
	
	@Pattern(regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*[\\d\\W]).{8,}$", message = "Password must have eight characters "
			+ "including one uppercase letter, one lowercase letter, and one number or special character.")
	private String password;
}
