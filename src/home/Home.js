import React from "react";
import { Link } from "react-router-dom";
import HomeMiddle from "./HomeMiddle";
import HomeMiddle2 from "./HomeMiddle2";
import HomeMiddle3 from "./HomeMiddle3";
import HomeMiddle4 from "./HomeMiddle4";
import useWindowSize from "../useWindowSize";

const Home = () => {
  const { width } = useWindowSize();
  return (
    <>
      {width < 650 ? (
        <div>
          <div className="homePic ">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="grid2">
              <div style={{ marginLeft: "5px" }}>
                <h2
                  style={{
                    fontSize: "5.5vw",
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  <span style={{ fontWeight: "bold", color: "#7fe3a5" }}>
                    Réduire{" "}
                  </span>
                  les <br />
                  consommations d'énergie
                </h2>
              </div>

              <div
                className="home-pic2"
                style={{
                  marginLeft: "-10px",
                  marginTop: "-150px",
                  height: "200px",
                  width: "230px",
                }}
              >
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div style={{ marginLeft: "30px" }}>
                  <Link to="/vision">
                    <button className="btn btn-info">Notre vision</button>
                  </Link>
                </div>
              </div>

              <div style={{ marginLeft: " ", fontSize: "4vw", color: "grey" }}>
                <p>
                  Depuis près de dix ans, nous oeuvrons pour une société économe
                  en énergie.
                </p>
              </div>

              <div
                className="home-pic3"
                style={{
                  marginLeft: "-10px",
                  marginTop: "-120px",
                  height: "100px",
                  width: "230px",
                }}
              >
                <br />
                <br />

                <br />
                <br />
                <div style={{ marginLeft: "30px", marginTop: "-50px" }}>
                  <Link to="/groupe">
                    <button className="btn btn-info">Notre groupe</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <HomeMiddle />
          <HomeMiddle2 />
          <HomeMiddle3 />
          <HomeMiddle4 />
        </div>
      ) : (
        <div>
          <div className="homePic ">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="grid2">
              <div style={{ marginLeft: "100px" }}>
                <h2
                  style={{
                    fontSize: "5.5vw",
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  <span style={{ fontWeight: "bold", color: "#7fe3a5" }}>
                    Réduire{" "}
                  </span>
                  les <br />
                  consommations d'énergie
                </h2>
              </div>

              <div
                className="home-pic2"
                style={{
                  marginLeft: "240px",
                  marginTop: "-150px",
                  height: "450px",
                  width: "375px",
                }}
              >
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h5
                  style={{ color: "whitesmoke", marginLeft: "100px" }}
                  className="d-flex flex-column justify-content-center align-content-center"
                >
                  NOTRE VISION
                  <br />
                  <br />
                  Comprendre les enjeux
                  <br />
                  de l'efficacité énergétique
                </h5>
                <br />
                <br />
                <div style={{ marginLeft: "100px" }}>
                  <Link to="/vision">
                    <button className="btn-lg btn-info">
                      Découvrir notre vision
                    </button>
                  </Link>
                </div>
              </div>

              <div
                style={{
                  marginLeft: "100px",
                  marginTop: "150px",
                  fontSize: "20px",
                  color: "grey",
                }}
              >
                <p>
                  Depuis près de dix ans, nous oeuvrons <br />
                  pour une société économe en énergie.
                </p>
              </div>

              <div
                className="home-pic3"
                style={{
                  marginLeft: "240px",
                  marginTop: "150px",
                  height: "350px",
                  width: "370px",
                }}
              >
                <br />
                <br />

                <h5
                  style={{ color: "grey", marginLeft: "100px" }}
                  className="d-flex flex-column justify-content-center align-content-center"
                >
                  LE GROUPE
                  <br />
                  <br />
                  Rassembler les expertises
                  <br />
                </h5>
                <br />
                <br />
                <div style={{ marginLeft: "100px" }}>
                  <Link to="/groupe">
                    <button className="btn-lg btn-info">
                      Découvrir notre groupe
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <HomeMiddle />
          <HomeMiddle2 />
          <HomeMiddle3 />
          <HomeMiddle4 />
        </div>
      )}
    </>
  );
};

export default Home;
