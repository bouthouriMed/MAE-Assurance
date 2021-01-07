package com.assurance.mae.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assurance.mae.entities.Reclamation;
import com.assurance.mae.repositories.ReclamationRepository;

@Service
public class ReclamationService {

	@Autowired
	ReclamationRepository reclamationRepository;
	
	public Reclamation getReclamationByRef(String ref) {
		return reclamationRepository.findByIdRef(ref);
	}
	
	public List<Reclamation> getAll(){
		return reclamationRepository.findAll();
	}
	
	public List<Reclamation> getMyAll(Long id){
		return reclamationRepository.getMyReclamation(id);
	}
	
	public Reclamation saveReclamation(Reclamation reclamation) {
		return reclamationRepository.save(reclamation);
	}
	
	public void deleteReclamation(Long id) {
		reclamationRepository.deleteReclamations(id);
	}
}
