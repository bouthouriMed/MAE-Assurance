package com.assurance.mae.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assurance.mae.entities.Relance;
import com.assurance.mae.repositories.RelanceRepository;

@Service
public class RelanceService {
	
	@Autowired
	RelanceRepository relanceRepo;
	
	
	public void addRelance (Relance relance) {
		
		relanceRepo.save(relance);
		
	}
	
	public Relance getRelance(String code) {
		return relanceRepo.findByCode(code);
	}

}
