package com.app;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class SocietyManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(SocietyManagementSystemApplication.class, args);
	}

	@Bean
	public PasswordEncoder encoder()
	{
		return new BCryptPasswordEncoder();
	}
	//configure model mapper bean
	@Bean
	public ModelMapper mapper()
	{
		return new ModelMapper();
	}
}
