import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { UPDATE_RECLAMATION } from "../../redux/actions/types";

function Step6() {
  const [formData, setFormData] = useState({
    postPhoto: "",
    piece: "",
    billValue: "",
    moneyAmount: "",
  });

  const { postPhoto, piece, billValue, moneyAmount } = formData;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const reclamation = useSelector(
    (state) => state.reclamationReducer.reclamation
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user.role == "Agent" && reclamation.status == "PRE_EXPERTISE" ) {
      dispatch({
        type: UPDATE_RECLAMATION,
        payload: {postPhoto, piece, billValue, moneyAmount},
      });
    }
  }, [user.role == "Agent" && formData]);

  return (
    <form className="form-signin mt-4">
      <div className="row">
        <div className="col-12">
          <label className="text-dark text-light">
            Photos post préparation
          </label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Nom & Prénom"
            name="postPhoto"
            onChange={handleChange}
            value={postPhoto}
            required
            autofocus
          />
          <label className="text-dark text-light">Piéce(s) détaché(s)</label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Piéce(s) détaché(s)"
            name="piece"
            onChange={handleChange}
            value={piece}
            required
            autofocus
          />
          <label className="text-dark text-light">
            Valeur des factures (aprés réparation)
          </label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Valeur des factures (aprés réparation)"
            name="billValue"
            onChange={handleChange}
            value={billValue}
            required
            autofocus
          />
          <label className="text-dark text-light">Montant remboursable</label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Montant remboursable"
            name="moneyAmount"
            onChange={handleChange}
            value={moneyAmount}
            required
            autofocus
          />
        </div>
      </div>
    </form>
  );
}

export default Step6;
