package com.assurance.mae.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "reclamation")
public class Reclamation {
	
	@Id 
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="reclamationSeq") 
    @SequenceGenerator(name="reclamationSeq",sequenceName="ID",allocationSize =1) 
	@Column(name="id")
	private long id;
	
	//step 1 car 1
	private String ref;
	private String type;
	private String place;
	private String accidentDate;
	private Boolean  isDamaged;
	private String conditions;
	private String witnesses;
	private String driverName;
	private String permitLicence1;
	//step 1 car 2
	private String secondCarOwner;
	private String contractNumber;
	private String secondDriverName;
	private String permitLicence2;
	private String Date;
	private String carModel;
	private String serialNumber;
	private String status;
	//end step 1
	private Boolean isDamagedR;
	private Boolean isDamagedP;
	private String meetingDate;
	private Boolean meet;
	
	//step 3
	private String prePhoto;
	private String damageValue;
	private String devis1;
	private String devis2;
	private String blane;
	
	//step 4
	private String postPhoto;
	private String piece;
	private String billValue;
	private String moneyAmount;
	
	@OneToMany(mappedBy = "reclamation", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonManagedReference
	private Set<Damage> damages;
	
	@ManyToOne
	@JoinColumn(name="user_id",nullable=true, updatable=true)
	@JsonBackReference
	private AppUser appUser;
	
	

	public Reclamation() {
		super();
	}





	public long getId() {
		return id;
	}





	public void setId(long id) {
		this.id = id;
	}





	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}



	public Boolean getIsDamaged() {
		return isDamaged;
	}

	public void setIsDamaged(Boolean isDamaged) {
		this.isDamaged = isDamaged;
	}

	public String getConditions() {
		return conditions;
	}

	public void setConditions(String conditions) {
		this.conditions = conditions;
	}

	public String getWitnesses() {
		return witnesses;
	}

	public void setWitnesses(String witnesses) {
		this.witnesses = witnesses;
	}

	public String getDriverName() {
		return driverName;
	}

	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}

	public String getPermitLicence1() {
		return permitLicence1;
	}

	public void setPermitLicence1(String permitLicence1) {
		this.permitLicence1 = permitLicence1;
	}

	public String getSecondCarOwner() {
		return secondCarOwner;
	}

	public void setSecondCarOwner(String secondCarOwner) {
		this.secondCarOwner = secondCarOwner;
	}

	public String getContractNumber() {
		return contractNumber;
	}

	public void setContractNumber(String contractNumber) {
		this.contractNumber = contractNumber;
	}

	public String getSecondDriverName() {
		return secondDriverName;
	}

	public void setSecondDriverName(String secondDriverName) {
		this.secondDriverName = secondDriverName;
	}

	public String getPermitLicence2() {
		return permitLicence2;
	}

	public void setPermitLicence2(String permitLicence2) {
		this.permitLicence2 = permitLicence2;
	}

	public String getDate() {
		return Date;
	}

	public void setDate(String date) {
		Date = date;
	}

	public String getCarModel() {
		return carModel;
	}

	public void setCarModel(String carModel) {
		this.carModel = carModel;
	}

	public String getSerialNumber() {
		return serialNumber;
	}

	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Boolean getIsDamagedR() {
		return isDamagedR;
	}

	public void setIsDamagedR(Boolean isDamagedR) {
		this.isDamagedR = isDamagedR;
	}

	public Boolean getIsDamagedP() {
		return isDamagedP;
	}

	public void setIsDamagedP(Boolean isDamagedP) {
		this.isDamagedP = isDamagedP;
	}



	public String getRef() {
		return ref;
	}

	public void setRef(String ref) {
		this.ref = ref;
	}

	public String getAccidentDate() {
		return accidentDate;
	}

	public void setAccidentDate(String accidentDate) {
		this.accidentDate = accidentDate;
	}

	public String getMeetingDate() {
		return meetingDate;
	}

	public void setMeetingDate(String meetingDate) {
		this.meetingDate = meetingDate;
	}

	public String getBlane() {
		return blane;
	}

	public void setBlane(String blane) {
		this.blane = blane;
	}

	public Set<Damage> getDamages() {
		return damages;
	}

	public void setDamages(Set<Damage> damages) {
		this.damages = damages;
	}

	public AppUser getAppUser() {
		return appUser;
	}

	public void setAppUser(AppUser appUser) {
		this.appUser = appUser;
	}





	public String getPrePhoto() {
		return prePhoto;
	}





	public void setPrePhoto(String prePhoto) {
		this.prePhoto = prePhoto;
	}





	public String getDamageValue() {
		return damageValue;
	}





	public void setDamageValue(String damageValue) {
		this.damageValue = damageValue;
	}





	public String getDevis1() {
		return devis1;
	}





	public Boolean getMeet() {
		return meet;
	}





	public void setMeet(Boolean meet) {
		this.meet = meet;
	}





	public void setDevis1(String devis1) {
		this.devis1 = devis1;
	}





	public String getDevis2() {
		return devis2;
	}





	public void setDevis2(String devis2) {
		this.devis2 = devis2;
	}





	public String getPostPhoto() {
		return postPhoto;
	}





	public void setPostPhoto(String postPhoto) {
		this.postPhoto = postPhoto;
	}





	public String getPiece() {
		return piece;
	}





	public void setPiece(String piece) {
		this.piece = piece;
	}





	public String getBillValue() {
		return billValue;
	}





	public void setBillValue(String billValue) {
		this.billValue = billValue;
	}





	public String getMoneyAmount() {
		return moneyAmount;
	}





	public void setMoneyAmount(String moneyAmount) {
		this.moneyAmount = moneyAmount;
	}
	
	
	

}
