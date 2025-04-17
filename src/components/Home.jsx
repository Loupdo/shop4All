import Button from "react-bootstrap/Button";

//allow access to userName/visible
import { useShop } from "../context/ShopContext.jsx";
//function from modules
import NavBar from "../routes/NavBar.jsx";
import SigninForm from "./Sign-in.jsx";

export default function Home() {
  const { userName, setUserName, visible, setVisible, setTotal } = useShop();
  if (visible) {
    return (
      <div className="container">
        <NavBar />
        <SigninForm />
      </div>
    );
    //if username was set, welcome user
  } else {
    return (
      <div className="container">
        <NavBar />
        <div className="addMargin d-flex flex-column justify-content-center align-items-center">
          <h1>Welcome, {userName} !</h1>
          {/* Allow to logout by reseting userName and visible */}
          <Button
            variant="primary"
            className="Logout"
            onClick={() => {
              setUserName("");
              setTotal(0);
              setVisible(true);
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  }
}
