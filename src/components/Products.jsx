import { useState, useEffect } from "react";
import { Card, Button, Dropdown, ButtonGroup } from "react-bootstrap";
//allow access to user name and total
import { useShop } from "../context/ShopContext.jsx";
//function from modules
import NavBar from "../routes/NavBar.jsx";
import TotalPrice from "./TotalPrice.jsx";
import Greeting from "./Greeting.jsx";

// create card from JSON from 1 product
function CreateCard({ oneProduct }) {
  const { setTotal, userName } = useShop();
  const [color, setColor] = useState("Blue");
  const [showMore, setShowMore] = useState(false);
  // color of button
  const [variant, setVariant] = useState("info");
  return (
    <Card className="p-3" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={oneProduct.image}
        className="img-fluid"
        alt={oneProduct.title}
        style={{ width: "100%", height: "200px", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>
          <strong>{oneProduct.title}</strong>
        </Card.Title>
        <Card.Text>
          {showMore || oneProduct.description.length <= 120
            ? oneProduct.description
            : `${oneProduct.description.slice(0, 120)}...`}

          {oneProduct.description.length > 120 && (
            <Button
              variant="link"
              size="sm"
              className="p-0 ms-1"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Read more"}
            </Button>
          )}
        </Card.Text>
        <Card.Subtitle>${oneProduct.price}</Card.Subtitle>
      </Card.Body>

      {/*dropdown allowing user to choose color*/}
      <Dropdown as={ButtonGroup}>
        <Button variant={variant}>{color}</Button>
        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic">
          Choose Color
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              setColor("Blue");
              setVariant("info");
            }}
          >
            Blue
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setColor("Red");
              setVariant("danger");
            }}
          >
            Red
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setColor("Green");
              setVariant("success");
            }}
          >
            Green
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/*button allowing to add price to total*/}
      <Button
        onClick={() => {
          if (userName) {
            setTotal((prevTotal) => prevTotal + oneProduct.price);
          } else {
            alert("Please log in to add items to the cart.");
          }
        }}
        className="addToCart"
        variant="primary"
      >
        Add to Cart
      </Button>
    </Card>
  );
}

// getting product from API
export default function Products() {
  const [products, setProducts] = useState([]);
  const { total } = useShop();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <NavBar />
      <Greeting />
      <TotalPrice total={total} />
      <h1 className="my-4 text-center">Products Page</h1>
      <div className="row">
        {
          /* Create a card from each product from products in a div  */
          products.map((product) => (
            <div
              key={product.id}
              className="col-md-4 d-flex justify-content-center"
            >
              <CreateCard oneProduct={product} />
            </div>
          ))
        }
      </div>
    </div>
  );
}
