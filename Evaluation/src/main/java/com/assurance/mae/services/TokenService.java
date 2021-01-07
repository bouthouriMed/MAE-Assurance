package com.assurance.mae.services;

import java.io.UnsupportedEncodingException;

import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;

@Service
public class TokenService {
	
	public static final String TOKEN_SECRET="assurancemae";

	public String createToken(Long id) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(TOKEN_SECRET);
			String token = JWT.create()
					.withClaim("userId", id.toString())
					.sign(algorithm);
			return token;
		} catch (UnsupportedEncodingException e) {
			// TODO: handle exception
			e.printStackTrace();
		} catch (JWTCreationException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return null;
	}
	public String getUserIdByToken(String token) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(TOKEN_SECRET);
			JWTVerifier verifier = JWT.require(algorithm).build();
			DecodedJWT jwt = verifier.verify(token);
			return jwt.getClaim("userId").asString();
		} catch (UnsupportedEncodingException e) {
			// TODO: handle exception
			e.printStackTrace();
		} catch (JWTVerificationException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return null;
	}
}
