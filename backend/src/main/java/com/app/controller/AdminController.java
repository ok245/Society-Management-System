package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.DTO.FlatownerDTO;
import com.app.Entity.Bill;
import com.app.Entity.Flatowner;
import com.app.Entity.Notice;
import com.app.Entity.Visitor;
import com.app.repository.AdminRepository;
import com.app.repository.BillRepository;
import com.app.repository.ComplaintRepository;
import com.app.repository.NoticeRepository;
import com.app.repository.WorkerRepository;
import com.app.service.IUserService;
	
	@RestController
	@RequestMapping("/api/auth")
	@CrossOrigin(origins = "http://localhost:3000")
	public class AdminController {
		
		@Autowired
		private AdminRepository arepo;
		
		@Autowired
		private IUserService userService;
		
		@Autowired
		private NoticeRepository nrepo;
		
		@Autowired
		private ComplaintRepository crepo;
		
		@Autowired
		private BillRepository brepo;
		
		@Autowired
		private WorkerRepository wrepo;
		
		@GetMapping("/Admin")
		public ResponseEntity<?> GetAllMembers(){
			return ResponseEntity.status(HttpStatus.OK).body(arepo.findAll());
		}
		
		@GetMapping("/Admin/{id}")
		public ResponseEntity<Flatowner> getFlatownerById(@PathVariable long id){
			Flatowner flatowner = arepo.findById(id).
					orElseThrow(() -> new Error("Visitor not found with id"+id));
		return ResponseEntity.ok(flatowner);
		}
		
		@PutMapping("/Admin/{id}")
		public ResponseEntity<?> updateFlatowner(@PathVariable long id,@RequestBody FlatownerDTO FlatownerDetails){
			Flatowner updateFlatowner = arepo.findById(id).
					orElseThrow(() -> new Error("Visitor not matches with id"+id));
			arepo.delete(updateFlatowner);
			return ResponseEntity.status(HttpStatus.CREATED).body(userService.registerUser(FlatownerDetails));		
		}
		
		@DeleteMapping("/Admin/{id}")
		public ResponseEntity<HttpStatus> deleteFlatowner(@PathVariable long id){
			Flatowner flatowner = arepo.findById(id).orElseThrow(() -> new Error("Visitor not found with id"+id));
			arepo.delete(flatowner);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		
		@GetMapping("/Admin/visitors")
		public List<Visitor> getAllVisitors(){
			return wrepo.findAll();
		}
		
		@GetMapping("/Admin/Notice")
		public ResponseEntity<?> getAllNotices(){
			return ResponseEntity.status(HttpStatus.OK).body(nrepo.findAll());
		}
		
		@PostMapping("/Admin/Notice/Add")
		public ResponseEntity<?> CreateNotice(@Valid @RequestBody Notice notice){
			return ResponseEntity.status(HttpStatus.CREATED).body(nrepo.save(notice));
		}
		
		@GetMapping("/Admin/Complaints")
		public ResponseEntity<?> getAllComplaints(){
			return ResponseEntity.status(HttpStatus.OK).body(crepo.findAll());
		}
		
		@GetMapping("/Admin/Bills")
		public ResponseEntity<?> getAllBill(){
			return ResponseEntity.status(HttpStatus.CREATED).body(brepo.findAll());
		}
		
		@PostMapping(value = "/Admin/Bills/Add",produces = "application/json")
		public ResponseEntity<Bill> createBill(@Valid @RequestBody Bill bill){
			return ResponseEntity.status(HttpStatus.CREATED).body(brepo.save(bill));
		}
	}
