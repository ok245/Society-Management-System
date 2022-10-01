package com.app.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Length;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "visitor")
public class Visitor extends BaseId{

	@NotEmpty(message="name must be supplied")
	@Length(min = 4,max=30,message="Invalid first name length")
	@Column(length = 30)
	private String v_name;
	
	//@NotEmpty(message="mobile no. must be supplied")
	@Column(length = 30)
	private double v_mobileno;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="flat_id")
	private Flatowner flatowner;
}
