import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addReclamation,
  confirmReclamation,
} from "../../redux/actions/reclamationActions";
import { ADD_RECLAMATION, UPDATE_RECLAMATION } from "../../redux/actions/types";

function Step1({ setData }) {
  const [formData, setFormData] = useState({
    ref: null,
    type: "",
    place: "",
    accidentDate: "",
    isDamaged: null,
    isInjuried: null,
    conditions: "",
    witnesses: null,
    driverName: "",
    permitLicence1: "",
  });

  const {
    place,
    accidentDate,
    isDamaged,
    conditions,
    witnesses,
    driverName,
    permitLicence1,
  } = formData;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const reclamation = useSelector(
    (state) => state.reclamationReducer.reclamation
  );

  useEffect(() => {
    if (user.role == "Adhérant") {
      dispatch({ type: ADD_RECLAMATION, payload: formData });
    }
  }, [user.role == "Adhérant" && formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="form-signin mt-4">
      <div className="row">
        <div className="col-12">
          <p className="text-secondary">Type de sinistre</p>
          <div className="mb-4">
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline1"
                name="type"
                value="colision"
                onChange={handleChange}
                class="custom-control-input"
                disabled={user.role == "Agent" ? true : false}
                required
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline1"
              >
                Colision
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline2"
                name="type"
                value="vol"
                onChange={handleChange}
                class="custom-control-input"
                disabled={user.role == "Agent" ? true : false}
                required
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline2"
              >
                Vol
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline3"
                name="type"
                value="incendie"
                onChange={handleChange}
                class="custom-control-input"
                disabled={user.role == "Agent" ? true : false}
                required
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline3"
              >
                Incendie
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline4"
                name="type"
                value="autres"
                onChange={handleChange}
                class="custom-control-input"
                disabled={user.role == "Agent" ? true : false}
                required
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline4"
              >
                Autres
              </label>
            </div>
          </div>
        </div>
        <div className="col-6">
          <label className="sr-only mb-4">Lieu</label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Lieu"
            name="place"
            onChange={handleChange}
            value={place}
            required
            disabled={user.role == "Agent" ? true : false}
            autofocus
          />
          <label className="sr-only mb-4">
            Dégat Materiel autre que véhicule A et B
          </label>
          <select
            className="form-control mb-4"
            name="isDamaged"
            onChange={handleChange}
            value={isDamaged}
            disabled={user.role == "Agent" ? true : false}
            required
          >
            <option value="" disabled selected>
              Dégat Materiel autre que véhicule A et B
            </option>
            <option value="true">Oui</option>
            <option value="false">Non</option>
          </select>
          <label className="sr-only mb-4">Temoin(s)</label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Témoin(s)"
            name="witnesses"
            onChange={handleChange}
            value={witnesses}
            disabled={user.role == "Agent" ? true : false}
            required
          />
          <label className="sr-only mb-4">Nom & Prénon Conducteur</label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Nom & Prénon Conducteur"
            name="driverName"
            onChange={handleChange}
            value={driverName}
            disabled={user.role == "Agent" ? true : false}
            required
          />
        </div>

        <div className="col-6">
          <label className="sr-only mb-4">Date</label>
          <input
            type="date"
            className="form-control mb-4"
            placeholder="Date"
            name="accidentDate"
            onChange={handleChange}
            value={accidentDate}
            disabled={user.role == "Agent" ? true : false}
            required
            autofocus
          />
          <label className="sr-only mb-4">Circanstances</label>
          <select
            className="form-control mb-4"
            name="conditions"
            onChange={handleChange}
            disabled={user.role == "Agent" ? true : false}
            value={conditions}
            required
          >
            <option value="" disabled selected>
              Circanstances
            </option>
            <option>En stationnement </option>
            <option>Vol </option>
            <option>Quittait un stationnement</option>
            <option>Prenait un stationnement </option>
            <option>
              Sortait d’un parking, d’un lieu privé, d’un chemin de terre{" "}
            </option>
            <option>
              S’engageait dans un parking, un lieu privé, un chemin de terre{" "}
            </option>
            <option>Arrêt de circulation </option>
            <option>Frottement sans changement de file </option>
            <option>
              Heurtait à l’arrière, en roulant dans le même sens et sur une même
              file
            </option>
            <option>
              Roulait dans le même sens et sur une file différente{" "}
            </option>
            <option>Changeait de file</option>
            <option>Doublait </option>
            <option>Virait à droite </option>
            <option>Virait à gauche </option>
            <option>Reculait empiétait sur la partie de chaussée</option>
            <option>Réservée à la circulation en sens inverse </option>
            <option>Venait de droite (dans un carrefour)</option>
            <option>N’avait pas observé le signal de priorité </option>
          </select>

          <label className="sr-only mb-4">Numéro permis de conduire</label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Numéro permis de conduire"
            name="permitLicence1"
            onChange={handleChange}
            value={permitLicence1}
            disabled={user.role == "Agent" ? true : false}
            required
          />

          <div className="mt-4 text-center">
            <label className="form-check-label text-secondary ">
              Blessés ?
            </label>{" "}
            <br />
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline11"
                name="isInjuried"
                onChange={handleChange}
                value="true"
                class="custom-control-input"
                disabled={user.role == "Agent" ? true : false}
                required
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline11"
              >
                Oui
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline22"
                name="isInjuried"
                onChange={handleChange}
                value="false"
                class="custom-control-input"
                disabled={user.role == "Agent" ? true : false}
                required
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline22"
              >
                Non
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Step1;
