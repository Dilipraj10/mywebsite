package com.mywebsite.gaming.entity;


import java.util.List;

import io.micrometer.common.lang.Nullable;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Game {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotNull
	private String gameId;
	
	@NotNull
	private String gameName;
	
	@NotNull
	private String gameImage;
	
	@NotNull
	private String description;
	
	@NotNull
	private String gameType;
	
	@NotNull
	private Integer totalDownloads;
	
	@OneToMany(cascade  = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "game")
	private List<Download> downloads;
}
