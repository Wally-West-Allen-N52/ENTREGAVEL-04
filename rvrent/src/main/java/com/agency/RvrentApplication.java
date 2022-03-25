package com.agency;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.agency.repositories.BuyRVRepository;
import com.agency.repositories.ContactUsRepository;
import com.agency.repositories.PlanTripRepository;
import com.agency.repositories.RentRVRepository;


@SpringBootApplication
public class RvrentApplication implements CommandLineRunner {
	
	
	@Autowired
	private PlanTripRepository planTripRepository;

	@Autowired
	private RentRVRepository rentRVRepository;

	@Autowired
	private BuyRVRepository buyRVRepository;

	@Autowired
	private ContactUsRepository contactUsRepository;

	public static void main(String[] args) {
		SpringApplication.run(RvrentApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {
		
	}
}
