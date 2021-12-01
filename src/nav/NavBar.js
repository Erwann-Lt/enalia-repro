import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../useWindowSize.js";

const NavBar = () => {
  const { width } = useWindowSize();

  useEffect(() => {
    let lastScrollTop;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-60px";
      } else {
        navbar.style.top = "0";
      }

      lastScrollTop = scrollTop;
    });
  });

  return (
    <div id="navbar">
      <Link className="text-link" to="/">
        <img
          height="30px"
          style={{ marginLeft: "90px" }}
          src="https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f511c7aa071402caf19508f_Logo%20Enalia.svg"
          alt="logo"
        />{" "}
      </Link>

      <div className="d-flex justify-content-end">
        <div className="dropdown text-link">
          <button className="dropbtn">MENU</button>
          <div className="dropdown-content  ">
            <Link className="text-link" to="/vision">
              <div>
                <img
                  className="menuPic"
                  src="https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f461de198216ef0bfa8102e_Explorer%20icon.svg"
                  alt=""
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3 style={{ fontSize: "2vw" }}>VISION</h3>
                <br />
                <br />
                {width < 650 ? null : (
                  <h6 style={{ fontSize: "1.5vw" }}>
                    Optimisation Energétique
                  </h6>
                )}
              </div>
            </Link>

            <Link className="text-link" to="/groupe">
              <div>
                <img
                  className="menuPic"
                  src="https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f461df95374615ff908e340_Groupe%20icon.svg"
                  alt=""
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3 style={{ fontSize: "2vw" }}>LE GROUPE</h3>
                <br />
                <br />
                {width < 650 ? null : (
                  <h6 style={{ fontSize: "1.5vw" }}>ADN, Marque et CODIR</h6>
                )}
              </div>
            </Link>

            <Link className="text-link" to="/expertises">
              <div>
                <img
                  className="menuPic"
                  src="https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f461df910bd523fedef9923_Expertises%20icon.svg"
                  alt=""
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3 style={{ fontSize: "2vw" }}>EXPERTISES</h3>
                <br />
                <br />
                {width < 650 ? null : (
                  <h6 style={{ fontSize: "1.5vw" }}>Activités et métiers</h6>
                )}
              </div>
            </Link>

            <Link className="text-link" to="/carrieres">
              <div>
                <img
                  className="menuPic"
                  src="https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f461df9bfab834eade77168_Carrieres%20icon.svg"
                  alt=""
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3 style={{ fontSize: "2vw" }}>CARRIERES</h3>
                <br />
                <br />
                {width < 650 ? null : (
                  <h6 style={{ fontSize: "1.5vw" }}>Environnement et offres</h6>
                )}
              </div>
            </Link>

            <Link className="text-link" to="/medias">
              <div>
                <img
                  className="menuPic"
                  src="https://uploads-ssl.webflow.com/5f0c8ee786502d713c4bbd11/5f461df9417bb478a8782e33_Medias%20icon.svg"
                  alt=""
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3 style={{ fontSize: "2vw" }}>MEDIAS</h3>
                <br />
                <br />
                {width < 650 ? null : (
                  <h6 style={{ fontSize: "1.5vw" }}>Regards sur l'actualité</h6>
                )}
              </div>
            </Link>
          </div>
        </div>{" "}
        &nbsp; &nbsp;
        <Link className="text-link" to="/contact">
          
          <h6 style={{ marginTop: "3px", fontSize: "2vw" }}>CONTACT</h6>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
