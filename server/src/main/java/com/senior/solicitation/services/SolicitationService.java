package com.senior.solicitation.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senior.solicitation.dto.SolicitationDTO;
import com.senior.solicitation.entities.Solicitation;
import com.senior.solicitation.repositories.SolicitationRepository;

@Service
public class SolicitationService {

	@Autowired
	private SolicitationRepository solicitationRepository;

	public void save(Solicitation solicitation) {
		solicitationRepository.save(solicitation);
	}

	public List<Solicitation> listAll() {
		return solicitationRepository.findAll();
	}

	public Solicitation loadById(Long id) {
		return solicitationRepository.findById(id).get();
	}

	public void update(SolicitationDTO solicitationDTO) {

		Solicitation solicitation = solicitationRepository
				.findById(solicitationDTO.getId()).get();
		
		solicitation.setStatus(solicitationDTO.getStatus());
		solicitation.setObservation(solicitationDTO.getObservation());
		
		solicitationRepository.save(solicitation);
	}
}
