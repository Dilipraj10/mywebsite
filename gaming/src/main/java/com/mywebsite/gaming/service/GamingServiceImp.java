package com.mywebsite.gaming.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mywebsite.gaming.dto.AdminDto;
import com.mywebsite.gaming.dto.DownloadDto;
import com.mywebsite.gaming.dto.FeedbackDto;
import com.mywebsite.gaming.dto.GameDto;
import com.mywebsite.gaming.dto.UserDto;
import com.mywebsite.gaming.entity.Admin;
import com.mywebsite.gaming.entity.Download;
import com.mywebsite.gaming.entity.Feedback;
import com.mywebsite.gaming.entity.Game;
import com.mywebsite.gaming.entity.User;
import com.mywebsite.gaming.exception.GamingException;
import static com.mywebsite.gaming.constents.Constants.USER_ALREADY_PRESENT;

import com.mywebsite.gaming.repository.AdminRepository;
import com.mywebsite.gaming.repository.DownloadRepository;
import com.mywebsite.gaming.repository.FeedbackRepository;
import com.mywebsite.gaming.repository.GameRepository;
import com.mywebsite.gaming.repository.UserRepository;
import com.mywebsite.gaming.utils.Utils;

@Service
public class GamingServiceImp  implements GamingService{
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private GameRepository gameRepository;
	
	@Autowired
	private DownloadRepository downloadRepository;
	
	@Autowired
	private FeedbackRepository feedbackRepository;
	
	@Autowired
	private AdminRepository adminRepository;
	
//User Register--------------------------------------------------------------------------------------------------------------------------
	
	public String addUser(UserDto dto) {
		Optional<User> optional = userRepository.findByGmail(dto.getGmail());
		if(!optional.isPresent()) {
				User user = Utils.dtoToEntity(dto);
				return userRepository.save(user).getUsername();
		}
		throw new GamingException(USER_ALREADY_PRESENT);
	}

//User Login-----------------------------------------------------------------------------------------------------------------------

	@Override
	public String loginUser(User dto) {
		Optional<User> optional = userRepository.findByGmail(dto.getGmail());
		if(optional.isPresent()) {
			User user = optional.get();
			if(dto.getGmail().equals(user.getGmail()) && dto.getPassword().equals(user.getPassword())) {
				return user.getUsername();
			}
			else {
				return "gmail and password missmatch ";
			}
		}
		throw new GamingException("Please Register And Try");
	}
	
//Fetch books----------------------------------------------------------------------------------------------------------------------------

	@Override
	public List<UserDto> getUsers(Integer userId, String username, String gmail) {
		List<UserDto> users = userRepository.findAll().stream().map(u -> UserDto.builder()
				.username(u.getUsername())
				.userId(u.getUserId())
				.gmail(u.getGmail())
				.build()).toList();
		
		if(userId != null) {
			return users.stream().filter(u -> u.getUserId().equals(userId)).collect(Collectors.toList());
		}
		
		else if(username != null) {
			return users.stream().filter(u -> u.getUsername().equalsIgnoreCase(username)).collect(Collectors.toList());
		}
		
		else if(gmail != null) {
			return users.stream().filter(u -> u.getGmail().equalsIgnoreCase(gmail)).collect(Collectors.toList());
		}
		return users;
	}
	
//Delete user----------------------------------------------------------------------------------------------------------------------------
		
	@Override
	public String deleteUser(UserDto dto) {
		Optional<User> optional = userRepository.findByGmail(dto.getGmail());
		if(optional.isPresent()) {
			User user = optional.get();
			userRepository.delete(user);
			return "user deleted";
		}
		else {
			throw new GamingException("user not found !");
		}
	}
	
//Update user--------------------------------------------------------------------------------------------------------------------------	

	@Override
	public String updateUser(UserDto dto) {
		System.out.println(dto.getGmail());
		Optional<User> optional = userRepository.findByGmail(dto.getGmail());
		if(optional.isPresent()) {
			User user = optional.get();
			user.setUsername(dto.getUsername());
			user.setPassword(dto.getPassword());
			return userRepository.save(user).getGmail();
		}
		else {
			throw new GamingException("user not found !!");
		}
	}
	
//Add games-------------------------------------------------------------------------------------------------------------------------	

	@Override
	public String addGames(GameDto dto) {
		Optional<Game> optional = gameRepository.findByGameId(dto.getGameId());
		if(!optional.isPresent()) {
			Game game = Utils.gameDtoToEntity(dto);
			return gameRepository.save(game).getGameName();
		}
		else{
			throw new GamingException("Game alraedy present");
		}
	}
	
//Fetch games--------------------------------------------------------------------------------------------------------------------------	

	@Override
	public List<GameDto> getGames(String gameId, String gameName, String gameType) {
		List<GameDto> collection = gameRepository.findAll().stream()
				.map(game -> GameDto.builder()
						.gameId(game.getGameId())
						.gameName(game.getGameName())
						.gameImage(game.getGameImage())
						.description(game.getDescription())
						.gameType(game.getGameType())
						.totalDownloads(game.getTotalDownloads())
						.build()).toList();
		if(gameId != null) {
			return collection.stream().filter(g -> g.getGameId().equalsIgnoreCase(gameId)).collect(Collectors.toList());
		}
		else if(gameName != null){
			return collection.stream().filter(g -> g.getGameName().equalsIgnoreCase(gameName)).collect(Collectors.toList());
		}
		else if(gameType != null) {
			return collection.stream().filter(g -> g.getGameType().equalsIgnoreCase(gameType)).collect(Collectors.toList());
		}
		
		return collection;
	}
	
//---------------------------------------------------------------------------------------------------------------------------

	@Override
	public UserDto userLogin(UserDto dto) {
		Optional<User> optional = userRepository.findByGmail(dto.getGmail());
				if(optional.isPresent()) {
					User user = optional.get();
					if(user.getPassword().equals(dto.getPassword())) {
						return Utils.EntityToDto(user); 
					}
					else {
						throw new GamingException("Invalid password");
					}
				}
		throw new GamingException("Invalid gmail");
	}

//add download---------------------------------------------------------------------------------------------------------------
	
	@Override
	public String addDownload(DownloadDto dto) {
		Optional<Download> optional = downloadRepository.findByUserGmailAndGameGameId(dto.getGmail(), dto.getGameName());
		if(!optional.isPresent()) {
			Optional<User> userOptional = userRepository.findByGmail(dto.getGmail());
			Optional<Game> gameOptional = gameRepository.findByGameName(dto.getGameName());
			if(userOptional.isPresent() && gameOptional.isPresent()) {
				User userEntity = userOptional.get();
				Game gameEntity = gameOptional.get();
				Download downloadEntity = Utils.downloadDtoToEntity(dto);
				if(userEntity.getDownloads() != null) {
					userEntity.getDownloads().add(downloadEntity);
					userEntity.setDownloads(new ArrayList<>(Arrays.asList(downloadEntity)));
				}
				else {
					userEntity.setDownloads(new ArrayList<>(Arrays.asList(downloadEntity)));
				}
				if(gameEntity.getDownloads() != null) {
					gameEntity.getDownloads().add(downloadEntity);
					gameEntity.setDownloads(new ArrayList<>(Arrays.asList(downloadEntity)));
				}
				else {
					gameEntity.setDownloads(new ArrayList<>(Arrays.asList(downloadEntity)));
				}
				downloadEntity.setUser(userEntity);
				downloadEntity.setGame(gameEntity);
				
				return gameRepository.save(gameEntity).getGameName();
			}
			
		}
		
		throw new GamingException("User or game not present");
	}

//get downloads---------------------------------------------------------------------------------------------------------------------------	
	
	@Override
	public List<DownloadDto> getDownloads() {
		List<DownloadDto> collection = downloadRepository.findAll().stream().map(d -> DownloadDto.builder()
				.downloadId(d.getDownloadId())
				.gameName(d.getGame().getGameName())
				.gmail(d.getUser().getGmail())
				.build()).toList();
		
		return collection;
	}
	
//Update game--------------------------------------------------------------------------------------------------------------------------

	@Override
	public String updateGame(GameDto dto) {
		Optional<Game> optional = gameRepository.findByGameId(dto.getGameId());
		if(optional.isPresent()) {
			Game game = optional.get();
			game.setGameName(dto.getGameName());
			game.setDescription(dto.getDescription());
			game.setGameImage(dto.getGameImage());
			game.setGameType(dto.getGameType());
			game.setTotalDownloads(dto.getTotalDownloads());
			
			return gameRepository.save(game).getGameId();
		}
		throw new GamingException("Game not found");
	}
	
//Delete game----------------------------------------------------------------------------------------------------------------	

	@Override
	public String deleteGame(GameDto dto) {
		Optional<Game> optional = gameRepository.findByGameId(dto.getGameId());
		if(optional.isPresent()) {
			Game game = optional.get();
			gameRepository.delete(game);
			return "Game Deleted";
		}
		throw new GamingException("Game not found!");
	}

//Add feedback---------------------------------------------------------------------------------------------------------------
	
	@Override
	public String addfeedback(FeedbackDto dto) {
		Optional<Feedback> optional = feedbackRepository.findByFeedbackId(dto.getFeedbackId());
		if(!optional.isPresent()) {
			Feedback feedback = Utils.feedbackDtoToEntity(dto);
			return feedbackRepository.save(feedback).getGmail();
			
		}
		throw new GamingException("Unable to add feedback!");
	}
	
//Get feedback---------------------------------------------------------------------------------------------------------------

	@Override
	public List<FeedbackDto> getFeedback() {
		return feedbackRepository.findAll().stream()
				.map(f -> FeedbackDto.builder()
						.username(f.getUsername())
						.gmail(f.getGmail())
						.feedback(f.getFeedback())
						.build()).toList();
	}
	
//Admin login----------------------------------------------------------------------------------------------------------------	

	@Override
	public String adminLogin(AdminDto dto) {
		Optional<Admin> optional = adminRepository.findByGmail(dto.getGmail());
		if(optional.isPresent()) {
			Admin admin = optional.get();
			if(admin.getPassword().equals(dto.getPassword())) {
				return "Login successful";
			}
			else {
				throw new GamingException("Invalid password !");
			}
		}
		throw new GamingException("Invalid Gmail !");
	}

//user password update-------------------------------------------------------------------------------------------------------
	
	@Override
	public String updateUserPassword(UserDto dto) {
		Optional<User> optional = userRepository.findByGmail(dto.getGmail());
		if(optional.isPresent()) {
			User user = optional.get();
			user.setPassword(dto.getPassword());
			userRepository.save(user);
			return "password upadted";
		}
		throw new GamingException("User not found");
	}

//admin password update------------------------------------------------------------------------------------------------------
	
	@Override
	public String updateAdminPassword(AdminDto dto) {
		Optional<Admin> optional = adminRepository.findByGmail(dto.getGmail());
		if(optional.isPresent()) {
			Admin admin = optional.get();
			admin.setPassword(dto.getPassword());
			adminRepository.save(admin);
			return "password updated";
		}
		throw new GamingException("User not found");
	}

//increment download---------------------------------------------------------------------------------------------------------
	
	@Override
	public Integer incrementDownload(GameDto dto) {
		Optional<Game> optional = gameRepository.findByGameName(dto.getGameName());
		if(optional.isPresent()) {
			Game game = optional.get();
			Integer totalDownload = game.getTotalDownloads(); 
			Integer increment = totalDownload + 1;
			
			game.setTotalDownloads(increment);
			return gameRepository.save(game).getTotalDownloads();
		}
		throw new GamingException("Game not found");
	}
	
//----------------------------------------------------------------------------------------------------------------------------
	
}
