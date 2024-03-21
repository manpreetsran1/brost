import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import AppImages from "../../Themes/AppImages";
import AppConstants from "../../Themes/AppConstants";
import Footer from "../../CustomComponents/Footer";
import { loginAction, signUpAction } from "../../Redux/Action/AuthenticationAction";
import ValidationConstants from "../../Themes/ValidationConstants";
import 'react-toastify/dist/ReactToastify.css';
import { Spin } from 'antd';
import { isInternetConnected } from "../InternetConnection";
import HomeHeader from "../../CustomComponents/HomeHeader";

function Login() {
    document.title = "Login"
    const authData = useSelector(state => state.loginReducer)
    console.log("reducer", authData)
    const history = useHistory()
    const dispatch = useDispatch()
    const [selected, setSelected] = React.useState(1);

    const onSubmit = (values) => {
        // formdata.append("email", values.email);
        // formdata.append("password", values.password);
        let formdata={
            "name":values?.name,
            "email":values?.email,
            "password":values?.password
        }
        if(selected!==1){
            isInternetConnected(history) &&
            dispatch(signUpAction(formdata, history))
        }
        else{

            isInternetConnected(history) &&
                dispatch(loginAction(formdata, history))
                // history.push('/HomeClubbox')
        }
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(ValidationConstants.name),
        email: Yup.string().matches(/^(\S+$)/, ValidationConstants.newSpace).email(ValidationConstants.valEmail).required(ValidationConstants.reqEmail),
        password: Yup.string().matches(/^(\S+$)/, ValidationConstants.space).required(ValidationConstants.reqPassword)
    });

    const initialValues = {
        email: '',
        password: '',
        name: ''
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
        // validationSchema,
        onSubmit,
        validate
    });

    useEffect(() => {
        if (localStorage.token) {
            history.push("/HomeClubbox")
        }
    }, [])
    const handleKeyDown = (e) => {
        if (e.key === " ") {
            e.preventDefault();
        }
    };



    return (
        <div>
            {/* <HomeHeader></HomeHeader> */}
            <div style={{ position: "absolute", top: 0, width: "100%" }}>
            <HomeHeader></HomeHeader>
          </div>
            <section class="welcome_bg">
                <div class="container">
                    <div class="middle_content">
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                            <button
                            onClick={()=>setSelected(1)}
                            style={{color:selected==1?'#fff':'#000',backgroundColor:selected==1?'#f56c9b':'white',paddingLeft:'2vw',paddingRight:'2vw',paddingTop:'1vh',borderRadius:'2vw',paddingBottom:'1vh'}}>Signin</button>
                            <button 
                            onClick={()=>setSelected(2)}
                            style={{color:selected==2?'#fff':'#000',backgroundColor:selected==2?'#f56c9b':'white',paddingLeft:'2vw',paddingRight:'2vw',paddingTop:'1vh',borderRadius:'2vw',paddingBottom:'1vh'}}>Signup</button>
                        </div>
                        <div class="row common_top" >
                           {selected==2? <div class="login">
                                <form class="contact_us" onSubmit={formik.handleSubmit} noValidate="noValidate">
                                    <div class="middle_inputs" >

                                        <h2 class="text-center" style={{ marginBottom: "80px" }}>{'Sign Up'}</h2>

                                        <div class="mb-4 inputs">

                                            <img src={AppImages.user} alt="inbox" />
                                            <input name="name" placeholder="Enter Name" className="form-control" type="name" onChange={formik.handleChange} value={formik.values.name} autocomplete="off" onKeyDown={handleKeyDown} />
                                            {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                                            {/* <input type="email" class="form-control" placeholder={AppConstants.placeholder1} /> */}
                                        </div>

                                        <div class="mb-4 inputs">

                                            <img src={AppImages.mail} alt="inbox" />
                                            <input name="email" placeholder="Enter Email Address" className="form-control" type="email" onChange={formik.handleChange} value={formik.values.email} autocomplete="off" onKeyDown={handleKeyDown} />
                                            {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                                            {/* <input type="email" class="form-control" placeholder={AppConstants.placeholder1} /> */}
                                        </div>
                                        <div class="mb-4 inputs">

                                            <img src={AppImages.password} alt="password" />
                                            <input name="password" placeholder="Enter Password" className="form-control" type="password" onChange={formik.handleChange} value={formik.values.password} onKeyDown={handleKeyDown} />
                                            {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                                            {/* <input type="password" class="form-control" placeholder={AppConstants.placeholder2} /> */}
                                        </div>



                                        <div class="text-center" style={{ marginTop: "30px", marginBottom: "34px" }}>
                                            {authData.isLoading ? <button type="submit" class="button-contact common_btn" style={{ width: "20%" }} disabled={authData.isLoading}  > <Spin className="loader"
                                                spinning={authData.isLoading}
                                                disabled></Spin></button> :
                                                <button type="submit" class="button-contact common_btn" style={{}} >
                                                    {'Create Account'}</button>

                                            }
                                        </div>
                                        <div >

                                        </div>

                                    </div>
                                    <div class="circle_img">
                                        <img src={AppImages.circle} alt="circle" />
                                    </div>
                                </form>


                            </div>
                            :
                            <div class="login">
                                <form class="contact_us" onSubmit={formik.handleSubmit} noValidate="noValidate">
                                    <div class="middle_inputs" >

                                        <h2 class="text-center" style={{ marginBottom: "80px" }}>{'Sign In'}</h2>

                                        <div class="mb-4 inputs">

                                            <img src={AppImages.mail} alt="inbox" />
                                            <input name="email" placeholder="Enter Email Address" className="form-control" type="email" onChange={formik.handleChange} value={formik.values.email} autocomplete="off" onKeyDown={handleKeyDown} />
                                            {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                                            {/* <input type="email" class="form-control" placeholder={AppConstants.placeholder1} /> */}
                                        </div>
                                        <div class="mb-4 inputs">

                                            <img src={AppImages.password} alt="password" />
                                            <input name="password" placeholder="Enter Password" className="form-control" type="password" onChange={formik.handleChange} value={formik.values.password} onKeyDown={handleKeyDown} />
                                            {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                                            {/* <input type="password" class="form-control" placeholder={AppConstants.placeholder2} /> */}
                                        </div>

                                        <div class="text-center forgot_text">

                                            <Link to="ForgotPassword" className="forgot">{AppConstants.ForgetPass}</Link>
                                        </div>

                                        <div class="text-center" style={{ marginTop: "30px", marginBottom: "34px" }}>
                                            {authData.isLoading ? <button type="submit" class="button-contact common_btn" style={{ width: "20%" }} disabled={authData.isLoading}  > <Spin className="loader"
                                                spinning={authData.isLoading}
                                                disabled></Spin></button> :
                                                <button type="submit" class="button-contact common_btn" style={{ width: "20%" }} >
                                                    {AppConstants.login}</button>

                                            }
                                        </div>
                                        <div >

                                        </div>

                                    </div>
                                    <div class="circle_img">
                                        <img src={AppImages.circle} alt="circle" />
                                    </div>
                                </form>


                            </div>}
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default Login;