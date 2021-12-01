import React, { useRef } from "react";
import HomeMiddle4 from "../home/HomeMiddle4";
import useWindowSize from "../useWindowSize";

const Carrieres = () => {
  const myRef = useRef(null);
  const { width } = useWindowSize();

  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div>
      {width < 650 ? (
        <div className="container-fluid">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div
            className="gridr1 "
            style={{
              backgroundImage:
                "url(https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f4fc9959b6ca7d7092f305c_Fond%20Carrieres.png)",
            }}
          >
            <div
              style={{
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "100%",
                boxShadow: "500px",
              }}
              className="carrieres-pic1 "
            >
              <h1
                style={{
                  fontWeight: "bold",
                  color: "#54565a",
                  marginLeft: "100px",
                }}
              >
                Rejoindre un groupe agile, <br />
                <span className="highlight">aux métiers multiples</span>
              </h1>
              <br />
              <br />
              <br />
              
            </div>
          </div>

          <div className="gridr4">
            <div
              onClick={executeScroll}
              style={{ cursor: "pointer" }}
              className="d-flex  "
            >
              <img
                height="5%"
                src="https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47887bb72e4752207e03b6_Arrow.svg"
                alt=""
              />
              &nbsp;
              <p>En savoir plus</p>
            </div>

            <div>
              <p style={{ color: "gray" }}>
                Le groupe se construit chaque jour grâce à l’énergie de ses
                collaborateurs.
              </p>
            </div>

            <div>
              <span style={{ color: "gray" }} className="highlight">
                Rejoignez une équipe passionnée et évoluez au sein d’un secteur
                d’avenir.
              </span>
            </div>
          </div>

          <div ref={myRef}>
            <br /> <br />
            <br />
          </div>
          <div style={{ height: "100vh" }}>
            <h2
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                color: "#54565a",
                marginLeft: " 100px",
              }}
            >
              {" "}
              Lexpérience &nbsp;
              <span className="highlight">collaborateur</span>.
            </h2>

            <div className="grid3" style={{ marginTop: "50px" }}>
              <div>
                <p style={{ marginLeft: "0px ", fontSize: "20px" }}>
                  Au sein d’Enalia, nous prêtons attention aux détails dès votre
                  arrivée. Le premier jour est le début d’un parcours, où vous
                  rencontrerez les différentes équipes et partagerez notre
                  vision de la transition énergétique, mais aussi nos valeurs.
                  L’occasion de vous présenter les services que nous mettons à
                  disposition de nos collaborateurs.
                </p>
              </div>

              <div>
                <p style={{ marginLeft: "50px ", fontSize: "20px" }}>
                  À Paris, Nantes et Lyon, nous rassemblons des personnalités.
                  Qu'ils soient récemment arrivés ou depuis plusieurs années
                  présents, nos salariés croisent des âges, des passions, des
                  parcours et des métiers variés. Il ne manque plus que votre
                  touche personnelle.
                </p>
              </div>
              
            </div>
          </div>

          <div style={{ height: "100vh" , marginTop:'500px'}}>
            <h2
              style={{
                fontSize: "2.5em",
                fontWeight: "bold",
                color: "#54565a",
                marginLeft: " 100px",
              }}
            >
              {" "}
              Evoluer et &nbsp;
              <span className="highlight">grandir</span> avec nous.
            </h2>

            <div className="grid2" style={{ marginTop: "50px" }}>
              
              <div>
                <p style={{ marginLeft: "50px ", fontSize: "20px" }}>
                  Notre ambition : mobiliser vos atouts et les faire grandir au
                  service d'une ambition commune, réduire l'impact énergétique
                  de nos clients. 
                </p>
              </div>

              <div>
                <p style={{ marginLeft: "50px ", fontSize: "20px" }}>
                  Nos offres d'emploi évoluent constamment. Si travailler dans
                  un secteur qui fait sens est votre moteur, rejoignez-nous !
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <a
                  href="https://www.welcometothejungle.com/fr/companies/enalia/jobs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    style={{ marginTop: "100px", marginLeft: "-100px" }}
                    className="btn-lg btn-info"
                  >
                    Voir nos offres sur WTTJ
                  </button>
                </a>
              </div>

            </div>
          </div>
          <div
            className="row align-content-center justify-content-center d-flex"
            style={{
              fontWeight: "bold",
              color: "#54565a",
              marginLeft: "100px",
              marginTop: "300px",
            }}
          >
            <h1>
              Aucune offre ne vous correspond?
              <span className="highlight">Créez la votre !</span>
            </h1>
            <a href="https://www.gmail.com" target="_blank" rel="noreferrer">
              <button className="btn-lg btn-info">
                Déposer sa candidature
              </button>
            </a>
          </div>

          <div style={{ marginTop: "500px" }}>
            <HomeMiddle4 />
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div
            className="gridr1 "
            style={{
              backgroundImage:
                "url(https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f4fc9959b6ca7d7092f305c_Fond%20Carrieres.png)",
            }}
          >
            <div
              style={{
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "100%",
                boxShadow: "500px",
              }}
              className="carrieres-pic1 "
            >
              <h1
                style={{
                  fontWeight: "bold",
                  color: "#54565a",
                  marginLeft: "100px",
                }}
              >
                Rejoindre un groupe agile, <br />
                <span className="highlight">aux métiers multiples</span>
              </h1>
              <br />
              <br />
              <br />
              <h1
                style={{
                  fontWeight: "bold",
                  color: "#54565a",
                  marginLeft: "100px",
                  fontSize: "250px",
                  opacity: "0.6",
                }}
              >
                {" "}
                Enalia
              </h1>
            </div>
          </div>

          <div className="gridr4">
            <div
              onClick={executeScroll}
              style={{ cursor: "pointer" }}
              className="d-flex  "
            >
              <img
                height="5%"
                src="https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f47887bb72e4752207e03b6_Arrow.svg"
                alt=""
              />
              &nbsp;
              <p>En savoir plus</p>
            </div>

            <div>
              <p style={{ color: "gray" }}>
                Le groupe se construit chaque jour grâce à l’énergie de ses
                collaborateurs.
              </p>
            </div>

            <div>
              <span style={{ color: "gray" }} className="highlight">
                Rejoignez une équipe passionnée et évoluez au sein d’un secteur
                d’avenir.
              </span>
            </div>
          </div>

          <div ref={myRef}>
            <br /> <br />
            <br />
          </div>
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
              Lexpérience &nbsp;
              <span className="highlight">collaborateur</span>.
            </h2>

            <div className="grid3" style={{ marginTop: "150px" }}>
              <div>
                <p style={{ marginLeft: "50px ", fontSize: "20px" }}>
                  Au sein d’Enalia, nous prêtons attention aux détails dès votre
                  arrivée. Le premier jour est le début d’un parcours, où vous
                  rencontrerez les différentes équipes et partagerez notre
                  vision de la transition énergétique, mais aussi nos valeurs.
                  L’occasion de vous présenter les services que nous mettons à
                  disposition de nos collaborateurs.
                </p>
              </div>

              <div>
                <p style={{ marginLeft: "50px ", fontSize: "20px" }}>
                  À Paris, Nantes et Lyon, nous rassemblons des personnalités.
                  Qu'ils soient récemment arrivés ou depuis plusieurs années
                  présents, nos salariés croisent des âges, des passions, des
                  parcours et des métiers variés. Il ne manque plus que votre
                  touche personnelle.
                </p>
              </div>
              <div>
                <img
                  height="300px"
                  src="https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f7203f2f3dbe94b5a063d6a_Enalia%20carrieres_3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

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
              Evoluer et &nbsp;
              <span className="highlight">grandir</span> avec nous.
            </h2>

            <div className="grid3" style={{ marginTop: "150px" }}>
              <div>
                <img
                  height="400px"
                  src="https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f7203f189fd4d763ed26727_Enalia%20carrieres.jpg"
                  alt=""
                />
              </div>
              <div>
                <p style={{ marginLeft: "50px ", fontSize: "20px" }}>
                  Notre ambition : mobiliser vos atouts et les faire grandir au
                  service d'une ambition commune, réduire l'impact énergétique
                  de nos clients. Chez Enalia, nous donnons les moyens à chacun
                  de faire ses preuves et d’évoluer au sein d’un métier, d’un
                  service et même du groupe.
                </p>
              </div>

              <div>
                <p style={{ marginLeft: "50px ", fontSize: "20px" }}>
                  Nos offres d'emploi évoluent constamment. Si travailler dans
                  un secteur qui fait sens est votre moteur, rejoignez-nous !
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <a
                  href="https://www.welcometothejungle.com/fr/companies/enalia/jobs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    style={{ marginTop: "100px", marginLeft: "-100px" }}
                    className="btn-lg btn-info"
                  >
                    Voir nos offres sur WTTJ
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="row align-content-center justify-content-center d-flex"
            style={{
              fontWeight: "bold",
              color: "#54565a",
              marginLeft: "100px",
              marginTop: "100px",
            }}
          >
            <h1>
              Aucune offre ne vous correspond?
              <span className="highlight">Créez la votre !</span>
            </h1>
            <a href="https://www.gmail.com" target="_blank" rel="noreferrer">
              <button className="btn-lg btn-info">
                Déposer sa candidature
              </button>
            </a>
          </div>

          <div style={{ marginTop: "500px" }}>
            <HomeMiddle4 />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrieres;
