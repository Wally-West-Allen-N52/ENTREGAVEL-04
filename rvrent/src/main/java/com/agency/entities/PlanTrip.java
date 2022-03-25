package com.agency.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="PlanTrip")
public class PlanTrip implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int plan_tripID;
	private String beginning_from;
	private String arriving_at;
	
	@ManyToOne
	@JoinColumn(name = "fk_RentID") // 
	private RentRV rentRV;
	
	@ManyToOne
	@JoinColumn(name = "fk_BuyID")
	private BuyRV buyRV;
	
	@ManyToOne
	@JoinColumn(name = "fk_ContactID")
	private ContactUs contactUs;

	public PlanTrip() {
		super();
	}

	public int getPlan_tripID() {
		return plan_tripID;
	}

	public void setPlan_tripID(int plan_tripID) {
		this.plan_tripID = plan_tripID;
	}

	public String getBeginning_from() {
		return beginning_from;
	}

	public void setBeginning_from(String beginning_from) {
		this.beginning_from = beginning_from;
	}

	public String getArriving_at() {
		return arriving_at;
	}

	public void setArriving_at(String arriving_at) {
		this.arriving_at = arriving_at;
	}

	public RentRV getRentRV() {
		return rentRV;
	}

	public void setRentRV(RentRV rentRV) {
		this.rentRV = rentRV;
	}

	public BuyRV getBuyRV() {
		return buyRV;
	}

	public void setBuyRV(BuyRV buyRV) {
		this.buyRV = buyRV;
	}

	public ContactUs getContactUs() {
		return contactUs;
	}

	public void setContactUs(ContactUs contactUs) {
		this.contactUs = contactUs;
	}

	@Override
	public int hashCode() {
		return Objects.hash(plan_tripID);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PlanTrip other = (PlanTrip) obj;
		return plan_tripID == other.plan_tripID;
	}

	
	
	
}
