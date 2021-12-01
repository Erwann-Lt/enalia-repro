import React from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../useWindowSize";

const HomeMiddle3 = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width < 650 ? (
        <div style={{ height: "100vh", marginTop: "600px" }}>
          <h2
            style={{
              fontSize: "6vw",
              fontWeight: "bold",
              color: "#54565a",
              marginLeft: " 50px",
            }}
          >
            {" "}
            Passion et engagement,
            <em className="highlight">ingrédients secrets</em>.
          </h2>

          <div style={{ marginTop: "50px" }}>
            <div style={{ marginLeft: "50px" }}>
              <img
                height="200px"
                src="https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f6c4f4b1cab676063a604b4_ENR-CERT-74-p-1080.jpeg"
                alt=""
              />
            </div>

            <div className="grid2">
              <div>
                <p style={{ marginLeft: "50px ", fontSize: "15px" }}>
                  Issus d'une pluralité de parcours, nos
                  <br />
                  collaborateurs combinent des
                  <br />
                  expériences, personnalités et
                  <br />
                  compétences uniques. Ils créent et
                  <br />
                  mettent en œuvre nos différentes
                  <br />
                  expertises.
                </p>
              </div>

              <div>
                <p style={{ marginLeft: "50px ", fontSize: "15px" }}>
                  Implantés partout en France, nous
                  <br />
                  sommes constamment à la recherche de
                  <br />
                  nouveaux talents, avec une ambition
                  <br />
                  commune : grandir ensemble.
                </p>

                <Link to="/carrieres">
                  <button
                    style={{ marginTop: "100px", marginLeft: "-100px" }}
                    className="btn-lg btn-info"
                  >
                    Voir nos offres
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ height: "100vh" }}>
          <h2
            style={{
              fontSize: "2.5em",
              fontWeight: "bold",
              color: "#54565a",
              marginLeft: " 200px",
            }}
          >
            {" "}
            Passion et engagement,
            <br />
            <em className="highlight">ingrédients secrets</em>.
          </h2>

          <div className="grid3" style={{ marginTop: "150px" }}>
            <div>
              <img
                height="300px"
                src="https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f6c4f4b1cab676063a604b4_ENR-CERT-74-p-1080.jpeg"
                alt=""
              />
            </div>

            <div>
              <p style={{ marginLeft: "50px ", fontSize: "20px" }}>
                Issus d'une pluralité de parcours, nos
                <br />
                collaborateurs combinent des
                <br />
                expériences, personnalités et
                <br />
                compétences uniques. Ils créent et
                <br />
                mettent en œuvre nos différentes
                <br />
                expertises.
              </p>
            </div>

            <div>
              <p style={{ marginLeft: "50px ", fontSize: "20px" }}>
                Implantés partout en France, nous
                <br />
                sommes constamment à la recherche de
                <br />
                nouveaux talents, avec une ambition
                <br />
                commune : grandir ensemble.
              </p>

              <Link to="/carrieres">
                <button
                  style={{ marginTop: "100px", marginLeft: "-100px" }}
                  className="btn-lg btn-info"
                >
                  Voir nos offres
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeMiddle3;
