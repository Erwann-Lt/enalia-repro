import React from "react";
import useWindowSize from "../useWindowSize";

const Contact = () => {
  const { width } = useWindowSize();

  return (
    <div>
      {width < 650 ? (
        <div style={{ height: "100vh", opacity: "0.7", marginLeft: "" }}>
          <br />
          <br />
          <br />
          <br />
          <form className="d-flex justify-content-center align-content-center align-items-center col">
            <label>
              <h2 style={{ fontSize: "15px" }}>
                Bonjour, mon nom est &nbsp;
                <input type="text" name="name" placeholder="Emma Dubois" />
              </h2>

              <h2 style={{ fontSize: "15px" }}>
                Je suis&nbsp;
                <input
                  type="text"
                  name="job"
                  placeholder="dirigeante de société"
                />
              </h2>

              <h2 style={{ fontSize: "15px" }}>
                Je cherche à &nbsp;
                <input
                  type="text"
                  name="goal"
                  placeholder="avoir des renseignements"
                />
              </h2>

              <h2 style={{ fontSize: "15px" }}>
                On peut me contacter à &nbsp;
                <input
                  type="text"
                  name="contact"
                  placeholder="emma@dubois.fr"
                />
              </h2>

              <h2 style={{ fontSize: "15px" }}>
                Voici mon message&nbsp;
                <br />
                <textarea
                  style={{
                    resize: "none",
                    outline: "none",
                  }}
                  cols="20"
                  rows="4"
                  type="text"
                  placeholder="Mon message"
                />
              </h2>
              <button className="btn btn-info">Envoyer</button>
            </label>
          </form>
        </div>
      ) : (
        <div style={{ height: "100vh", opacity: "0.7" }}>
          <br />
          <br />
          <br />
          <br />
          <form className="d-flex justify-content-center align-content-center align-items-center col">
            <label>
              <h2>
                Bonjour, mon nom est &nbsp;
                <input type="text" name="name" placeholder="Emma Dubois" />
              </h2>

              <h2>
                Je suis&nbsp;
                <input
                  type="text"
                  name="job"
                  placeholder="dirigeante de société"
                />
              </h2>

              <h2>
                Je cherche à &nbsp;
                <input
                  type="text"
                  name="goal"
                  placeholder="avoir des renseignements"
                />
              </h2>

              <h2>
                On peut me contacter à &nbsp;
                <input
                  type="text"
                  name="contact"
                  placeholder="emma@dubois.fr"
                />
              </h2>

              <h2>
                Voici mon message&nbsp;
                <br />
                <textarea
                  style={{
                    resize: "none",
                    outline: "none",
                  }}
                  cols="40"
                  rows="7"
                  type="text"
                  placeholder="Mon message"
                />
              </h2>
              <button className="btn-lg btn-info">Envoyer</button>
            </label>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
