package com.app.service;

import java.util.Optional;

import com.app.DTO.FlatownerDTO;
import com.app.DTO.UserRegResponse;
import com.app.Entity.Flatowner;
import com.app.Entity.Role;
import com.app.Entity.UserRole;

public interface IUserService {

	UserRegResponse registerUser(FlatownerDTO user);
	
	UserRole GetByEmail(String f_email);

}
