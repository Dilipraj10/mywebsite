package com.mywebsite.gaming.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mywebsite.gaming.dto.AdminDto;
import com.mywebsite.gaming.dto.DownloadDto;
import com.mywebsite.gaming.dto.FeedbackDto;
import com.mywebsite.gaming.dto.GameDto;
import com.mywebsite.gaming.dto.UserDto;
import com.mywebsite.gaming.response.CommonResponse;
import com.mywebsite.gaming.service.GamingService;

import jakarta.validation.Valid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;





@RestController
@RequestMapping("/api/gaming")
@CrossOrigin
public class GamingController {
	
	@Autowired
	private GamingService gamingService;
	
//Add user----------------------------------------------------------------------------------------------------------------------------	
	
	@PostMapping(path = "/adduser")
	ResponseEntity<CommonResponse<String>> addUser(@Valid @RequestBody UserDto dto) {
		String user = gamingService.addUser(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(CommonResponse.<String>builder()
						.data(user)
						.error(false)
						.message("user added")
						.build());
	}
	
//Get user----------------------------------------------------------------------------------------------------------------------------
	
	@GetMapping(path ="/alluser")
	public ResponseEntity<CommonResponse<List<UserDto>>> getMethodName(
			@RequestParam (name = "userId", required = false) Integer userId,
			@RequestParam (name = "username",  required = false) String username,
			@RequestParam (name = "gmail",  required = false) String gmail) {
		List<UserDto> users = gamingService.getUsers(userId,username, gmail);
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(CommonResponse.<List<UserDto>>builder()
						.data(users)
						.error(false)	
						.message("data fetched")
						.build());
	}
	
//delete user----------------------------------------------------------------------------------------------------------------------------
	
	@DeleteMapping(path ="/delete")
	public ResponseEntity<CommonResponse<String>> deleteUser(@RequestBody UserDto dto) {
		String user = gamingService.deleteUser(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(CommonResponse.<String>builder()
						.data(user)
						.error(false)
						.message("user deleted")
						.build());
	}
	
//Update user----------------------------------------------------------------------------------------------------------------------------
	
	@PutMapping(path = "/userupdate")
	public ResponseEntity<CommonResponse<String>> updateUser(@RequestBody UserDto dto) {
		String user = gamingService.updateUser(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(CommonResponse.<String>builder()
						.data(user)
						.error(false)
						.message("user updated")
						.build());
	}
	
//update user password-------------------------------------------------------------------------------------------------------
	
	@PutMapping(path = "/userpasswordupdate")
	public ResponseEntity<CommonResponse<String>> putMethodName(@RequestBody UserDto dto) {
		String password = gamingService.updateUserPassword(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(CommonResponse.<String>builder()
						.data(password)
						.error(false)
						.message("password updated")
						.build());
	}
	
//Add game--------------------------------------------------------------------------------------------------------------------------

	@PostMapping(path = "/addgame")
	public ResponseEntity<CommonResponse<String>> addGames(@RequestBody GameDto dto) {
		String game = gamingService.addGames(dto);
		return  ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(CommonResponse.<String>builder()
						.data(game)
						.error(false)
						.message("Game added")
						.build());
	}
	
//Get game-------------------------------------------------------------------------------------------------------------------------
	
	@GetMapping(path = "/getgames")
	public ResponseEntity<CommonResponse<List<GameDto>>> getGames(
			@RequestParam (name = "gameId", required = false) String gameId,
			@RequestParam (name = "gameName", required = false) String gameName,
			@RequestParam (name = "gameType", required = false) String gameType)
	{
		List<GameDto> games = gamingService.getGames(gameId,gameName,gameType);
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(CommonResponse.<List<GameDto>>builder()
						.data(games)
						.error(false)
						.message("Games fetched")
						.build());
	}
	
//update game-----------------------------------------------------------------------------------------------------------------
		
		@PutMapping(path = "/updategame")
		public ResponseEntity<CommonResponse<String>> updateGame(@RequestBody GameDto dto) {	
			String upadte = gamingService.updateGame(dto);
			return ResponseEntity.status(HttpStatus.ACCEPTED)
					.body(CommonResponse.<String>builder()
							.data(upadte)
							.error(false)
							.message("Game updated")
							.build());
		}
		
//increment game download-----------------------------------------------------------------------------------------------------
		
		@PutMapping(path = "incrementdownload")
		public ResponseEntity<CommonResponse<String>> incrementDownload(@RequestBody GameDto dto) {
			Integer increment = gamingService.incrementDownload(dto);
			return ResponseEntity.status(HttpStatus.ACCEPTED)
					.body(CommonResponse.<String>builder()
							.error(false)
							.message("total download incremented")
							.build());
		}
		
//Delete gaming--------------------------------------------------------------------------------------------------------------
		
		@DeleteMapping(path = "/deletegame")
		public ResponseEntity<CommonResponse<String>> deleteGame(@RequestBody GameDto dto) {
			String delete = gamingService.deleteGame(dto);
			return ResponseEntity.status(HttpStatus.ACCEPTED)
					.body(CommonResponse.<String>builder()
							.data(delete)
							.error(false)
							.message("Game deleted")
							.build());
		}

//User login---------------------------------------------------------------------------------------------------------------------------	

	@PostMapping(path = "/userlogin")
	public ResponseEntity<CommonResponse<UserDto>> UserLogin(@RequestBody UserDto dto) {
		UserDto login = gamingService.userLogin(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(CommonResponse.<UserDto>builder()
						.data(login)
						.error(false)
						.message("User successfully logined!")
						.build());
				
	}
//Add download---------------------------------------------------------------------------------------------------------------------------
	
	@PostMapping(path = "/downloadgames")
	public ResponseEntity<CommonResponse<String>> postMethodName(@RequestBody DownloadDto dto) {
		String download = gamingService.addDownload(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(CommonResponse.<String>builder()
						.data(download)
						.error(false)
						.message("Downloaded")
						.build());
	}
	
//---------------------------------------------------------------------------------------------------------------------------
	
	@GetMapping(path = "/getdownloads")
	public ResponseEntity<CommonResponse<List<DownloadDto>>> getDownloads() {
		List<DownloadDto> download = gamingService.getDownloads();
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(CommonResponse.<List<DownloadDto>>builder()
						.data(download)
						.error(false)
						.message("All downloads")
						.build());
	}
	
//Add feedback---------------------------------------------------------------------------------------------------------------------------
	
	@PostMapping(path = "/addfeedback")
	public ResponseEntity<CommonResponse<String>> postMethodName(@RequestBody FeedbackDto dto) {
		String feedback = gamingService.addfeedback(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(CommonResponse.<String>builder()
						.data(feedback)
						.error(false)
						.message("feedback added!")
						.build());
	}
	
//Get feedback---------------------------------------------------------------------------------------------------------------------------
	
	@GetMapping(path = "/getfeedback")
	public ResponseEntity<CommonResponse<List<FeedbackDto>>> getMethodName() {
		List<FeedbackDto> feedback = gamingService.getFeedback();
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(CommonResponse.<List<FeedbackDto>>builder()
						.data(feedback)
						.error(false)
						.message("Feedback fetched")
						.build());
	}
	
//Admin login---------------------------------------------------------------------------------------------------------------------------
	
	@PostMapping(path = "/adminlogin")
	public ResponseEntity<CommonResponse<String>> adminLogin(@RequestBody AdminDto dto) {
		String admin = gamingService.adminLogin(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(CommonResponse.<String>builder()
						.data(admin)
						.error(false)
						.message("login successful!")
						.build());
	}
	
//Admin password upadate------------------------------------------------------------------------------------------------------

	@PutMapping(path = "adminpasswordupdate")
	public ResponseEntity<CommonResponse<String>> putMethodName(@RequestBody AdminDto dto) {
		String password = gamingService.updateAdminPassword(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(CommonResponse.<String>builder()
						.data(password)
						.error(false)
						.message("password updated")
						.build());
	}
	
//---------------------------------------------------------------------------------------------------------------------------
	
}
