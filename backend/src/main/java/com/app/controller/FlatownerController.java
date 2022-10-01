package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.AuthRequest;
import com.app.DTO.AuthResp;
import com.app.Entity.Complaint;
import com.app.Entity.Visitor;
import com.app.jwt_utils.JwtUtils;
import com.app.repository.BillRepository;
import com.app.repository.ComplaintRepository;
import com.app.repository.NoticeRepository;
import com.app.repository.UserRepository;
import com.app.repository.WorkerRepository;
import com.app.service.IUserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class FlatownerController {

	@Autowired
	private ComplaintRepository crepo;
	
	@Autowired
	private NoticeRepository nrepo;
	
	@Autowired
	private BillRepository brepo;
	
	@Autowired
	private WorkerRepository wrepo;
	
	@Autowired
	private JwtUtils utils;
	
	@Autowired
	private AuthenticationManager manager;
	
	@Autowired
	private UserRepository urepo;
	
	@PostMapping("/flatowner")
	public ResponseEntity<?> GetFlatowner(@RequestBody @Valid AuthRequest request){
		
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(request.getEmail(),
				request.getPassword());
		Authentication authenticatedDetails = manager.authenticate(authToken);
		return ResponseEntity.status(HttpStatus.OK).body(urepo.findByEmail(request.getEmail()));
	}
	
	@GetMapping("/flatowner/visitors")
	public List<Visitor> getAllVisitors(){
		return wrepo.findAll();
	}

	@PostMapping("/flatowner/Complaints/Add")
	public ResponseEntity<?> CreateComplaint(@Valid @RequestBody Complaint complaint){
		return ResponseEntity.status(HttpStatus.CREATED).body(crepo.save(complaint));
	}
	
	@GetMapping("/flatowner/Bills")
	public ResponseEntity<?> GetBill(){
		return ResponseEntity.status(HttpStatus.OK).body(brepo.findAll());
	}
	
	@GetMapping("/flatowner/Notices")
	public ResponseEntity<?> GetNotices(){
		return ResponseEntity.status(HttpStatus.OK).body(nrepo.findAll());
	}

}
