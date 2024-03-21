import React from "react";
import Footer from "../../CustomComponents/Footer";
import Header from "../../CustomComponents/Header";
import AppConstants from "../../Themes/AppConstants";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ValidationConstants from "../../Themes/ValidationConstants";
import AppImages from "../../Themes/AppImages";

function ChangePassword() {
    document.title = "Settings"

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

    const onSubmit = (values) => {
        // formdata.append("firstName", values.fname);
        // formdata.append("lastName", values.lname);
        // formdata.append("email", values.email);
        // formdata.append("password", values.password);
        // formdata.append("confirmPassword", values.confirmPassword);
        // formdata.append("profile",fileUrl)
        // dispatch(signUpAction(formdata, history))
    } 

    const validationSchema = Yup.object().shape({
        oldPassword: Yup.string().min(2,ValidationConstants.password).matches(/^(\S+$)/, ValidationConstants.space).required(ValidationConstants.reqPassword),
        newPassword: Yup.string().min(2,ValidationConstants.password).matches(/^(\S+$)/, ValidationConstants.space).required(ValidationConstants.reqPassword),
        confirmPassword: Yup.string().min(2,ValidationConstants.password).matches(/^(\S+$)/, ValidationConstants.confirmSpace).required(ValidationConstants.confirmPassword).oneOf([Yup.ref('newPassword'), null], ValidationConstants.match),

    });

    const initialValues = {
        oldPassword: "",
        newPassword: '',
        confirmPassword: '',

    }
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,

    });
    return (
        <div>
            <Header {...propsData}></Header>
            <section class="welcome_bg">
                <div class="container">
                    <div class="middle_content">
                        <div class="row common_top">
                            <div class="login">
                                <form class="contact_us" onSubmit={formik.handleSubmit} noValidate="noValidate">
                                    <div class="middle_inputs">
                                        <h2 class="text-center" style={{ marginBottom: "79px", fontSize: "27px" }}>{AppConstants.changePass}</h2>
                                        <div class="mb-4 inputs">
                                            {/* <!-- <label for="">Email Address</label> --> */}
                                            <img src={AppImages.password} alt="text" />
                                            <input name="oldPassword" className="form-control" placeholder="Enter Old Password" type="password" onChange={formik.handleChange} value={formik.values.oldPassword} />
                                            {formik.errors.oldPassword ? <div className="error">{formik.errors.oldPassword}</div> : null}
                                        </div>
                                        <div class="mb-4 inputs">
                                            {/* <!-- <label for="">Email Address</label> --> */}
                                            <img src={AppImages.password} alt="text" />
                                            <input name="newPassword" className="form-control" placeholder="Enter New Password" type="password" onChange={formik.handleChange} value={formik.values.newPassword} />
                                            {formik.errors.newPassword ? <div className="error">{formik.errors.newPassword}</div> : null}
                                        </div>
                                        <div class="mb-4 inputs">
                                            {/* <!-- <label for="">Email Address</label> --> */}
                                            <img src={AppImages.password} alt="text" />
                                            <input name="confirmPassword" className="form-control" placeholder="Enter Confirm Password" type="password" onChange={formik.handleChange} value={formik.values.confirmPassword} />
                                            {formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : null}
                                        </div>
                                        <div class="text-center" style={{ marginTop: "90px", display: "flex", justifyContent: "center" }}>

                                            <button type="submit" class="button-contact common_btn" style={{ width: "140px" }} >{AppConstants.Update}</button>

                                        </div>

                                        <div class="circle_img Proposal_circle">
                                            <img src={AppImages.circle} alt="circle" style={{ width: "211px" }} />
                                        </div>
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

export default ChangePassword;