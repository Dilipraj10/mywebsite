package com.mywebsite.gaming.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Entity
public class Download {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private Integer downloadId;
		
	@JoinColumn(name = "gamil")
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private User user;
	
	@JoinColumn(name = "game_name")
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Game game;

}
