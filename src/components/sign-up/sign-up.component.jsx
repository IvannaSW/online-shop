import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import {useFormik} from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      displayName: '',
      email: '',
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      displayName: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),      
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string().required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
    }),
    onSubmit: async(values) => {
      const { displayName, email, password } = values;     
      try {
        const { user } =  await auth.createUserWithEmailAndPassword(email, password);
        await createUserProfileDocument(user, { displayName });     
            
      } catch (error) {
        console.error(error);
      }    
    },
  });
  return(
    <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign Up with your email and password</span>
        <form className="sign-up-form" onSubmit={formik.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            id="displayName"
            value={formik.values.displayName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Your Name"            
          />
          {formik.touched.displayName && formik.errors.displayName ? (
         <div className="form-error-message">{formik.errors.displayName}</div>
       ) : null}
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Email"            
          />
           {formik.touched.email && formik.errors.email ? (
         <div className="form-error-message">{formik.errors.email}</div>
       ) : null}
          <FormInput
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Password"            
          />
           {formik.touched.password && formik.errors.password ? (
         <div className="form-error-message">{formik.errors.password}</div>
       ) : null}
          <FormInput
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Confirm Password"           
          />
           {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
         <div className="form-error-message">{formik.errors.confirmPassword}</div>
       ) : null}
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
  )
}
export default SignUp;
