package com.agency.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agency.entities.ContactUs;

@Repository
public interface ContactUsRepository extends JpaRepository<ContactUs, Integer> {

}
