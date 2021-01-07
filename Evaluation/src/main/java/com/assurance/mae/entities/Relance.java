package com.assurance.mae.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "relance")
public class Relance {
	
	@Id 
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="relanceSeq") 
    @SequenceGenerator(name="relanceSeq",sequenceName="RELANCE_ID",allocationSize =1) 
	@Column(name="relance_id")
	private long relanceId;
	
	
	private String code;


	public long getRelanceId() {
		return relanceId;
	}


	public void setRelanceId(long relanceId) {
		this.relanceId = relanceId;
	}


	public String getCode() {
		return code;
	}


	public void setCode(String code) {
		this.code = code;
	}
	
	
	

}
