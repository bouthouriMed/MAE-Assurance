import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_RECLAMATION, UPDATE_RECLAMATION } from "../../redux/actions/types";

function Step2() {
  const [formData, setFormData] = useState({
    secondCarOwner: "",
    secondDriverName: "",
    permitLicence2: "",
    Date: "",
    carModel: "",
    serialNumber: "",
    contractNumber: "",
    meetingDate: "",
  });

  const {
    secondCarOwner,
    secondDriverName,
    permitLicence2,
    date,
    carModel,
    serialNumber,
    contractNumber,
    meetingDate,
  } = formData;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const reclamation = useSelector(
    (state) => state.reclamationReducer.reclamation
  );

  useEffect(() => {
    dispatch({
      type: UPDATE_RECLAMATION,
      payload: {
        secondCarOwner,
        secondDriverName,
        permitLicence2,
        date,
        carModel,
        serialNumber,
        contractNumber,
      },
    });
  }, [user.role == "Adhérant" && formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  return (
    <form className="form-signin mt-4">
      <div className="row">
        <div className="col-6">
          <label className="text-dark text-light">Véhicule assuré par :</label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Nom & Prénom"
            name="secondCarOwner"
            onChange={handleChange}
            value={secondCarOwner}
            required
            autofocus
            disabled={user.role == "Agent" ? true : false}
          />
          <label className="text-dark text-light">
            Nom & Prénom conducteur
          </label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Nom & Prénom"
            name="secondDriverName"
            onChange={handleChange}
            value={secondDriverName}
            required
            autofocus
            disabled={user.role == "Agent" ? true : false}
          />
          <label className="text-dark text-light">Délivré le:</label>
          <input
            type="date"
            className="form-control mb-4"
            name="date"
            onChange={handleChange}
            value={date}
            required
            disabled={user.role == "Agent" ? true : false}
          />
          <label className="text-dark text-light">
            Numéro d'immatriculation
          </label>
          <input
            type="text"
            className="form-control mb-4"
            name="serialNumber"
            onChange={handleChange}
            value={serialNumber}
            placeholder="Numéro"
            required
            disabled={user.role == "Agent" ? true : false}
          />
        </div>

        <div className="col-6">
          <label className="text-dark text-light">Numéro de contrat</label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Le numéro de contrat"
            name="contractNumber"
            onChange={handleChange}
            value={contractNumber}
            required
            autofocus
            disabled={user.role == "Agent" ? true : false}
          />
          <label className="text-dark text-light">
            Numéro permis de conduire
          </label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Le numéro de permis"
            name="permitLicence2"
            onChange={handleChange}
            value={permitLicence2}
            required
            autofocus
            disabled={user.role == "Agent" ? true : false}
          />

          <label className="text-dark text-light">Marque véhicule</label>
          <select
            className="form-control mb-4"
            name="carModel"
            onChange={handleChange}
            value={carModel}
            disabled={user.role == "Agent" ? true : false}
          >
            <option value="" disabled selected>
              Marque véhicule
            </option>
            <option value="Fiat">FIAT</option>
            <option value="BMW">BMW</option>
            <option value="Dacia">DACIA</option>
            <option value="Ford">FORD</option>
            <option value="Honda">HONDA</option>
            <option value="Kia">KIA</option>
            <option value="Mazda">MAZDA</option>
            <option value="Peageot">PEUGEOT</option>
          </select>

          {user.role === "Adhérant" && (
            <Fragment>
              <label className="text-dark text-light">
                Prise de Rendez vous{" "}
                <small>
                  (Champ valable seulement aprés la confiramtion du réclamation)
                </small>
              </label>
              <input
                type="date"
                className="form-control mb-4"
                placeholder="Rendez vouz aprés confirmation"
                name="meetingDate"
                onChange={handleChange}
                value={meetingDate}
                required
                autofocus
                disabled={reclamation.status !== "IN_PROGRESS"}
              />
            </Fragment>
          )}
        </div>
      </div>
    </form>
  );
}

export default Step2;
