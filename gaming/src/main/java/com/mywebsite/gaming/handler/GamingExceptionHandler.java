package com.mywebsite.gaming.handler;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.mywebsite.gaming.exception.GamingException;

@RestControllerAdvice
public class GamingExceptionHandler {

	@org.springframework.web.bind.annotation.ExceptionHandler(GamingException.class)
	public ResponseEntity<String> ExceptionHandler(RuntimeException exe) {
		
		return ResponseEntity.ok(exe.getMessage());
	}
	
	@org.springframework.web.bind.annotation.ExceptionHandler(MethodArgumentNotValidException.class)
	 public Map<String, String> handleMethodNotValidException(MethodArgumentNotValidException exe) {
		 Map<String, String> message = new HashMap<>();
		 List<ObjectError> errors = exe.getBindingResult().getAllErrors();
		 errors.forEach(err -> {
			 FieldError fieldError = (FieldError) err;
			 message.put(fieldError.getField(), fieldError.getDefaultMessage());
		 });
		 
		 return message;
	 }  

}
