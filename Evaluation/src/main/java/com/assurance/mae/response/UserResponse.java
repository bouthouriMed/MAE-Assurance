package com.assurance.mae.response;

import com.assurance.mae.entities.AppUser;

public class UserResponse {
	
	private String message;
	private String token;
	private AppUser appUser;
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public AppUser getAppUser() {
		return appUser;
	}
	public void setAppUser(AppUser appUser) {
		this.appUser = appUser;
	}
	
	

}
