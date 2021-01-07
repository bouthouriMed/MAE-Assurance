import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReclamationById } from "../../redux/actions/reclamationActions";
import { UPDATE_RECLAMATION } from "../../redux/actions/types";

function Step4() {
  const [formData, setFormData] = useState({
    isDamagedR: null,
    isDamagedP: null,
  });

  const { isDamagedP, isDamagedR } = formData;

  const [damages, setDamages] = useState([]);

  const handleChange = (e, val) => {
    let list = damages.filter((damage) => damage.probleme === val);
    if (list.length > 0) {
      let listOx = damages.filter((damage) => damage.probleme != val);
      setDamages(listOx);
    } else if (val === true || val === false) {
      setFormData({
        ...formData,
        [e.target.name]: val,
      });
    } else {
      setDamages([...damages, { probleme: val }]);
    }
  };

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const reclamation = useSelector(
    (state) => state.reclamationReducer.reclamation
  );

  useEffect(() => {
    if (user.role == "Agent" && reclamation.status == "EN_ATTENTE") {
      dispatch({
        type: UPDATE_RECLAMATION,
        payload: { isDamagedP, isDamagedR, damages },
      });
    }
  }, [user.role == "Agent" && formData, damages]);

  return (
    <form
      className="form-signin mt-4"
      style={{ border: "dotted black 1px", padding: "25px" }}
    >
      <div className="row">
        <div className="col-12">
          <p className="text-black">Confirmation bien endommagé(s)</p>
          <div className="mb-4">
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline1"
                name="probleme"
                onClick={(e, val) => handleChange(e, "Capot")}
                class="custom-control-input"
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline1"
              >
                Capot
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline2"
                name="probleme"
                onClick={(e, val) => handleChange(e, "Para choque avant")}
                class="custom-control-input"
                disabled={reclamation.status !== "EN_ATTENTE"}
                
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline2"
              >
                Para choque avant
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline3"
                name="probleme"
                onClick={(e, val) => handleChange(e, "Porte avant gauche")}
                class="custom-control-input"
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline3"
              >
                Porte avant gauche
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline4"
                name="probleme"
                onClick={(e, val) => handleChange(e, "Porte arrière gauche")}
                class="custom-control-input"
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline4"
              >
                Porte arrière gauche
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline5"
                name="probleme"
                onClick={(e, val) => handleChange(e, "Porte avant droite")}
                class="custom-control-input"
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline5"
              >
                Porte avant droite
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline6"
                name="probleme"
                onClick={(e, val) => handleChange(e, "Porte arrière droite")}
                class="custom-control-input"
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline6"
              >
                Porte arrière droite
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline7"
                name="probleme"
                onClick={(e, val) => handleChange(e, "Far")}
                class="custom-control-input"
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline7"
              >
                Far
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline8"
                name="customRadioInline1"
                onClick={(e, val) => handleChange(e, "Toit")}
                class="custom-control-input"
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline8"
              >
                Toit
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline9"
                name="customRadioInline1"
                onClick={(e, val) => handleChange(e, "Rétroviseur")}
                class="custom-control-input"
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline9"
              >
                Rétroviseur
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline10"
                name="customRadioInline1"
                onClick={(e, val) => handleChange(e, "Aile avant droit")}
                class="custom-control-input"
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline10"
              >
                Aile avant droit
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline11"
                name="customRadioInline1"
                onClick={(e, val) => handleChange(e, "Aile avant gauche")}
                class="custom-control-input"
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline11"
              >
                Aile avant gauche
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline12"
                name="customRadioInline1"
                class="custom-control-input"
                onClick={(e, val) => handleChange(e, "Vitres")}
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline12"
              >
                Vitres
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline13"
                name="customRadioInline1"
                class="custom-control-input"
                onClick={(e, val) => handleChange(e, "Pare brise avant")}
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline13"
              >
                Pare brise avant
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline14"
                name="customRadioInline1"
                onClick={(e, val) => handleChange(e, "Aile arrière droit")}
                class="custom-control-input"
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline14"
              >
                Aile arrière droit
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline15"
                name="customRadioInline1"
                onClick={(e, val) => handleChange(e, "Feu de stop droit")}
                class="custom-control-input"
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline15"
              >
                Feu de stop droit
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline16"
                name="customRadioInline1"
                onClick={(e, val) => handleChange(e, "Feu de stop gauche")}
                class="custom-control-input"
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline16"
              >
                Feu de stop gauche
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline17"
                name="customRadioInline1"
                onClick={(e, val) => handleChange(e, "Para choque arrière")}
                class="custom-control-input"
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline17"
              >
                Para choque arrière
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
              <input
                type="checkbox"
                id="customRadioInline18"
                name="customRadioInline1"
                onClick={(e, val) => handleChange(e, "Pneus")}
                class="custom-control-input"
                disabled={reclamation.status !== "EN_ATTENTE"}
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline18"
              >
                Pneus
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p className="text-black">Dommage(s) rembourssaable(s) ?</p>
          <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
            <input
              type="radio"
              id="customRadioInline111"
              name="isDamagedR"
              class="custom-control-input"
              onClick={(e, val) => handleChange(e, true)}
              disabled={reclamation.status !== "EN_ATTENTE"}
            />
            <label
              class="custom-control-label text-secondary"
              for="customRadioInline111"
            >
              Oui
            </label>
          </div>
          <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
            <input
              type="radio"
              id="customRadioInline22"
              name="isDamagedR"
              class="custom-control-input"
              onClick={(e, val) => handleChange(e, false)}
              disabled={reclamation.status !== "EN_ATTENTE"}
            />
            <label
              class="custom-control-label text-secondary"
              for="customRadioInline22"
            >
              Non
            </label>
          </div>
        </div>
        <div className="col-6">
          <p className="text-black">Plafond remboursement atteint ?</p>
          <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
            <input
              type="radio"
              id="customRadioInline33"
              name="isDamagedP"
              class="custom-control-input"
              onClick={(e, val) => handleChange(e, true)}
              disabled={reclamation.status !== "EN_ATTENTE"}
            />
            <label
              class="custom-control-label text-secondary"
              for="customRadioInline33"
            >
              Oui
            </label>
          </div>
          <div class="custom-control custom-radio custom-control-inline mb-4 mr-4">
            <input
              type="radio"
              id="customRadioInline44"
              name="isDamagedP"
              class="custom-control-input"
              onClick={(e, val) => handleChange(e, false)}
              disabled={reclamation.status !== "EN_ATTENTE"}
            />
            <label
              class="custom-control-label text-secondary"
              for="customRadioInline44"
            >
              Non
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Step4;
