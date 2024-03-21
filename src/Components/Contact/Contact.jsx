import React, { useEffect } from "react";
import Footer from "../../CustomComponents/Footer";
import HomeHeader from "../../CustomComponents/HomeHeader";
import Header from "../../CustomComponents/Header"
import { useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AppImages from "../../Themes/AppImages";
import AppConstants from "../../Themes/AppConstants";
import { contactAction, resetAction } from "../../Redux/Action/ContactAction";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from 'antd';
import ValidationConstants from "../../Themes/ValidationConstants";
import {isInternetConnected}  from "../InternetConnection";

function Contact() {
  if(localStorage.token){
    document.title="Settings"
  }
  else{
    document.title= "Contact Us"
  }
  const dispatch = useDispatch()
  const history = useHistory()
  const propsData = {
    link1: "white",
    link2: "white",
    link3: "white",
    link4: "#fff",
    link5: "#fff",
    link6: "#fff",
    link7: "#fff",
    link8: "#9a75c7",
    linkd8: "underline",
    size9: "bold"
  }
  useEffect(() => {
    isInternetConnected(history) &&
    dispatch(resetAction())
  }, [])

  const contactData = useSelector(state => state.contactReducer)
  const onSubmit = (values) => {
    var formdata = new FormData();
    formdata.append("name", values.name);
    formdata.append("email", values.email);
    formdata.append("description", values.description);
    isInternetConnected(history) &&
    dispatch(contactAction(formdata, history))

  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().matches(/^(\S+$)/, ValidationConstants.newSpace).min(2,"Name should be at least 2 characters long.").max(30, ValidationConstants.email).required(ValidationConstants.name),
    email: Yup.string().matches(/^(\S+$)/, ValidationConstants.newSpace).email(ValidationConstants.valEmail).required(ValidationConstants.reqEmail),
    description: Yup.string().min(2,"Description should be at least 2 characters long.").max(1000, ValidationConstants.description).required(ValidationConstants.valDescription)
  });

  const initialValues = {
    name: '',
    email: '',
    description: ''
  }
  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Please enter email address.';
    } else if (!/^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-z]+(\.[a-zA-z]{2,8})+$/.test(values.email)) {
      errors.email = ValidationConstants.valEmail;
    }
  
    return errors;
  };
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };
  
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validate
  });
  console.log(contactData.contactSuccess)
  return (
    <div>
     {localStorage.token ?
        <Header {...propsData} /> :
        <HomeHeader></HomeHeader>
     }
      <section class="welcome_bg">
        <div class="container">
          <div class="middle_content">
            <div class="row common_top">
              <div class="login">
                {!contactData.contactSuccess ?
                  <form class="contact_us" onSubmit={formik.handleSubmit} noValidate="noValidate">
                    <div class="middle_inputs">
                      <h2 class="text-center" style={{ marginBottom: "70px" }}>{AppConstants.contact}</h2>
                      <div class="mb-4 inputs">
                        <img src={AppImages.user} alt="text" />
                        <input name="name" placeholder="Enter Name" className="form-control" type="name" onChange={formik.handleChange} value={formik.values.name} autocomplete="off" maxLength="30" onBlur={(event) =>
                        formik.setFieldValue(event.target.name, event.target.value.trim())}/>
                        {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                      </div>
                      <div class="mb-4 inputs">
                        <img src={AppImages.mail} alt="text" />
                        <input name="email" placeholder="Enter Email Address" className="form-control" type="email" onChange={formik.handleChange} value={formik.values.email} autocomplete="off"  onKeyDown={handleKeyDown}/>
                        {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                      </div>
                      <div class="mb-4 inputs">

                        <img src={AppImages.description} alt="des" />

                        <textarea name="description" placeholder="Enter Description" className="form-control" type="description" onChange={formik.handleChange} value={formik.values.description} autocomplete="off" maxLength="1000" onBlur={(event) =>
                        formik.setFieldValue(event.target.name, event.target.value.trim())}/>
                        {formik.errors.description ? <div className="error">{formik.errors.description}</div> : null}

                      </div>
                      <div class="text-center" style={{ marginTop: "85px", display: "flex", justifyContent: "center" }}>

                        {contactData.isLoading ? <button type="submit" class="button-contact common_btn" style={{ width: "20%" }} disabled={contactData.isLoading} > <Spin className="loader"
                          spinning={contactData.isLoading}
                          disabled></Spin></button> :
                          <button type="submit" class="button-contact common_btn" style={{ width: "140%" }} >{AppConstants.submit}</button>
                        }
                      </div>

                      <div class="circle_img Proposal_circle">
                        <img src={AppImages.circle} alt="circle" style={{ width: "190px" }} />
                      </div>
                    </div>
                  </form> :
                  <div class="row common_top">
                    <div class="login" style={{ width: "94%" }}>
                      <form class="contact_us raise-dispute">
                        <div class="text_contain">
                          <img src={AppImages.thanku} width="90" />
                          <div class="div_line">
                            <p>{AppConstants.thankyou}</p>
                            <p>{AppConstants.feedback}</p>
                          </div>
                          <div class="text-center" style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>


                            <button type="button" class="button-contact common_btn" style={{ width: "140px" }} onClick={() => history.push("/Dashboard")}>{AppConstants.home}</button>

                          </div>
                          <div class="circle_img">
                            <img className="contactUsImage" src={AppImages.circle} alt="circle" />
                          </div>
                        </div>
                      </form>
                    </div></div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Contact;