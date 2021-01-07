package com.assurance.mae.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name = "damage")
public class Damage {
	
	@Id 
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="damageSeq") 
    @SequenceGenerator(name="damageSeq",sequenceName="DAMAGE_ID",allocationSize =1) 
	@Column(name="damage_id")
	private long damageId;
	
	
	private String probleme;
	
	@ManyToOne
	@JoinColumn(name="id",nullable=true, updatable=true)
	@JsonBackReference
	private Reclamation reclamation;


	public Damage() {
		super();
	}


	public long getDamageId() {
		return damageId;
	}


	public void setDamageId(long damageId) {
		this.damageId = damageId;
	}


	public String getProbleme() {
		return probleme;
	}


	public void setProbleme(String probleme) {
		this.probleme = probleme;
	}


	public Reclamation getReclamation() {
		return reclamation;
	}


	public void setReclamation(Reclamation reclamation) {
		this.reclamation = reclamation;
	}
	
	
	
	

}
