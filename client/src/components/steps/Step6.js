import React from "react";

function Step1() {
  return (
    <form className="form-signin mt-4">
      <div className="row">
        <div className="col-12">
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
                Photos post préparation
              </label>
            </div>
          </div>
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
                Pièce(s) détachée(s)
              </label>
            </div>
          </div>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Valeur des factures aprés réparation"
            required
            autofocus
          />
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Montant rembourssement"
            required
            autofocus
          />
        </div>
      </div>
    </form>
  );
}

export default Step1;
