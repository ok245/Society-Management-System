package com.app.Entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@ToString
@Table(name = "notice")
public class Notice extends BaseId{

	@NotBlank(message = "description is req")
	@Column(length = 100)
	private String n_description;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@Column(unique = true)
	private Date n_date;
}
