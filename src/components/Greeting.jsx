import { useShop } from "../context/ShopContext.jsx";

export default function Greeting() {
  const { userName } = useShop();
  if (userName === "") {
    return null;
  }
  return <h3>Welcome, {userName}</h3>;
}
