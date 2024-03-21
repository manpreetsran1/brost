import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AppImages from "../../Themes/AppImages";
import AppConstants from "../../Themes/AppConstants";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../CustomComponents/Footer";
import { signUpAction } from "../../Redux/Action/AuthenticationAction";
import Header from "../../CustomComponents/Header";
import { Spin } from 'antd';
import ValidationConstants from "../../Themes/ValidationConstants";
import { isInternetConnected } from "../InternetConnection";

function SignUp() {
  document.title = "Sign Up"
  const history = useHistory()
  const dispatch = useDispatch()
  const [title, setTitle] = React.useState(AppConstants.uploadImage)
  const [imageUpload, setImageUpload] = useState("")
  let [file, setFile] = useState(AppImages.profile)
  const [fileUrl, setFileUrl] = useState("")

  const imageValidation = (value) => {
    let fileTypes = ["jpg", "jpeg", "svg", "png"]
    console.log(value, "extension")
    return (fileTypes.indexOf(value) > -1)
  }

  const change = (e) => {
    if (e.target.files && e.target.files[0]) {
      let uploadFile = e.target.files[0]
      let extension = uploadFile.name.split(".").pop().toLowerCase()
      let isSuccess = imageValidation(extension)
      if (isSuccess ) {
        isInternetConnected(history)  &&
        setFile(URL.createObjectURL(e.target.files[0]))
        setFileUrl(e.target.files[0])
        setTitle(AppConstants.changeImage)
        setImageUpload("")
      }
      else {
        isInternetConnected(history) &&
        setImageUpload(ValidationConstants.supportedImages)
      }
    }
  }

  const signupData = useSelector(state => state.signUpReducer)
  const onSubmit = (values,) => {
    if (file == AppImages.profile) {
    
        setImageUpload(AppConstants.upload)
    }
    else {
      var formdata = new FormData();
      formdata.append("firstName", values.fname);
      formdata.append("lastName", values.lname);
      formdata.append("email", values.email);
      formdata.append("password", values.password);
      formdata.append("confirmPassword", values.confirmPassword);
      formdata.append("profile", fileUrl)

      setImageUpload("")
      isInternetConnected(history) &&
      dispatch(signUpAction(formdata, history))
    }
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().matches(/^(\S+$)/, ValidationConstants.newSpace).email(ValidationConstants.valEmail).required(ValidationConstants.reqEmail),
    password: Yup.string().min(6, ValidationConstants.password).matches(/^(\S+$)/, ValidationConstants.space).required(ValidationConstants.reqPassword),
    fname: Yup.string().min(2, ValidationConstants.fname).max(30, ValidationConstants.email).required(ValidationConstants.fName),
    lname: Yup.string().min(2, ValidationConstants.lname).max(30, ValidationConstants.email).required(ValidationConstants.lName),
    confirmPassword: Yup.string().min(6, ValidationConstants.password).matches(/^(\S+$)/, ValidationConstants.confirmSpace).required(ValidationConstants.confirmPassword).oneOf([Yup.ref('password'), null], ValidationConstants.match),
    checkbox: Yup.bool().oneOf([true], ValidationConstants.terms)
  });

  const initialValues = {
    email: '',
    password: '',
    fname: '',
    lname: '',
    confirmPassword: '',
    checkbox: false
  }
  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = ValidationConstants.reqEmail;
    } else if (!/^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-z]+(\.[a-zA-z]{2,8})+$/.test(values.email)) {
      errors.email = ValidationConstants.valEmail;
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validate
  });
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  return (
    <div>
      <Header></Header>

      <section class="welcome_bg">
        <div class="container">
          <div class="middle_content">
            <div class="row common_top">
              <div class="login">
                <form class="contact_us" onSubmit={
                  formik.handleSubmit
                } noValidate="noValidate">
                  <div class="middle_inputs">
                    <h2 class="text-center">{AppConstants.SignUp}</h2>
                    <div class="upload_img">
                      <input type="file" id="pic" accept=".png,.svg,.jpg,.jpeg" onChange={change} style={{ display: "none" }} />
                      <label for="pic">
                        <img src={file} onChange={change} title={title} />
                        <img className="plus_icon" src={AppImages.plus} onClick={change}></img>
                      </label>
                      <div className="image_upload" style={{ color: "#e1acda", fontSize: 15 }}>
                        {imageUpload}
                      </div>
                    </div>

                    <div class="mb-4 inputs">

                      <img src={AppImages.user} alt="user" />
                      <input name="fname" className="form-control" placeholder="Enter First Name" type="fname" onChange={formik.handleChange} value={formik.values.fname} onBlur={(event) =>
                        formik.setFieldValue(event.target.name, event.target.value.trim())} autoComplete="off" maxLength="30" />
                      {formik.errors.fname ? <div className="error">{formik.errors.fname}</div> : null}
                      {/* <input type="text" class="form-control" placeholder="Enter First Name" /> */}
                    </div>
                    <div class="mb-4 inputs">

                      <img src={AppImages.user} alt="user" />
                      <input name="lname" className="form-control" placeholder="Enter Last Name" type="lname" onChange={formik.handleChange} value={formik.values.lname} onBlur={(event) =>
                        formik.setFieldValue(event.target.name, event.target.value.trim())} autoComplete="off" maxLength="30" />
                      {formik.errors.lname ? <div className="error">{formik.errors.lname}</div> : null}
                      {/* <input type="text" class="form-control" placeholder="Enter Last Name" /> */}
                    </div>
                    <div class="mb-4 inputs">

                      <img src={AppImages.mail} alt="inbox" />
                      <input name="email" className="form-control" placeholder="Enter Email Address" type="email" onChange={formik.handleChange} value={formik.values.email} autoComplete="off" onKeyDown={handleKeyDown} />
                      {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                      {/* <input type="text" class="form-control" placeholder="Enter Email Address" /> */}
                    </div>
                    <div class="mb-4 inputs">
                      {/* <!-- <label for="">Email Address</label> --> */}
                      <img src={AppImages.password} alt="password" />
                      <input name="password" className="form-control" placeholder="Enter Password" type="password" onChange={formik.handleChange} value={formik.values.password} onKeyDown={handleKeyDown} />
                      {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                      {/* <input type="password" class="form-control" placeholder="Enter Password" /> */}
                    </div>
                    <div class="mb-4 inputs">
                      {/* <!-- <label for="">Password</label> --> */}
                      <img src={AppImages.password} alt="password" />
                      <input name="confirmPassword" className="form-control" placeholder="Enter Confirm Password" type="password" onChange={formik.handleChange} value={formik.values.confirmPassword} onKeyDown={handleKeyDown} />
                      {formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : null}
                      {/* <input type="password" class="form-control" placeholder="Enter Confirm Password" /> */}
                    </div>

                    <div class="checkedin signup_1">
                      <label class="container" style={{ width: "46%" }}>
                        <a href="TermsConditions" target="_blank" class="text" style={{ fontWeight: 100 }} >
                          {AppConstants.Terms}
                        </a>

                        <input type="checkbox"
                          name="checkbox"
                          onChange={formik.handleChange}
                          value={formik.values.checkbox}
                        />

                        <span name="checkbox" class="checkmark" style={{ left: "0px" }}></span>
                        {formik.errors.checkbox ? <div className="error">{formik.errors.checkbox}</div> : null}
                      </label>

                    </div>
                    <div class="yet_signup text-center mt-4 mb-5">
                      <span>{AppConstants.VerficationLink}</span>
                    </div>
                    <div class="text-center" style={{ marginTop: "40px" }}>
                      {signupData.isLoading ? <button type="submit" class="button-contact common_btn" style={{ width: "20%" }} disabled={signupData.isLoading} > <Spin className="loader"
                        spinning={signupData.isLoading}
                        disabled></Spin></button> :
                        <button type="submit" class="button-contact common_btn" style={{ width: "20%", marginBottom: "15px", marginTop: "8px" }} >{AppConstants.SignUp}</button>
                      }
                    </div>
                    <div class="yet_signup text-center mt-5">
                      <Link to="/Login">{AppConstants.Account}</Link>
                    </div>
                  </div>
                  <div class="circle_img">
                    <img src={AppImages.circle} alt="circle" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default SignUp;