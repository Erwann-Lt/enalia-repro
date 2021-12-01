import React from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../useWindowSize";

const Footer = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width < 650 ? (
        <div style={{ marginTop: "1650px" }} className="footer">
          <div className="row">
            <div className="col">
              <Link className="text-link" to="/">
                <img
                  src="https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f48b4bc3f2c3d0b9ebba36e_Enalia%20picto.svg"
                  alt=""
                />
              </Link>
            </div>

            <div className="col">
              <Link className="text-link" to="/groupe">
                <h5>Le groupe</h5>
              </Link>
              <Link className="text-link" to="/expertises">
                <h5>Expertises</h5>
              </Link>
              <Link className="text-link" to="/medias">
                <h5>Médias</h5>
              </Link>
            </div>

            <div className="col">
              <Link className="text-link" to="/carrieres">
                <h5>Carrières</h5>
              </Link>
              <Link className="text-link" to="/groupe">
                <h5>Contact</h5>
              </Link>
              <Link className="text-link" to="/vision">
                <h5>Vision</h5>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div style={{}} className="footer">
          <div className="grid7">
            <div>
              <Link className="text-link" to="/">
                <img
                  src="https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f48b4bc3f2c3d0b9ebba36e_Enalia%20picto.svg"
                  alt=""
                />
              </Link>
              <p style={{ fontSize: "20px" }}>
                {" "}
                Réduire les consommations dénergie
              </p>
            </div>

            <div style={{ marginTop: "50px" }}>
              <Link className="text-link" to="/vision">
                <h5>Vision</h5>
              </Link>
              <p>L'énergie en transition</p>
              <p>Intervention</p>
              <p>Notre métier</p>
            </div>

            <div style={{ marginTop: "50px" }}>
              <Link className="text-link" to="/groupe">
                <h5>Le groupe</h5>
              </Link>
              <p>Engagements</p>
              <p>Marques</p>
              <p>Direction</p>
            </div>

            <div style={{ marginTop: "50px" }}>
              <Link className="text-link" to="/expertises">
                <h5>Expertises</h5>
              </Link>
              <p>Engagements</p>
              <p>Marques</p>
              <p>Direction</p>
            </div>

            <div style={{ marginTop: "50px" }}>
              <Link className="text-link" to="/medias">
                <h5>Médias</h5>
              </Link>
              <p>Engagements</p>
              <p>Marques</p>
              <p>Direction</p>
            </div>

            <div style={{ marginTop: "50px" }}>
              <Link className="text-link" to="/carrieres">
                <h5>Carrières</h5>
              </Link>
              <p>Engagements</p>
              <p>Marques</p>
            </div>

            <div style={{ marginTop: "50px" }}>
              <Link className="text-link" to="/groupe">
                <h5>Contact</h5>
              </Link>
              <p>Suivez-nous</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
