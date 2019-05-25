package com.senior.solicitation.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SolicitationDTO {
	
	private Long id;
	private Boolean status;
	private String observation;

}
