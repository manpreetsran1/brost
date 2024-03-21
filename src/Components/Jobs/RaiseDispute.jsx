import React, { useState } from "react";
import Footer from "../../CustomComponents/Footer";
import Header from "../../CustomComponents/Header";
import {useHistory} from "react-router-dom"
import AppImages from "../../Themes/AppImages";

function RaiseDispute(){
  const history=useHistory()
  const propsData={
    link1:"white",
    link2:"white",
    link3:"white",
    link4:"white",
    link4:"#fff",
    link5:"#9a75c7",
    link6:"#fff",
    link7:"#fff",
    linkd5:"underline",
    size5:"bold"
}
    return(
        <div>
<Header {...propsData}></Header>
<section class="welcome_bg">
  <div class="container">
    <div class="middle_content">  
      <div class="row common_top">
        <div class="login">
          <form class="contact_us">
            <div class="middle_inputs">
              <h2 class="text-center" style={{marginBottom:"70px"}}>Raise Dispute</h2>
              <div class="mb-4 inputs">
                {/* <!-- <label for="">Email Address</label> --> */}
                <img src={AppImages.title} alt="text" />
                <input type="text" class="form-control" placeholder="Enter Title" />
              </div>
              <div class="mb-4 inputs">
                {/* <!-- <label for="">Email Address</label> --> */}
                <img src={AppImages.description} alt="des" />
                {/* <!-- <input type="text" class="form-control" placeholder="Enter Last Name" /> --> */}
                
                <textarea name="" id="" rows="4" class="form-control" placeholder="Enter Description" ></textarea>
              
              </div>
              <div class="text-center" style={{marginTop:"110px",display:"flex",justifyContent:"center"}}>
                
               
                  <button type="button" class="button-contact common_btn" style={{width:"140px"}} onClick={()=>history.push("/DisputeMessage")}>Submit</button>
               
              </div>
            
            <div class="circle_img raise_d">
              <img src={AppImages.circle} alt="circle" style={{width:"211px"}}/>
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

export default RaiseDispute;