package com.assurance.mae.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assurance.mae.entities.Damage;
import com.assurance.mae.repositories.DamageRepository;

@Service
public class DamageService {

	@Autowired
	DamageRepository damageRepository;
	
	
	public void saveDamage(Damage damage) {
		damageRepository.save(damage);
	}
	
	public void deleteDamages(Long id) {
		damageRepository.deleteDamages(id);
	}
}
