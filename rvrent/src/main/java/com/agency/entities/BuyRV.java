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
//@Table(name="BuyRV")
public class BuyRV implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int BuyID;
	private String Category;
	private String Model;
	
	@JsonIgnore
	@OneToMany(mappedBy = "buyRV")
	private List<PlanTrip> plans = new ArrayList<PlanTrip>();
	
	public BuyRV() {
		super();
	}

	public BuyRV(int buyID, String category, String model) {
		super();
		this.BuyID = buyID;
		this.Category = category;
		this.Model = model;
	}

	public int getBuyID() {
		return BuyID;
	}

	public void setBuyID(int buyID) {
		BuyID = buyID;
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
		return Objects.hash(BuyID);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BuyRV other = (BuyRV) obj;
		return Objects.equals(BuyID, other.BuyID);
	}
	
	
}
