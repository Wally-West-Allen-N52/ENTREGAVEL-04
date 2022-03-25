package com.agency.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
//@Table(name="rentrv")
public class RentRV implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int RentID;
	private String Category;
	private String Model;
	
	@JsonIgnore
	@OneToMany(mappedBy = "rentRV")
	private List<PlanTrip> plans = new ArrayList<PlanTrip>();

	public RentRV() {
		super();
	}

	public int getRentID() {
		return RentID;
	}

	public void setRentID(int rentID) {
		RentID = rentID;
	}

	public String getCategory() {
		return Category;
	}

	public void setCategory(String category) {
		Category = category;
	}

	public String getModel() {
		return Model;
	}

	public void setModel(String model) {
		Model = model;
	}

	public List<PlanTrip> getPlans() {
		return plans;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(RentID);
	}
	
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		RentRV other = (RentRV) obj;
		return RentID == other.RentID;
	}
}
