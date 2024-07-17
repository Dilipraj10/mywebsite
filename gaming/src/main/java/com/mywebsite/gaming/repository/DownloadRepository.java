package com.mywebsite.gaming.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mywebsite.gaming.entity.Download;

public interface DownloadRepository extends JpaRepository<Download, Integer>{
	
	Optional<Download> findByUserGmailAndGameGameId(String gmail, String gameId);
	
	Optional<Download> findByDownloadId(Integer downloadId);
}
