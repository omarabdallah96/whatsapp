import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const logo =
    "https://img.icons8.com/material-outlined/100/57a846/whatsapp--v1.png";
  const handleChangePhone = (value) => {
    //if typing in phone number, remove all non-numbers
    setError(false);
    if (phone.length > 15) {
      setError(true);
    }
    setPhone(value.replace(/\D/g, ""));
  };
  const redirectToWhatsapp = () => {
    if (phone.length < 10 || phone.length > 15) {
      //add class to show error
      setError(true);
    } else {
      window.open(
        `https://api.whatsapp.com/send?phone=${phone}&text=${textMsg}`,
        "_blank"
      );
    }
  };
  const [textMsg, setTextMsg] = useState("");

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="mb-3" alt="logo" />
        <h6 style={{ color: "black" }}>
          Sending a message without saving the number .
        </h6>
        <div
          className="col-md-6 "
          style={{
            border: "1px solid #ddd",
            padding: "20px 20px",
            margin: "20px 20px",
            borderRadius: "5px",
          }}
        >
          {/* eorror section to show if ? number is not valid and if phone number ?? not 10 digits */}
          {error ? (
            <p className="error-msg">Please enter a valid phone number</p>
          ) : null}

          <input
            type="number"
            id="phone"
            value={phone}
            className="form-control mt-3"
            onChange={(e) => handleChangePhone(e.target.value)}
            placeholder="Phone with Country Code"
            autoComplete="off"
          />
          <input
            type="text"
            value={textMsg}
            className="form-control mt-3"
            onChange={(e) => setTextMsg(e.target.value)}
            placeholder="Text Message"
            autoComplete="off"
          />
        </div>
        <div className="col-6 mt-3 mb-3">
          <button
            onClick={(e) => redirectToWhatsapp()}
            className="btn btn-success"
          >
            Send
            <img
              src="https://img.icons8.com/material-outlined/24/ffffff/whatsapp--v1.png"
              className="ml-3"
              alt="logo"
            />
          </button>
        </div>
        {/* footer */}
        <div className="col-12 mt-3">
          <p style={{ color: "black", fontSize: 14 }}>
            Devloped by: Omar Abdallah
          </p>
          <a
            href="https://www.linkedin.com/in/omar-abdallah96/"
            target="_blank"
          >
            <img
              src="https://img.icons8.com/color/32/000000/linkedin.png"
              alt="logo"
            />
          </a>
          <a href="https://github.com/omarabdallah96" target="_blank">
            <img
              src="https://img.icons8.com/color/32/000000/github.png"
              alt="logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
