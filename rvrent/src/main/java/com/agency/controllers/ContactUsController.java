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

import com.agency.entities.ContactUs;
import com.agency.repositories.ContactUsRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/contactUs")
public class ContactUsController {

	@Autowired
	private ContactUsRepository contactUsRepository;

	// Get
	@GetMapping
	public ResponseEntity<List<ContactUs>> findAll() {
		List<ContactUs> contactUs = contactUsRepository.findAll();

		return ResponseEntity.ok().body(contactUs);
	}

	// GET por id
	@GetMapping(value = "/{id}")
	public ResponseEntity<ContactUs> findById(@PathVariable Integer id) {

		ContactUs contactUs = contactUsRepository.findById(id).get();

		return ResponseEntity.ok().body(contactUs);
	}

	// CREATE
	@PostMapping
	public ContactUs create(@RequestBody ContactUs id) {

		return contactUsRepository.save(id);
	}

	// UPDATE
	@PutMapping("{id}")
	public ResponseEntity<ContactUs> update(@PathVariable Integer id, @RequestBody ContactUs contactUsDetails) {
		ContactUs updateContactUs = contactUsRepository.findById(id).get();

		updateContactUs.setEmail(contactUsDetails.getEmail());
		updateContactUs.setNewMessage(contactUsDetails.getNewMessage());

		contactUsRepository.save(updateContactUs);

		return ResponseEntity.ok(updateContactUs);
	}

	// DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Integer id) {

		ContactUs contactUs = contactUsRepository.findById(id).get();

		contactUsRepository.delete(contactUs);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);

	}
}
