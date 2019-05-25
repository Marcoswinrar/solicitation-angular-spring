package com.senior.solicitation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senior.solicitation.entities.Solicitation;

public interface SolicitationRepository extends JpaRepository<Solicitation, Long> {
}
