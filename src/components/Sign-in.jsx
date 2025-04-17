import React from "react";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function SigninForm() {
  const { users, setUserName, setVisible } = useShop();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required").email("Enter a valid email"),
      password: Yup.string()
        .required("Required")
        .min(8, "Must contain at least 8 characters"),
    }),
    onSubmit: (values) => {
      const user = users.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );
      if (user) {
        setUserName(user.firstName);
        setVisible(false);
      } else {
        alert("This account does not exist, please register");
      }
    },
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="userNameImput">
        <form onSubmit={formik.handleSubmit} className="formLogin">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email"
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
            type="password"
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="error">{formik.errors.password}</p>
          ) : null}

          <div className="buttonBar m-4">
            <Button variant="primary" type="submit" className="m-2">
              Submit
            </Button>
            <Button
              variant="secondary"
              as={Link}
              to="/register"
              className="m-2"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
