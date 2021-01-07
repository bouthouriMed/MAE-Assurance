package com.assurance.mae.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assurance.mae.entities.AppUser;
import com.assurance.mae.repositories.AppUserRepository;

@Service
public class AppUserService {

	@Autowired
	AppUserRepository appUserRepository;
	
	public AppUser saveUser(AppUser user) {
		return appUserRepository.save(user);
	}
	
	public AppUser getUserById(Long id) {
		return appUserRepository.findByIdUser(id);
	}
	
	public AppUser getUserByUserName(String userName) {
		return appUserRepository.findByUserName(userName);
	}
	
	public List<AppUser> getAll(){
		return appUserRepository.findAll();
	}
}
