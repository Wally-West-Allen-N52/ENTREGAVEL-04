package com.agency.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agency.entities.PlanTrip;

@Repository
public interface PlanTripRepository extends JpaRepository<PlanTrip, Integer> {

}
