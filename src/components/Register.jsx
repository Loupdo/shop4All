import * as Yup from "yup";
import { useFormik } from "formik";
//allow access to users and total from context
import { useShop } from "../context/ShopContext.jsx";
//import from React/react-bootstap/react-router-dom
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
//function from modules
import NavBar from "../routes/NavBar.jsx";
import TotalPrice from "./TotalPrice.jsx";

export default function Register() {
  const { total, users, setUsers } = useShop();
  const navigate = useNavigate();
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    //yup library use for validation
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required").max(15, "Name is too long"),
      lastName: Yup.string().required("required").max(20, "Name is too long"),
      email: Yup.string().required("Required").email("Enter a valid email"),
      password: Yup.string()
        .required("Required")
        .min(8, "Must contain at least 8 characters")
        .matches(/.*[a-z].*/, "Must contain a lower case letter")
        .matches(/.*[A-Z].*/, "Must contain an upper case letter")
        .matches(/.*[0-9].*/, "Must contain a number")
        .matches(
          /.*[_=!#$%&()*+,-.:'/?@].*/,
          "Must contain a special characters"
        ),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password")],
        "Mismatched passwords"
      ),
    }),
    onSubmit: (values) => {
      if (users.some((user) => user.email === values.email)) {
        alert("You already have an account");
      } else {
        addUser({ ...values });
        navigate("/");
      }
    },
  });

  return (
    <div className="container">
      <NavBar />
      <TotalPrice total={total} />
      <form onSubmit={formik.handleSubmit} className="formRegisteration">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p className="error">{formik.errors.firstName}</p>
        ) : null}
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p className="error">{formik.errors.lastName}</p>
        ) : null}
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="error">{formik.errors.email}</p>
        ) : null}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="text"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="error">{formik.errors.password}</p>
        ) : null}
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="text"
          placeholder="Confirm password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <p className="error">{formik.errors.confirmPassword}</p>
        ) : null}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
