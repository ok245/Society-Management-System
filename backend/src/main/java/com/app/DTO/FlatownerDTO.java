package com.app.DTO;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import com.app.Entity.BaseId;
import com.app.Entity.Role;
import com.app.Entity.UserRole;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(exclude = "roles")

public class FlatownerDTO extends BaseId{
	
	public FlatownerDTO() {
		super();
	}


	@NotEmpty(message="name must be supplied")
	@Length(min = 4,max=30,message="Invalid first name length")
	private String f_name;
	
	@Email(message="invalid email")
	//@Pattern(regexp="(^(.+)@(\\\\S+)$")
    private String f_email;
	
	@JsonProperty(access = Access.WRITE_ONLY) 
	private String f_password;
	
	@NotNull
	private Double f_mobilenum;
	
	@NotEmpty(message = "at least 1 role should be chosen")
	private Set<Role> roles = new HashSet<>();
}
