package com.app.Entity;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString(exclude = "roles")
@AllArgsConstructor
@Table(name = "flatowner")
public class Flatowner extends BaseId{

	
	public Flatowner() {
	}

	@Column(length = 30)
private String f_name;
	
	
	@Column(length = 30,unique = true)
private String f_email;
	
	
	@Column(length = 70)
private String f_password;

	
	@Column(length = 30)
private double f_mobilenum;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "users_roles", 
	joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<UserRole> roles = new HashSet<>();
	}
