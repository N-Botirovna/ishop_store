import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import './Registration.css'

const registrationSchema = Yup.object({
  first: Yup.string().min(2).max(20).required("First name is required"),
  last: Yup.string().min(2).max(20).required("Last name is required"),
  password: Yup.string().min(6).required("Please enter your password"),
  repassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

const RegistrationForm = () => {
  const initialValues = {
    first: "",
    last: "",
    password: "",
    repassword: "",
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      alert("Registration successful!");
      resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit} className="registration-form">
        <fieldset>
          {/* <legend>Registration</legend> */}
          <div className="fullname">
          <div className="form-group">
            <label htmlFor="first">Ismingiz:</label>
            <input
              type="text"
              id="first"
              name="first"
              value={values.first}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.first && errors.first ? "error" : ""}
            />
            {touched.first && errors.first && (
              <div className="error-message">{errors.first}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="last">Familyangiz:</label>
            <input
              type="text"
              id="last"
              name="last"
              value={values.last}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.last && errors.last ? "error" : ""}
            />
            {touched.last && errors.last && (
              <div className="error-message">{errors.last}</div>
            )}
          </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Ixtiyoriy parol kiriting:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.password && errors.password ? "error" : ""}
            />
            {touched.password && errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="repassword">Parolni tasdiqlang</label>
            <input
              type="password"
              id="repassword"
              name="repassword"
              value={values.repassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.repassword && errors.repassword ? "error" : ""}
            />
            {touched.repassword && errors.repassword && (
              <div className="error-message">{errors.repassword}</div>
            )}
          </div>
          <div>
          <button type="button" onClick={resetForm} className="btn-clear">
              Clear
            </button>
            <button type="submit">Register</button>
            
          </div>
        </fieldset>
      </form>
      <div className="link-signin">
        Ro'xatdan o'tganmisiz? <Link to="/signin">Kirish</Link>
      </div>
    </div>
  );
};

export default RegistrationForm;