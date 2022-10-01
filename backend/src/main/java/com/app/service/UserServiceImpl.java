package com.app.service;

import java.util.Optional;

import javax.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.app.DTO.FlatownerDTO;
import com.app.DTO.UserRegResponse;
import com.app.Entity.Flatowner;
import com.app.Entity.Role;
import com.app.Entity.UserRole;
import com.app.repository.RoleRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	// dep : user repo n role repo
	@Autowired
	private UserRepository userRepo;

	@Autowired
	private RoleRepository roleRepo;

	// mapper
	@Autowired
	private ModelMapper mapper;
	//	password enc
	@Autowired
	private PasswordEncoder encoder;

	@Override
	public UserRegResponse registerUser(FlatownerDTO flat) {
		// Objective : 1 rec inserted in users table n insert n recs in link table (users_roles)
		//1. Map dto --> entity
		Flatowner userEntity=mapper.map(flat,Flatowner.class);
		userEntity.getRoles().clear();//to be checked further !!!!!!!!!!!!!!!!!!!!!!
		//2. Iterate over the  roles from user dto n map it to Role ---add them under user entity
		flat.getRoles().stream() //Stream<UserRole>
		.map(roleEnum -> roleRepo.findByRoleName(roleEnum).orElseThrow(() -> new RuntimeException("Invalid role!!!"))) //Stream<Role>
		.forEach(r -> userEntity.getRoles().add(r));
		//3. encode pwd
		userEntity.setF_password(encoder.encode(flat.getF_password()));
		//4 : should I save roles first before saving user dtls? NO : alrdy existing in db		
		Flatowner persistentUser = userRepo.save(userEntity);
		return new UserRegResponse("User registered successfully with ID "+persistentUser.getId());
	}

	@Override
	public UserRole GetByEmail(String f_email) {
		UserRole role = userRepo.GetRoleofUser(f_email);
		return role;
			
	}
	}
