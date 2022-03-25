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
//@Table(name="ContactUs")
public class ContactUs implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ContactID;
	private String Email;
	private String NewMessage;
	
	@JsonIgnore
	@OneToMany(mappedBy = "contactUs")
	private List<PlanTrip> plans = new ArrayList<PlanTrip>();

	public ContactUs() {
		super();
	}

	public ContactUs(int contactID, String email, String newMessage) {
		super();
		this.ContactID = contactID;
		this.Email = email;
		this.NewMessage = newMessage;
	}

	public int getContactID() {
		return ContactID;
	}

	public void setContactID(int contactID) {
		ContactID = contactID;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getNewMessage() {
		return NewMessage;
	}

	public void setNewMessage(String newMessage) {
		NewMessage = newMessage;
	}

	public List<PlanTrip> getPlans() {
		return plans;
	}

	@Override
	public int hashCode() {
		return Objects.hash(ContactID);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ContactUs other = (ContactUs) obj;
		return Objects.equals(ContactID, other.ContactID);
	}	
}
