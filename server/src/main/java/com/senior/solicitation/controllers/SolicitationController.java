package com.senior.solicitation.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senior.solicitation.dto.SolicitationDTO;
import com.senior.solicitation.entities.Solicitation;
import com.senior.solicitation.services.SolicitationService;
import com.senior.solicitation.validator.Validator;

@RestController
@RequestMapping("api/v1/solicitation")
public class SolicitationController {

	@Autowired
	SolicitationService solicitationService;

	/**
	 * Find all Solicitation in API.
	 * 
	 * @return list of solicitations.
	 */
	@GetMapping
	public List<Solicitation> findAll() {
		return solicitationService.listAll();
	}

	/**
	 * Saves a new solicitation.
	 */
	@PostMapping
	public ResponseEntity<Validator<Solicitation>> save(@RequestBody Solicitation solicitation, BindingResult result) {

		Validator<Solicitation> validator = new Validator<Solicitation>();

		if (result.hasErrors()) {
			result.getAllErrors().forEach(error -> validator.getErrors().add(error.getDefaultMessage()));
			return ResponseEntity.badRequest().body(validator);
		}

		solicitationService.save(solicitation);

		return ResponseEntity.ok().build();
	}
	
	/**
	 * Return one solicitation by id.
	 * @param id identification number of solicitation.
	 */
	@GetMapping(path = "/{id}")
	public ResponseEntity<?> loadById(@PathVariable Long id) {
		Validator<?> validator = new Validator<>();

		if (id == null) {
			validator.getErrors().add("Solicitation not localized!");
			return ResponseEntity.badRequest().body(validator);
		}

		Solicitation solicitation = solicitationService.loadById(id);

		return ResponseEntity.ok(solicitation);
	}
	
	
	/**
	 * Update an existing solicitation
	 * @param solicitationDTO dto for necessary params.
	 * @return updated solicitation.
	 */
	@PutMapping(path = "/{id}")
	public ResponseEntity<Validator<Solicitation>> update(@RequestBody SolicitationDTO solicitationDTO, BindingResult result) {
		Validator<Solicitation> validator = new Validator<Solicitation>();

		if (result.hasErrors()) {
			result.getAllErrors().forEach(error -> validator.getErrors().add(error.getDefaultMessage()));
			return ResponseEntity.badRequest().body(validator);
		}
		
		solicitationService.update(solicitationDTO);

		return ResponseEntity.ok().build();
	}

}
