package com.app.service;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.app.Entity.Flatowner;
import lombok.ToString;

@ToString
public class CustomUserDetails implements UserDetails {
	private Flatowner user;

	public CustomUserDetails(Flatowner user) {
		super();
		this.user = user;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		return user.getRoles().stream()
				.map(r -> new SimpleGrantedAuthority(r.getRoleName().name()))
				.collect(Collectors.toList());		
				}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return user.getF_password();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getF_email();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
