import { useState } from "react";
import Button from "react-bootstrap/Button";
//allow access to userName
import { useShop } from "../components/ShopContext.jsx";
//function from modules
import NavBar from "../routes/NavBar.jsx";

export default function Home() {
  const { userName, setUserName } = useShop();
  //visible check if a username was set
  const [visible, setVisible] = useState(userName === "");
  //if no username ask user for a user name
  if (visible) {
    return (
      <div className="container">
        <NavBar />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="userNameImput">
            <label htmlFor="userName">Enter you user name:</label>
            <br />
            <input
              type="text"
              id="userName"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <Button
            variant="primary"
            onClick={() => {
              if (userName === "") {
                alert("Enter a valid name");
              } else {
                setVisible(false);
              }
            }}
          >
            Login
          </Button>
        </div>
      </div>
    );
    //if username was set, welcome user
  } else {
    return (
      <div className="container">
        <NavBar />
        <div className="addMargin d-flex flex-column justify-content-center align-items-center">
          <h1>Welcome, {userName} !</h1>
          {/* Allow to loggout by reseting userName and visible */}
          <Button
            variant="primary"
            className="Loggout"
            onClick={() => {
              setUserName("");
              setVisible(true);
            }}
          >
            Loggout
          </Button>
        </div>
      </div>
    );
  }
}
