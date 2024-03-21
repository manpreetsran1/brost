import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import AppConstants from "../../Themes/AppConstants";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AppImages from "../../Themes/AppImages";
import { useDispatch, useSelector } from "react-redux";
import { setPassAction, resetPasswordAction } from "../../Redux/Action/AuthenticationAction";
import ValidationConstants from "../../Themes/ValidationConstants";
import { Spin } from 'antd';
import { isInternetConnected } from "../InternetConnection";

function ResetPassword() {
    document.title = "Reset Password"
    const dispatch = useDispatch()
    const history = useHistory()
    const [userId, setUserId] = useState()

    const newData = useSelector(state => state.setPassReducer)
    const authData = useSelector(state => state.resetPassReducer)

    useEffect(() => {
        let query = window.location.search
        console.log("window.location", query)
        query = new URLSearchParams(window.location.search).get("userId")
        setUserId(query)
        console.log(query)
        dispatch(resetPasswordAction(query))
        console.log(query, "reset")
    }, [])

    const onSubmit = (values) => {
        var formdata = new FormData()
        formdata.append("password", values.password);
        console.log(userId, "userid", values.password)
        isInternetConnected(history) &&
            dispatch(setPassAction(userId, formdata, history))
    }

    const validationSchema = Yup.object().shape({
        password: Yup.string().min(6, ValidationConstants.password).matches(/^(\S+$)/, ValidationConstants.space).required(ValidationConstants.reqPassword),
        confirmPassword: Yup.string().min(6, ValidationConstants.password).matches(/^(\S+$)/, ValidationConstants.confirmSpace).required(ValidationConstants.confirmPassword).oneOf([Yup.ref('password'), null], ValidationConstants.match)
    });

    const initialValues = {
        password: '',
        confirmPassword: ''
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });
    const handleKeyDown = (e) => {
        if (e.key === " ") {
            e.preventDefault();
        }
    };
    console.log(authData.urlStatus)
    return (
        <div>
            <section class="welcome_bg ">
                <div class="container">
                    <div class="middle_content">
                        <div class="row common_top">
                            <div class="login">
                                {!authData.urlStatus ?
                                    <div class="row common_top">
                                        <div class="login" style={{ width: "94%" }}>
                                            <form class="contact_us newContact raise-dispute">
                                                <div class="text_contain">

                                                    <div class="div_line">

                                                        <p>{AppConstants.expired}</p>
                                                    </div>

                                                    <div class="circle_img">
                                                        <img className="contactUsImage" src={AppImages.circle} alt="circle" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div></div>
                                    :
                                    !newData.passwordSuccess ?
                                        <form class="contact_us newContact" onSubmit={formik.handleSubmit}>
                                            <div class="middle_inputs">
                                                <h2 class="text-center" style={{ marginBottom: "79px", fontSize: "27px" }}>{AppConstants.resetPassword}</h2>

                                                <div class="mb-4 inputs">

                                                    <img src={AppImages.password} alt="text" />
                                                    <input name="password" placeholder="Enter Password" className="form-control" type="password" onChange={formik.handleChange} value={formik.values.password} onKeyDown={handleKeyDown} />
                                                    {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                                                </div>
                                                <div class="mb-4 inputs">

                                                    <img src={AppImages.password} alt="text" />
                                                    <input name="confirmPassword" placeholder="Enter Confirm Password" className="form-control" type="password" onChange={formik.handleChange} value={formik.values.confirmPassword} onKeyDown={handleKeyDown} />
                                                    {formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : null}
                                                </div>
                                                <div class="text-center" style={{ marginTop: "90px", display: "flex", justifyContent: "center" }}>
                                                    {newData.isLoading ? <button type="submit" class="button-contact common_btn" style={{ width: "20%" }} disabled={newData.isLoading} > <Spin className="loader"
                                                        spinning={newData.isLoading}
                                                        disabled></Spin></button> :
                                                        <button type="submit" class="button-contact common_btn" style={{ width: "140px" }} >{AppConstants.Update}</button>
                                                    }
                                                </div>

                                                <div class="circle_img Proposal_circle">
                                                    <img src={AppImages.circle} alt="circle" style={{ width: "211px" }} />
                                                </div>
                                            </div>
                                        </form> :
                                        <div class="row common_top">
                                            <div class="login" style={{ width: "94%" }}>
                                                <form class="contact_us newContact raise-dispute">
                                                    <div class="text_contain">
                                                        <img src={AppImages.thanku} width="90" />
                                                        <div class="div_line">

                                                            <p>{AppConstants.passwordChange}</p>
                                                        </div>
                                                        <div class="text-center" style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
                                                            <button type="button" class="button-contact common_btn" style={{ width: "140px" }} onClick={() => history.push("/")}>{AppConstants.home}</button>

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

        </div>
    )
}

export default ResetPassword;