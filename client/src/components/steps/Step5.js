import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_RECLAMATION } from "../../redux/actions/types";

function Step5() {
  const [formData, setFormData] = useState({
    prePhoto: "",
    damageValue: "",
    devis1: "",
    devis2: "",
    blane: "",
  });

  const [meeting, setMeeting] = useState("")

  const { prePhoto, damageValue, devis1, devis2, blane } = formData;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const reclamation = useSelector(
    (state) => state.reclamationReducer.reclamation
  );
  
  useEffect(() => {
    if (user.role == "Agent" && reclamation.status == "IN_PROGRESS" ) {
      dispatch({
        type: UPDATE_RECLAMATION,
        payload: {prePhoto, damageValue, devis1, devis2, blane},
      });
    }
  }, [user.role == "Agent" && formData]);

  useEffect(() => {
    setMeeting(reclamation.meetingDate)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="form-signin mt-4">
      <div className="row">
        <div className="col-12">
          <p>
            <strong>Meeting Date: </strong>{" "}
            <span>{reclamation.meetingDate}</span>
          </p>
        </div>
        <div className="col-6">
          {/* <div class="input-group-prepend">
              <span class="input-group-text">Upload</span>
            </div> */}
          <label className="text-dark text-light">Photos Pré préparation</label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Photos"
            required
            autofocus
            name="prePhoto"
            onChange={handleChange}
            value={prePhoto}
          />

          <label className="text-dark text-light">
            Détermination valeur du véhicule
          </label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Valeur"
            required
            autofocus
            name="damageValue"
            onChange={handleChange}
            value={damageValue}
          />
          <label className="text-dark text-light">
            Devis d'estimation des dégats
          </label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Piéce(s) détachée(s) adaptable(s)"
            required
            name="devis1"
            onChange={handleChange}
            value={devis1}
          />
        </div>

        <div className="col-6">
          <label className="text-dark text-light">
            Identification des responsabilités
          </label>
          <select
            className="form-control mb-4"
            name="blane"
            onChange={handleChange}
            value={blane}
          >
            <option value="" disabled selected>
              Client
            </option>
            <option value="Client">Client</option>
            <option value="Conducteur B">Conducteur B</option>
            <option value="Environement externe">Environement externe</option>
          </select>
          <label className="text-dark text-light">
            Devis d'estimation des dégats
          </label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Piéce(s) détachée(s) d'origine"
            required
            autofocus
            name="devis2"
            onChange={handleChange}
            value={devis2}
          />
        </div>
      </div>
    </form>
  );
}

export default Step5;
