package com.senior.solicitation.entities;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "solicitation")
public class Solicitation implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name="requester_name", nullable = false)
	private String requesterName;
	
	@Column(name="item_description")
	private String itemDescription;
	
	@Column(name="price", nullable = false)
	private BigDecimal price;
	
	@Column(name="status")
	private Boolean status;
	
	@Column(name="observation")
	private String observation;

}
