import React, { useState } from "react";
import Footer from "../../CustomComponents/Footer"
import HomeHeader from "../../CustomComponents/HomeHeader";
import { useHistory } from "react-router-dom"
import AppConstants from "../../Themes/AppConstants";
import AppImages from "../../Themes/AppImages";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { forgetPassAction } from "../../Redux/Action/AuthenticationAction"
import { useDispatch, useSelector } from "react-redux";
import { Spin } from 'antd';
import ValidationConstants from "../../Themes/ValidationConstants";
import { isInternetConnected } from "../InternetConnection";

function ForgotPassword() {
   document.title = "Forgot Password"
   const history = useHistory()
   const dispatch = useDispatch()
   const [disable, setDisable] = useState(true)
   const newData = useSelector(state => state.forgotPassReducer)

   const onSubmit = (values) => {
      var formdata = new FormData();
      formdata.append("email", values.email);
      isInternetConnected(history) &&
         dispatch(forgetPassAction(formdata, history))
   }

   const validationSchema = Yup.object().shape({
      email: Yup.string().matches(/^(\S+$)/, ValidationConstants.newSpace).email(ValidationConstants.valEmail).required(ValidationConstants.reqEmail),
   });

   const initialValues = {
      email: '',
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

   const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit,
      validate
   });
   const handleKeyDown = (e) => {
      if (e.key === " " ) {
        e.preventDefault();
      }
    };
  

   return (
      <div>
         <HomeHeader></HomeHeader>
         <section class="welcome_bg">
            <div class="container">
               <div class="middle_content">
                  <div class="row common_top">
                     <div class="login">
                        <form class="contact_us" style={{ padding: "35px 54px" }} onSubmit={formik.handleSubmit} noValidate="noValidate">
                           <div class="middle_inputs">
                              <div class="arrow_logo">

                                 <img src={AppImages.arrow1} alt="arrow" style={{ width: "14px" }} onClick={() => history.push("/Login")} />

                                 <h2 class="text-center">{AppConstants.ForgotPass}</h2>
                              </div>
                              <div class="mb-4 inputs">

                                 <img src={AppImages.mail} alt="inbox" />
                                 <input name="email" placeholder="Enter Email Address" className="form-control" type="email" onChange={formik.handleChange} value={formik.values.email} autocomplete="off" onKeyDown={handleKeyDown}/>
                                 {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                                 {/* <input type="email" class="form-control" placeholder={AppConstants.placeholder1} /> */}
                              </div>
                              <div class="text-center forgot_pass" style={{ marginTop: "42px", marginBottom: "43px", textAlign: "center" }}>
                                 <div class="yet_signup text-center mt-4 mb-5">
                                    <span>{AppConstants.linkVerification}</span>
                                 </div>
                              </div>
                              <div class="text-center" style={{ marginTop: "30px" }}>
                                 {newData.isLoading ? <button type="submit" class="button-contact common_btn" style={{ width: "20%" }} disabled={newData.isLoading} > <Spin className="loader"
                                    spinning={newData.isLoading}
                                 ></Spin ></button> :
                                    <button type="submit" class="button-contact common_btn" >{AppConstants.Send}</button>
                                 }
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
   )
}

export default ForgotPassword;