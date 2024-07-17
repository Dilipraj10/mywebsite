package com.mywebsite.gaming.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mywebsite.gaming.entity.Game;

public interface GameRepository extends JpaRepository<Game, Integer> {

	Optional<Game> findByGameId(String gameId);
	
	Optional<Game> findByGameName(String gameName);
}
