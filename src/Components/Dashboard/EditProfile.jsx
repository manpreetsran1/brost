import React,{useState} from "react";
import Footer from "../../CustomComponents/Footer";
import Header from "../../CustomComponents/Header";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link,useHistory } from "react-router-dom"
import AppImages from "../../Themes/AppImages";
import ValidationConstants from "../../Themes/ValidationConstants";

function EditProfile(){
document.title="Settings"
const history=useHistory()
const[title,setTitle]=React.useState("Click to upload image")
const propsData={
  link1:"white",
  link2:"white",
  link3:"white",
  link4:"white",
  link4:"#fff",
  link5:"#fff",
  link6:"#fff",
  link7:"#fff",
  link8:"#9a75c7",
  linkd8:"underline",
  size9:"bolder"
}
const onSubmit = (values) => {
  // var formdata = new FormData();
  // formdata.append("firstName", values.fname);
  // formdata.append("lastName", values.lname);
  // formdata.append("email", values.email);
  // formdata.append("profile",fileUrl)
  // dispatch(signUpAction(formdata, history))
}

const validationSchema = Yup.object().shape({
  email: Yup.string().matches(/^(\S+$)/, ValidationConstants.newSpace).email(ValidationConstants.valEmail).required(ValidationConstants.reqEmail),
  fname: Yup.string().min(2,"First Name should be atleast 2 characters long.").matches(/^(\S+$)/, ValidationConstants.newSpace).max(30, ValidationConstants.email).required(ValidationConstants.fName),
  lname: Yup.string().min(2,"Last Name should be atleast 2 characters long.").matches(/^(\S+$)/, ValidationConstants.newSpace).max(30, ValidationConstants.email).required(ValidationConstants.lName),
  
});

const initialValues = {
  email: 'denielSingh@yopmail.com',
  fname: 'Deniel',
  lname: 'Singh',
  
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
let [file, setFile] = useState(AppImages.man)
  const [fileUrl, setFileUrl] = useState("")

const formik = useFormik({
  initialValues,
  validationSchema,
  onSubmit,
  validate
});
const imageValidation=(value)=>{
  let fileTypes=["jpg","jpeg","svg","png"]
 console.log(value,"extension")
 return (fileTypes.indexOf(value) > -1)
}

const change = (e) => {
  if (e.target.files && e.target.files[0]) {
  let uploadFile=e.target.files[0]
  let extension=uploadFile.name.split(".").pop().toLowerCase()
  let isSuccess=imageValidation(extension)
  if(isSuccess){
    setFile(URL.createObjectURL(e.target.files[0]))
    setFileUrl(e.target.files[0])
  }
  else{
    alert("'Only jpg, jpeg, png and svg formats are supported'")
  } 
  }
}

    return(
        <div>
<Header {...propsData}></Header>
<section class="welcome_bg">
  <div class="container">
    <div class="middle_content">  
      <div class="row common_top">
        <div class="login">
          <form class="contact_us" onSubmit={formik.handleSubmit} noValidate="noValidate">
            <div class="middle_inputs">
              <h2 class="text-center">Edit Profile</h2>
              <div class="upload_img">
                      <input type="file" id="pic" accept=".png,.svg,.jpg,.jpeg" onChange={change} style={{ display: "none" }} />
                      <label for="pic">
                        <img src={file}  onChange={change} title={title} />
                        <img  className="plus_icon" src={AppImages.plus} onClick={change}></img>
                      </label>
                      
                    </div>
              <div class="mb-4 inputs">
                {/* <!-- <label for="">Email Address</label> --> */}
                <img src={AppImages.user} alt="user" />
                <input name="fname" className="form-control" placeholder="Enter First Name" type="fname" onChange={formik.handleChange} value={formik.values.fname} autoComplete="off" maxLength="30" />
                      {formik.errors.fname ? <div className="error">{formik.errors.fname}</div> : null}
              </div>
              <div class="mb-4 inputs">
                {/* <!-- <label for="">Email Address</label> --> */}
                <img src={AppImages.user} alt="user" />
                <input name="lname" className="form-control" placeholder="Enter Last Name" type="lname" onChange={formik.handleChange} value={formik.values.lname} autoComplete="off" maxLength="30" />
                      {formik.errors.lname ? <div className="error">{formik.errors.lname}</div> : null}
              </div>
              <div class="mb-4 inputs">
                {/* <!-- <label for="">Email Address</label> --> */}
                <img src={AppImages.mail} alt="inbox" />
                <input name="email" className="form-control" placeholder="Enter Email Address" type="email" onChange={formik.handleChange} value={formik.values.email} autoComplete="off"  />
                      {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
              </div>
              
              <div class="text-center" style={{marginTop:"70px"}}>
               
                  <button type="submit" class="button-contact common_btn" style={{width:"20%"}} >Update</button>
               
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

export default EditProfile;