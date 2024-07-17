package com.mywebsite.gaming.dto;


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
public class FeedbackDto {
	
	private Integer feedbackId;
	private String username;
	private String gmail;
	private String feedback;
}
