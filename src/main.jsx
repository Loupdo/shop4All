import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

//components
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import About from "./components/About.jsx";
import Register from "./components/Register.jsx";
import { ShopProvider } from "./context/ShopContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopProvider>
      <RouterProvider router={router} />
    </ShopProvider>
  </StrictMode>
);
