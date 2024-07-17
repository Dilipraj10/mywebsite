package com.mywebsite.gaming.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mywebsite.gaming.entity.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {
	
	Optional<Feedback> findByFeedbackId(Integer feedbackId);

}
