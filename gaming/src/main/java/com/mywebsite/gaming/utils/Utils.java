package com.mywebsite.gaming.utils;

import com.mywebsite.gaming.dto.DownloadDto;
import com.mywebsite.gaming.dto.FeedbackDto;
import com.mywebsite.gaming.dto.GameDto;
import com.mywebsite.gaming.dto.UserDto;
import com.mywebsite.gaming.entity.Download;
import com.mywebsite.gaming.entity.Feedback;
import com.mywebsite.gaming.entity.Game;
import com.mywebsite.gaming.entity.User;

public class Utils {

	public static User userDtoToEntity(UserDto dto) {
		return User.builder()
				.username(dto.getUsername())
				.gmail(dto.getGmail())
				.password(dto.getPassword())
				.build();
	}

	public static User dtoToEntity(UserDto dto) {
		return User.builder()
				.username(dto.getUsername())
				.gmail(dto.getGmail())
				.password(dto.getPassword())
				.build();
	}

	public static Game gameDtoToEntity(GameDto dto) {
		return Game.builder()
				.gameId(dto.getGameId())
				.gameName(dto.getGameName())
				.gameImage(dto.getGameImage())
				.description(dto.getDescription())
				.gameType(dto.getGameType())
				.totalDownloads(dto.getTotalDownloads())
				.build();
	}

	public static UserDto EntityToDto(User user) {
		return UserDto.builder()
				.username(user.getUsername())
				.gmail(user.getGmail())
				.build();
	}

	public static Download downloadDtoToEntity(DownloadDto dto) {
		return Download.builder()
				.build();
	}

	public static Feedback feedbackDtoToEntity(FeedbackDto dto) {
		return Feedback.builder()
				.username(dto.getUsername())
				.gmail(dto.getGmail())
				.feedback(dto.getFeedback())
				.build();
	}
}
