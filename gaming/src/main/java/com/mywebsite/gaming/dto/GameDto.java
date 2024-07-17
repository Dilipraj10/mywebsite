package com.mywebsite.gaming.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GameDto {
	
	private String gameId;
	private String gameName;
	private String gameImage;
	private String description;
	private String gameType;
	private Integer totalDownloads;

}
