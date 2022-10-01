package com.app.controller;

import java.util.List;
import java.util.Optional;

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

import com.app.DTO.ErrorResponse;
import com.app.Entity.Visitor;
import com.app.repository.WorkerRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class WorkerController {
	
	@Autowired
	private WorkerRepository wrepo;
 
	@GetMapping("/worker")
	public List<Visitor> getAllVisitors(){
		return wrepo.findAll();
	}
	
	@PostMapping("/worker")
	public Visitor createVisitor(@RequestBody Visitor visitor) {
		return wrepo.save(visitor);
	}
	
	@GetMapping("/worker/{id}")
	public ResponseEntity<Visitor> getVisitorById(@PathVariable long id){
		Visitor visitor = wrepo.findById(id).
				orElseThrow(() -> new Error("Visitor not found with id"+id));
	return ResponseEntity.ok(visitor);
	}
	
	@PutMapping("/worker/{id}")
	public ResponseEntity<Visitor> updateVisitor(@PathVariable long id,@RequestBody Visitor VisitorDetails){
		Visitor updateVisitor = wrepo.findById(id).
				orElseThrow(() -> new Error("Visitor not matches with id"+id));
		updateVisitor.setV_mobileno(VisitorDetails.getV_mobileno());
		updateVisitor.setV_name(VisitorDetails.getV_name());
		wrepo.save(updateVisitor);
		return ResponseEntity.ok(updateVisitor);
	}
	
	@DeleteMapping("/worker/{id}")
	public ResponseEntity<HttpStatus> deleteVisitor(@PathVariable long id){
		Visitor visitor = wrepo.findById(id).orElseThrow(() -> new Error("Visitor not found with id"+id));
		wrepo.delete(visitor);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}

