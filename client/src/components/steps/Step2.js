import React from "react";

function Step2() {
  return (
    <form className="form-signin mt-4">
      <div className="row">
        <div className="col-6">
          <label className="text-dark text-light">Véhicule assuré par :</label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Nom & Prénom"
            required
            autofocus
          />
          <label className="text-dark text-light">
            Nom & Prénom conducteur
          </label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Nom & Prénom"
            required
            autofocus
          />
          <label className="text-dark text-light">Délivré le:</label>
          <input
            type="date"
            className="form-control mb-4"
            required
          />
          <label className="text-dark text-light">Numéro d'immatriculation</label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Numéro"
            required
          />
        </div>

        <div className="col-6">
          <label className="text-dark text-light">Numéro de contrat</label>
          <input
            type="date"
            className="form-control mb-4"
            placeholder="Le numéro de contrat"
            required
            autofocus
          />
          <label className="text-dark text-light">
            Numéro permis de conduire
          </label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Le numéro de permis"
            required
            autofocus
          />

          <label className="text-dark text-light">Marque véhicule</label>
          <select className="form-control mb-4">
            <option value="" disabled selected>
              Marque véhicule
            </option>
            <option>FIAT</option>
            <option>BMW</option>
            <option>DACIA</option>
            <option>FORD</option>
            <option>HONDA</option>
            <option>KIA</option>
            <option>MAZDA</option>
            <option>PEUGEOT</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default Step2;
