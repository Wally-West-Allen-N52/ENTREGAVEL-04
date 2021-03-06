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

import com.agency.entities.BuyRV;
import com.agency.repositories.BuyRVRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/buyRV")
public class BuyRVController {

	@Autowired
	private BuyRVRepository buyRVRepository;

	//============================== Get ====================================
	@GetMapping
	public ResponseEntity<List<BuyRV>> findAll() {
		List<BuyRV> buyRVs = buyRVRepository.findAll();

		return ResponseEntity.ok().body(buyRVs);
	}

	//============================ GET por id ===============================
	@GetMapping(value = "/{id}")
	public ResponseEntity<BuyRV> findById(@PathVariable Integer id) {

		BuyRV buyRV = buyRVRepository.findById(id).get();

		return ResponseEntity.ok().body(buyRV);
	}

	//============================== CREATE ==================================
	@PostMapping
	public BuyRV create(@RequestBody BuyRV id) {

		return buyRVRepository.save(id);
	}

	// ============================= UPDATE ===================================
	@PutMapping("{id}")
	public ResponseEntity<BuyRV> update(@PathVariable Integer id, @RequestBody BuyRV buyRVDetails) {
		BuyRV updateBuyRV = buyRVRepository.findById(id).get();

		updateBuyRV.setCategory(buyRVDetails.getCategory());
		updateBuyRV.setModel(buyRVDetails.getModel());

		buyRVRepository.save(updateBuyRV);

		return ResponseEntity.ok(updateBuyRV);
	}

	//================================ DELETE ================================
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Integer id) {

		BuyRV buyRV = buyRVRepository.findById(id).get();

		buyRVRepository.delete(buyRV);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);

	}
}
