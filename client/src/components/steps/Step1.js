import React from "react";

function Step1({ handleType }) {
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
                name="customRadioInline1"
                class="custom-control-input"
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline1"
                onChange={() => handleType("col")}
              >
                Colision
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                onChange={() => handleType("vol")}
                type="radio"
                id="customRadioInline2"
                name="customRadioInline1"
                class="custom-control-input"
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
                name="customRadioInline1"
                class="custom-control-input"
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
                name="customRadioInline1"
                class="custom-control-input"
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
            required
            autofocus
          />
          <label className="sr-only mb-4">
            Dégat Materiel autre que véhicule A et B
          </label>
          <select className="form-control mb-4">
            <option value="" disabled selected>
              Dégat Materiel autre que véhicule A et B
            </option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
          <label className="sr-only mb-4">Temoin(s)</label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Témoin(s)"
            required
          />
          <label className="sr-only mb-4">Nom & Prénon Conducteur</label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Nom & Prénon Conducteur"
            required
          />
        </div>

        <div className="col-6">
          <label className="sr-only mb-4">Date</label>
          <input
            type="date"
            className="form-control mb-4"
            placeholder="Date"
            required
            autofocus
          />
          <label className="sr-only mb-4">Circanstances</label>
          <select className="form-control mb-4">
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
                id="customRadioInline1"
                name="customRadioInline1"
                class="custom-control-input"
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline1"
              >
                Oui
              </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline2"
                name="customRadioInline1"
                class="custom-control-input"
              />
              <label
                class="custom-control-label text-secondary"
                for="customRadioInline2"
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
