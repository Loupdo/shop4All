import { useShop } from "../components/ShopContext.jsx";
import NavBar from "../routes/NavBar";
import Figure from "react-bootstrap/Figure";

//function from modules
import Greeting from "./Greeting.jsx";
import TotalPrice from "./TotalPrice";

//Figure path
import shopImage from "../assets/Shop4All.jpeg";
import shopJewel from "../assets/Jewelry_stand.jpeg";

//create a figure from url
function FigureShop({ url, alt, caption }) {
  return (
    <Figure>
      <Figure.Image className="figure" alt={alt} src={url} />
      <Figure.Caption>{caption}</Figure.Caption>
    </Figure>
  );
}

export default function About() {
  const { total } = useShop();
  return (
    <div className="container">
      <NavBar />
      <Greeting />
      <TotalPrice total={total} />
      <h1>About Page</h1>
      <p className="m-5">
        Welcome to our store! We offer a curated selection of high-quality
        products at great prices. Whether you're looking for the latest fashion,
        stylish accessories, or must-have gadgets, we've got something for
        everyone. Shop with confidence and enjoy a seamless shopping experience!
      </p>
      {/* image section */}
      <div className="row text-center">
        <div className="col-md-6 mb-4">
          <FigureShop
            url={shopImage}
            alt="Shop4All Shop picture"
            caption="Shop4All Springfield location "
          />
        </div>
        <div className="col-md-6 mb-4">
          <FigureShop
            url={shopJewel}
            alt="Shop4All pop-up stall picture"
            caption="Shop4All jewelry pop-up shop "
          />
        </div>
      </div>
      {/* Conatct and Hours section */}
      <div className="row">
        <div className="col-md-5 offset-1 mb-4 moveLeft">
          <p>
            <strong>Shop4All</strong> <br />
            1234 Market St, Suite 567 <br />
            Springfield, MD 25215 USA <br />
            📞 Customer Service: +1 (555) 123-4567 <br />
            ✉️ Email: support@shop4all.com <br />
            🌐 Website: www.shop4all.com <br />
          </p>
        </div>
        <div className="col-md-5 offset-1 mb-4 moveLeft">
          <p>
            <strong>Store Hours:</strong> <br />
            🕒 Monday - Friday: 9:00 AM - 6:00 PM <br />
            🕒 Saturday: 10:00 AM - 4:00 PM <br />
            🕒 Sunday: Closed <br />
          </p>
        </div>
      </div>
    </div>
  );
}
