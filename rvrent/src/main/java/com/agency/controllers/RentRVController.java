package com.agency.controllers;

import java.util.List;

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

import com.agency.entities.RentRV;
import com.agency.repositories.RentRVRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/rentRV")
public class RentRVController {

	@Autowired
	private RentRVRepository rentRVRepository;
	
	//========================== Get ==================================
	@GetMapping
	public ResponseEntity<List<RentRV>> findAll() {
		List<RentRV> rentRVs = rentRVRepository.findAll();
		
		return ResponseEntity.ok().body(rentRVs);
	}
	
	//=========================== GET FROM ID ===========================
	@GetMapping(value = "/{id}")
	public ResponseEntity<RentRV> findById(@PathVariable Integer id) {
		
		RentRV rentRV = rentRVRepository.findById(id).get();
		
		return ResponseEntity.ok().body(rentRV);
	}
	
	//============================= CREATE ==================================
    @PostMapping
    public RentRV create(@RequestBody RentRV id) {
    	
        return rentRVRepository.save(id);
    }
    
    // UPDATE
    @PutMapping("{id}")
    public ResponseEntity<RentRV> update(@PathVariable Integer id,@RequestBody RentRV rentRVDetails) {
    	RentRV updateRentRV = rentRVRepository.findById(id).get();

    	updateRentRV.setCategory(rentRVDetails.getCategory());
    	updateRentRV.setModel(rentRVDetails.getModel());

    	rentRVRepository.save(updateRentRV);

        return ResponseEntity.ok(updateRentRV);
    }
    
    // DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Integer id) {

    	RentRV rentRV = rentRVRepository.findById(id).get();

    	rentRVRepository.delete(rentRV);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
