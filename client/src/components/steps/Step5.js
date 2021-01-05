import React from "react";

function Step5() {
  return (
    <form className="form-signin mt-4">
      <div className="row">
        <div className="col-6">
          <div class="input-group mb-3">
            {/* <div class="input-group-prepend">
              <span class="input-group-text">Upload</span>
            </div> */}
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
              />
              <label class="custom-file-label" for="inputGroupFile01">
                Photos pré préparation
              </label>
            </div>
          </div>
          <label className="text-dark text-light">
            Détermination valeur du véhicule
          </label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Valeur"
            required
            autofocus
          />
          <label className="text-dark text-light">
            Devis d'estimation des dégats
          </label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Piéce(s) détachée(s) adaptable(s)"
            required
          />
        </div>

        <div className="col-6">
          <label className="text-dark text-light">
            Identification des responsabilités
          </label>
          <select className="form-control mb-4">
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
          />
        </div>
      </div>
    </form>
  );
}

export default Step5;
