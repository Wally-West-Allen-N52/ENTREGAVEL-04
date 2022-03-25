package com.agency.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agency.entities.RentRV;

@Repository
public interface RentRVRepository  extends JpaRepository<RentRV, Integer> {

}
