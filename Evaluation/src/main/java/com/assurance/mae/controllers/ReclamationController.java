package com.assurance.mae.controllers;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.assurance.mae.entities.AppUser;
import com.assurance.mae.entities.Damage;
import com.assurance.mae.entities.Reclamation;
import com.assurance.mae.entities.Relance;
import com.assurance.mae.requests.TakeMeetingRequest;
import com.assurance.mae.services.AppUserService;
import com.assurance.mae.services.DamageService;
import com.assurance.mae.services.ReclamationService;
import com.assurance.mae.services.RelanceService;
import com.assurance.mae.services.TokenService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/api/reclamation")
public class ReclamationController {
	@Autowired
	RelanceService relanceService;
	@Autowired
	ReclamationService reclamationService;
	@Autowired
	TokenService tokenService;

	@Autowired
	AppUserService appUserService;

	@Autowired
	DamageService damageService;

	@RequestMapping(method = RequestMethod.GET, value = "/getRefernce")
	public String getRefernce() {

		Date date = new Date();
		DateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyyy HH:MM:SS");
		String dateSys = dateFormat.format(date);
		String ref = "ref_" + dateSys.replace("-", "").replace(" ", "_").replace(":", "") + "_mae";
		Relance relance = relanceService.getRelance(ref);
		while (relance != null) {
			ref = "ref_" + dateSys.replace("-", "").replace(" ", "_").replace(":", "") + "_mae";
			relance = relanceService.getRelance(ref);

		}
		Relance relanceAux = new Relance();
		relanceAux.setCode(ref);
		relanceService.addRelance(relanceAux);
		return ref;
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getReclamation/{ref}")
	public Reclamation getReclamation(@PathVariable("ref") String ref, HttpServletResponse response) {
		Reclamation reclamation = reclamationService.getReclamationByRef(ref);
		if (reclamation != null) {
			response.setStatus(HttpServletResponse.SC_OK);
			return reclamation;

		} else {
			response.setStatus(HttpServletResponse.SC_NOT_FOUND);
			return null;
		}
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getReclamations")
	public List<Reclamation> getReclamations(HttpServletResponse response) {
		try {
			response.setStatus(HttpServletResponse.SC_OK);
			return reclamationService.getAll();
		} catch (Exception e) {
			// TODO: handle exception
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return null;
		}

	}

	@RequestMapping(method = RequestMethod.GET, value = "/getMyReclamations")
	public List<Reclamation> getMyReclamations(HttpServletRequest req, HttpServletResponse response) {

		List<Reclamation> list = new ArrayList<Reclamation>();
		try {
			String token = req.getHeader("x-auth-token");
			if (token != null && token != "") {
				String id = tokenService.getUserIdByToken(token);
				if (id != null && id != "") {
					list = reclamationService.getMyAll(Long.valueOf(id));
				}
			}
			response.setStatus(HttpServletResponse.SC_OK);
			return list;
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return null;
		}

	}

	@RequestMapping(method = RequestMethod.POST, value = "/takeMeeting")
	public Reclamation takeMeeting(@RequestBody TakeMeetingRequest request, HttpServletResponse response) {
		Reclamation reclamation = reclamationService.getReclamationByRef(request.getRef());
		if (reclamation != null) {
			reclamation.setMeetingDate(request.getDate());
			reclamation.setMeet(true);
			Reclamation rec = reclamationService.saveReclamation(reclamation);
			response.setStatus(HttpServletResponse.SC_OK);
			return rec;
		}
		response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
		return null;
	}

	@RequestMapping(method = RequestMethod.POST, value = "/saveStepOne")
	public Reclamation saveStepOne(HttpServletRequest req, @RequestBody Reclamation reclamation,
			HttpServletResponse response) {
		Reclamation reclamationFinal = new Reclamation();
		try {
			String token = req.getHeader("x-auth-token");
			String userId = tokenService.getUserIdByToken(token);
			AppUser userZx = appUserService.getUserById(Long.parseLong(userId));
			if (userZx == null) {
				response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
				return null;
			} else {
				reclamationFinal.setAppUser(userZx);
				reclamationFinal.setRef(getRefernce());
				reclamationFinal.setType(reclamation.getType());
				reclamationFinal.setPlace(reclamation.getPlace());
				reclamationFinal.setAccidentDate(reclamation.getAccidentDate());
				reclamationFinal.setIsDamaged(reclamation.getIsDamaged());
				reclamationFinal.setConditions(reclamation.getConditions());
				reclamationFinal.setWitnesses(reclamation.getWitnesses());
				reclamationFinal.setDriverName(reclamation.getDriverName());
				reclamationFinal.setPermitLicence1(reclamation.getPermitLicence1());
				reclamationFinal.setSecondCarOwner(reclamation.getSecondCarOwner());
				reclamationFinal.setSecondDriverName(reclamation.getSecondDriverName());
				reclamationFinal.setPermitLicence2(reclamation.getPermitLicence2());
				reclamationFinal.setDate(reclamation.getDate());
				reclamationFinal.setCarModel(reclamation.getCarModel());
				reclamationFinal.setSerialNumber(reclamation.getSerialNumber());
				reclamationFinal.setMeetingDate(reclamation.getMeetingDate());
				reclamationFinal.setStatus("EN_ATTENTE");
				Reclamation res = reclamationService.saveReclamation(reclamationFinal);
				response.setStatus(HttpServletResponse.SC_OK);
				return res;
			}

		} catch (Exception e) {
			// TODO: handle exception
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return null;
		}

	}

	@RequestMapping(method = RequestMethod.POST, value = "/saveStepTwo")
	public Reclamation saveStepTwo(HttpServletRequest req, @RequestBody Reclamation reclamation,
			HttpServletResponse response) {
		try {

			if (reclamation.getIsDamagedP() == null && reclamation.getIsDamagedR() == null) {
				response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
				return null;
			}

			Reclamation reclamationFinal = reclamationService.getReclamationByRef(reclamation.getRef());
			if (reclamation.getIsDamagedR() == false) {
				reclamationFinal.setIsDamagedP(reclamation.getIsDamagedP());
				reclamationFinal.setIsDamagedR(reclamation.getIsDamagedR());
				reclamationFinal.setStatus("REFUSED");
				Reclamation recRes = reclamationService.saveReclamation(reclamationFinal);
				response.setStatus(HttpServletResponse.SC_OK);
				return recRes;
			}
			if (reclamationFinal != null) {

				Damage damage = new Damage();
				for (Damage dam : reclamation.getDamages()) {

					damage.setProbleme(dam.getProbleme());
					damage.setReclamation(reclamationFinal);
					damageService.saveDamage(damage);
					damage = new Damage();

				}

				reclamationFinal.setIsDamagedP(reclamation.getIsDamagedP());
				reclamationFinal.setIsDamagedR(reclamation.getIsDamagedR());
				reclamationFinal.setStatus("IN_PROGRESS");
				Reclamation rec = reclamationService.saveReclamation(reclamationFinal);
				response.setStatus(HttpServletResponse.SC_OK);
				return rec;
			}
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return null;

		} catch (Exception e) {
			// TODO: handle exception
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return null;
		}

	}

	@RequestMapping(method = RequestMethod.POST, value = "/saveStepThree")
	public Reclamation saveStepThree(HttpServletRequest req, @RequestBody Reclamation reclamation,
			HttpServletResponse response) {

		try {
			Reclamation reclamationFinal = reclamationService.getReclamationByRef(reclamation.getRef());
			reclamationFinal.setPrePhoto(reclamation.getPrePhoto());
			reclamationFinal.setDamageValue(reclamation.getDamageValue());
			reclamationFinal.setDevis1(reclamation.getDevis1());
			reclamationFinal.setDevis2(reclamation.getDevis2());
			reclamationFinal.setBlane(reclamation.getBlane());
			reclamationFinal.setStatus("PRE_EXPERTISE");
			Reclamation rec = reclamationService.saveReclamation(reclamationFinal);
			response.setStatus(HttpServletResponse.SC_OK);
			return rec;
		} catch (Exception e) {
			// TODO: handle exception
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return null;
		}

	}

	@RequestMapping(method = RequestMethod.POST, value = "/saveStepFour")
	public Reclamation saveStepFour(HttpServletRequest req, @RequestBody Reclamation reclamation,
			HttpServletResponse response) {

		try {
			Reclamation reclamationFinal = reclamationService.getReclamationByRef(reclamation.getRef());
			reclamationFinal.setPostPhoto(reclamation.getPostPhoto());
			reclamationFinal.setPiece(reclamation.getPiece());
			reclamationFinal.setBillValue(reclamation.getBillValue());
			reclamationFinal.setMoneyAmount(reclamation.getMoneyAmount());
			reclamationFinal.setStatus("POST_EXPERTISE");
			Reclamation rec = reclamationService.saveReclamation(reclamationFinal);
			response.setStatus(HttpServletResponse.SC_OK);
			return rec;
		} catch (Exception e) {
			// TODO: handle exception
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return null;
		}

	}

	@RequestMapping(method = RequestMethod.POST, value = "/saveFinalStep")
	public Reclamation saveFinalStep(HttpServletRequest req, @RequestBody Reclamation reclamation,
			HttpServletResponse response) {

		try {
			Reclamation reclamationFinal = reclamationService.getReclamationByRef(reclamation.getRef());
			reclamationFinal.setStatus("TERMINER");
			Reclamation rec = reclamationService.saveReclamation(reclamationFinal);
			response.setStatus(HttpServletResponse.SC_OK);
			return rec;
		} catch (Exception e) {
			// TODO: handle exception
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return null;
		}

	}

	@RequestMapping(method = RequestMethod.GET, value = "/deleteReclamation/{id}")
	public List<Reclamation> deleteReclamation(HttpServletRequest req, @PathVariable("id") String id,
			HttpServletResponse response) {
		try {
			String token = req.getHeader("x-auth-token");
			String userId = tokenService.getUserIdByToken(token);
			AppUser userZx = appUserService.getUserById(Long.parseLong(userId));
			if (userZx == null) {
				response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
				return null;
			} else {
				damageService.deleteDamages(Long.valueOf(id));
				reclamationService.deleteReclamation(Long.valueOf(id));
				response.setStatus(HttpServletResponse.SC_OK);
				if (userZx.getRole().equals("Adhérant")) {
					return reclamationService.getMyAll(Long.valueOf(userId));
				} else {
					return reclamationService.getAll();
				}
			}

		} catch (Exception e) {
			// TODO: handle exception
			response.setStatus(HttpServletResponse.SC_NOT_FOUND);
			return null;
		}

	}

}
