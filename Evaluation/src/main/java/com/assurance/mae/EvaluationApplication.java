package com.assurance.mae;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.assurance.mae.services.TokenService;





@ComponentScan("com.assurance.*")  
@SpringBootApplication

public class EvaluationApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(EvaluationApplication.class, args);
	}
	
@Autowired
TokenService tokenService;

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		String token = tokenService.createToken(1L);
		System.out.println("test : "+token);
		String res = tokenService.getUserIdByToken(token);
		System.out.println("test 1 : "+res);
		

	}

}
