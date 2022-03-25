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
import com.agency.entities.ContactUs;
import com.agency.entities.PlanTrip;
import com.agency.entities.RentRV;
import com.agency.repositories.BuyRVRepository;
import com.agency.repositories.ContactUsRepository;
import com.agency.repositories.PlanTripRepository;
import com.agency.repositories.RentRVRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/planTrip")
public class PlanTripController {

	@Autowired
	private PlanTripRepository planTripRepository;

	@Autowired
	private RentRVRepository rentRVRepository;

	@Autowired
	private BuyRVRepository buyRVRepository;

	@Autowired
	private ContactUsRepository contactUsRepository;

	@GetMapping
	public ResponseEntity<List<PlanTrip>> findAll() {

		List<PlanTrip> planTrips = planTripRepository.findAll();

		return ResponseEntity.ok().body(planTrips);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<PlanTrip> findById(@PathVariable Integer id) {

		PlanTrip planTrip = planTripRepository.findById(id).get();

		return ResponseEntity.ok().body(planTrip);
	}

	//=============================== CREATE ===============================================
	@PostMapping
	public PlanTrip createEmployee(@RequestBody PlanTrip id) {

		return planTripRepository.save(id);
	}

	//================================== UPDATE ==============================================
	@PutMapping("{id}")
	public ResponseEntity<PlanTrip> update(@PathVariable Integer id, @RequestBody PlanTrip planTripDetails) {
		PlanTrip updatePlanTrip = planTripRepository.findById(id).get();

		RentRV rentRV = rentRVRepository.findById(planTripDetails.getRentRV().getRentID()).get();
		BuyRV buyRV = buyRVRepository.findById(planTripDetails.getBuyRV().getBuyID()).get();
		ContactUs contactUs = contactUsRepository.findById(planTripDetails.getContactUs().getContactID()).get();

		updatePlanTrip.setBeginning_from(planTripDetails.getBeginning_from());
		updatePlanTrip.setArriving_at(planTripDetails.getArriving_at());
		updatePlanTrip.setRentRV(rentRV);
		updatePlanTrip.setBuyRV(buyRV);
		updatePlanTrip.setContactUs(contactUs);	

		planTripRepository.save(updatePlanTrip);

		return ResponseEntity.ok(updatePlanTrip);
	}

	//========================= DELETE ===================================
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Integer id) {

		PlanTrip planTrip = planTripRepository.findById(id).get();

		planTripRepository.delete(planTrip);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);

	}
}
