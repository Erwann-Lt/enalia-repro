import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../useWindowSize";

const HomeMiddle = () => {
  const { width } = useWindowSize();
  const [collab, setCollab] = useState(0);
  const [kw, setKw] = useState(0);
  const [ca, setCa] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (collab < 150) {
        setCollab((collab) => collab + 5);
      } else if (ca < 360) {
        setCa((ca) => ca + 10);
      } else if (kw < 3.2) {
        setKw((kw) => kw + 0.1);
      }
    }, 40);
  }, [collab, kw, ca]);

  return (
    <>
      {width < 650 ? (
        <div style={{ height: "100vh", marginTop: "-700px" }}>
          <div className="grid2">
            <div>
              <h2
                style={{
                  fontSize: "4.5vw",
                  fontWeight: "bold",
                  color: "#54565a",
                  marginLeft: "100px",
                }}
              >
                {" "}
                Réduire l'impact <br /> un{" "}
                <em className="highlight">vecteur</em> de croissance
              </h2>
            </div>

            <div></div>

            <div style={{ marginLeft: "150px", marginTop: "-30px" }}>
              <p style={{ fontSize: "8vw", color: "#54565a" }}>{collab}</p>
              <h5 style={{ fontSize: "3vw" }}>COLLABORATEURS </h5>
              <p style={{ fontSize: "8vw", color: "#54565a" }}>
                {kw.toFixed(1)}TWh
              </p>
              <h5 style={{ fontSize: "3vw" }}>ÉCONOMIES GÉNÉRÉES EN 2019</h5>
              <p style={{ fontSize: "8vw", color: "#54565a" }}>+{ca}M€</p>
              <h5 style={{ fontSize: "3vw" }}>CHIFFRE D’AFFAIRES EN 2020</h5>
              <hr />
              <Link to="/groupe">
                <button className="btn btn-info">Notre groupe</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ height: "100vh" }}>
          <div className="grid2">
            <div>
              <h2
                style={{
                  fontSize: "2.5em",
                  fontWeight: "bold",
                  color: "#54565a",
                  marginLeft: "100px",
                }}
              >
                {" "}
                Réduire l'impact <br /> un{" "}
                <em className="highlight">vecteur</em> de croissance
              </h2>
            </div>

            <div style={{ marginLeft: "150px", marginTop: "-20px" }}>
              <p style={{ fontSize: "6em", color: "#54565a" }}>{collab}</p>
              <h5>COLLABORATEURS AU 1ER MARS 2021</h5>
              <hr />
            </div>

            <div style={{ marginLeft: "100px", fontSize: "20px" }}>
              <p>
                En France et en Europe, l'efficacité énergétique devient
                <br />
                une priorité environnementale. Enalia est aujourd'hui <br />
                l'un des leaders français de ce secteur en constante
                <br />
                évolution. Acteur global des économies d'énergie, nous <br />
                réduisons l'impact énergétique des particuliers, des <br />
                entreprises et des collectivités.
              </p>
            </div>

            <div style={{ marginLeft: "150px", marginTop: "50px" }}>
              <p style={{ fontSize: "6em", color: "#54565a" }}>
                {kw.toFixed(1)}TWh
              </p>
              <h5>ÉCONOMIES GÉNÉRÉES EN 2019 GRÂCE AUX CEE</h5>
              <hr />
            </div>

            <div style={{ marginLeft: "200px", marginTop: "150px" }}>
              <Link to="/groupe">
                <button className="btn-lg btn-info">Découvrir le groupe</button>
              </Link>
            </div>

            <div style={{ marginLeft: "150px", marginTop: "100px" }}>
              <p style={{ fontSize: "6em", color: "#54565a" }}>+{ca}M€</p>
              <h5>CHIFFRE D’AFFAIRES EN 2020</h5>
              <hr />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeMiddle;
