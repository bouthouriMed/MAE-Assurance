package com.assurance.mae.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.assurance.mae.entities.AppUser;
import com.assurance.mae.requests.BlockRequest;
import com.assurance.mae.response.UserResponse;
import com.assurance.mae.services.AppUserService;
import com.assurance.mae.services.TokenService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/api/user")
public class AppUserController {

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
		return bCryptPasswordEncoder;
	}

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	AppUserService appUserService;
	
	@Autowired
	TokenService tokenService;

	@RequestMapping(method = RequestMethod.POST, value = "/signUp")
	public UserResponse signUp(@RequestBody AppUser user) {

		try {
			AppUser appUser = new AppUser();
			appUser.setEmail(user.getEmail());
			appUser.setFirstName(user.getFirstName());
			appUser.setLastName(user.getLastName());
			appUser.setMartialStatus(user.getMartialStatus());
			appUser.setPassword(encoder.encode(user.getPassword()));
			appUser.setProfession(user.getProfession());
			appUser.setRole(user.getRole());
			appUser.setSex(user.getSex());
			appUser.setUserName(user.getUserName());
			appUser.setIsBlock(false);
			AppUser userRes = appUserService.saveUser(appUser);
			String token = tokenService.createToken(userRes.getUserId());
			UserResponse response = new UserResponse();
			response.setMessage("success");
			response.setToken(token);
			response.setAppUser(appUser);
			return response;
		} catch (Exception e) {
			// TODO: handle exception
			UserResponse response = new UserResponse();
			response.setMessage("failed");
			return response;
		}

		
		

	}
	
	
	@RequestMapping(method = RequestMethod.POST, value = "/signIn")
	public UserResponse signIn(@RequestBody AppUser user) {
		try {
			
			UserResponse response = new UserResponse();
			
			AppUser appUserExist = appUserService.getUserByUserName(user.getUserName());
			if (appUserExist != null) {
				boolean isPasswordMatched =encoder.matches(user.getPassword(),appUserExist.getPassword());
				if (isPasswordMatched) {
					String token = tokenService.createToken(appUserExist.getUserId());
					response.setToken(token);
					response.setMessage("success");
					response.setAppUser(appUserExist);
					return response;
				}
				
			}

			response.setMessage("failed credientiel");
			return response;
			
		} catch (Exception e) {
			// TODO: handle exception
			UserResponse response = new UserResponse();
			response.setMessage("failed");
			return response;
		}

		
		

	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/verifyToken")
	public UserResponse verifyToken(HttpServletRequest req) {
		
		
		UserResponse response = new UserResponse();
		try {
			
			String token = req.getHeader("x-auth-token");
			if (token !=null || token !="") {
				String userId = tokenService.getUserIdByToken(token);
				if (userId != null) {
					System.out.println("userId"+userId);
					AppUser userZx = appUserService.getUserById(Long.parseLong(userId));
					if (userZx != null) {
						response.setMessage("success");
						response.setAppUser(userZx);
						return response;
					}
					response.setMessage("token expired");
					return response;
					
				}
			}
			response.setMessage("failed");
			return response;
			
		} catch (Exception e) {
			// TODO: handle exception
			response.setMessage("failed");
			return response;
		}
		
		
		
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/getAllUsers")
	public List<AppUser> getAllUsers() {
		try {
			return appUserService.getAll();
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}
	
	
	@RequestMapping(method = RequestMethod.POST, value = "/BlockUser")
	public List<AppUser> BlockUser(@RequestBody BlockRequest blockRequest) {
		try {
			AppUser appUser = appUserService.getUserById(blockRequest.getId());
			if (appUser != null) {
				appUser.setIsBlock(blockRequest.getIsBlock());
				appUserService.saveUser(appUser);
				return appUserService.getAll();
			}
			return null;
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}

}
