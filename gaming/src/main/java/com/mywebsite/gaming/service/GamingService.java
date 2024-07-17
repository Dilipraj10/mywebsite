package com.mywebsite.gaming.service;

import java.util.List;

import com.mywebsite.gaming.dto.AdminDto;
import com.mywebsite.gaming.dto.DownloadDto;
import com.mywebsite.gaming.dto.FeedbackDto;
import com.mywebsite.gaming.dto.GameDto;
import com.mywebsite.gaming.dto.UserDto;
import com.mywebsite.gaming.entity.User;

public interface GamingService {

	public  String addUser(UserDto dto);

	public String loginUser(User dto);

	public List<UserDto> getUsers(Integer id, String username, String gmail);

	public String deleteUser(UserDto dto);

	public String updateUser(UserDto dto);

	public String addGames(GameDto dto);

	public List<GameDto> getGames(String gameId, String gameName, String gameType);

	public UserDto userLogin(UserDto dto);

	public String addDownload(DownloadDto dto);

	public List<DownloadDto> getDownloads();

	public String updateGame(GameDto dto);

	public String deleteGame(GameDto dto);

	public String addfeedback(FeedbackDto dto);

	public List<FeedbackDto> getFeedback();

	public String adminLogin(AdminDto dto);
		
}
