import "../App.css";
import ReactRoundedImage from "react-rounded-image";

import bgShowcase1 from "../assets/img/bg-showcase-1.jpg";
import bgShowcase2 from "../assets/img/bg-showcase-2.jpg";
import bgShowcase3 from "../assets/img/bg-showcase-3.jpg";
import sinistre from "../assets/img/claim.png";
import attestation from "../assets/img/attestation.png";

import MyPhoto from "../assets/img/testimonials-3.jpg";
/* import './assets/img/testimonials-1.jpg';
import './assets/img/testimonials-2.jpg';*/

/*import { FaCar } from "react-icons/fa";
import { GiHobbitDwelling } from "react-icons/gi";*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div>
     
        <header className="masthead text-white text-center">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">Demandez Sans Engagement Un Devis !</h1>
              </div>
              {/* <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email..."
                      />
                    </div>
                    <div className="col-12 col-md-3">
                      <button
                        type="submit"
                        className="btn btn-block btn-lg btn-primary"
                      >
                        Sign up!
                      </button>
                    </div>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </header>
        {/* Icons Grid */}
        <section className="features-icons bg-light text-center">
          <div className="container">
            <h1 className="mb-5">MAE Assurance en chiffres ( En 2015) </h1>

            <h3>Assurance Auto</h3>

            <h3>Assurance Habitation</h3>

            <h3>Assurance de Vie</h3>
          </div>
        </section>
        <section className="showcase">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div
                className="col-lg-6 order-lg-2 text-white showcase-img"
                style={{ backgroundImage: 'url("' + bgShowcase1 + '")' }}
              />
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Assurance Auto</h2>
                <p className="lead mb-0">
                  Dernier modèle ou vieille guimbarde, votre voiture est souvent
                  comme votre seconde maison. Elle vous accompagne sur tous les
                  trajets du quotidien : vos enfants à l'école, votre travail,
                  vos sorties, vos évasions du weekend... Pensez à la protéger
                  ainsi que ses occupants avec une bonne assurance auto.
                </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div
                className="col-lg-6 text-white showcase-img"
                style={{ backgroundImage: 'url("' + bgShowcase2 + '")' }}
              />
              <div className="col-lg-6 my-auto showcase-text">
                <h2>Assurance Habitation</h2>
                <p className="lead mb-0">
                  Maison à la campagne ou appartement citadin, votre logement,
                  c'est votre cocon. Celui qui accueille votre famille, abrite
                  vos biens et tous vos souvenirs. Protéger votre domicile avec
                  une assurance habitation qui vous ressemble, c’est essentiel !
                </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div
                className="col-lg-6 order-lg-2 text-white showcase-img"
                style={{ backgroundImage: 'url("' + bgShowcase3 + '")' }}
              />
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Assurance de Santé</h2>
                <p className="lead mb-0">
                  Que vous soyez étudiant, travailleur indépendant ou retraité,
                  la santé c’est essentiel, à tout âge ! La Sécurité sociale
                  vous protège mais ne couvre pas l’ensemble de vos frais de
                  santé. En choisissant notre complémentaire Santé, vous
                  bénéficiez d’une meilleure prise en charge de votre santé,
                  pour vous et votre famille.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials text-center bg-light">
          <div className="container">
            <h1 className="mb-5">Tous vos services en un clic ?</h1>
            <h3 className="mb-5">
              Effectuez vos opérations du quotidien à tout instant en vous
              connectant à votre Espace Client.
            </h3>
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <ReactRoundedImage
                    image={sinistre}
                    roundedSize="0"
                    imageWidth="200"
                    imageHeight="200"
                  />

                  <h5></h5>
                  <p className="font-weight-light mb-0">
                    "Déclarer ou suivre un sinistre"
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <ReactRoundedImage
                    image={attestation}
                    roundedSize="0"
                    imageWidth="200"
                    imageHeight="200"
                  />

                  <h5></h5>
                  <p className="font-weight-light mb-0">
                    "Télécharger une attestation"
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <ReactRoundedImage
                    image={MyPhoto}
                    roundedSize="0"
                    imageWidth="200"
                    imageHeight="200"
                  />
                  <h5></h5>
                  <p className="font-weight-light mb-0">
                    "Consulter et gérer ses contrats"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="call-to-action text-white text-center">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h2 className="mb-4">Ready to get started? Sign up now!</h2>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email..."
                      />
                    </div>
                    <div className="col-12 col-md-3">
                      <button
                        type="submit"
                        className="btn btn-block btn-lg btn-primary"
                      >
                        Sign up!
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
