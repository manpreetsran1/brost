import React, { useState } from "react";
import Footer from "../../CustomComponents/Footer";
import Header from "../../CustomComponents/Header";
import {useHistory} from "react-router-dom"
import AppImages from "../../Themes/AppImages";
import AppConstants from "../../Themes/AppConstants";

function DisputeMessage() {
  document.title = "Raise Dispute"
  const history=useHistory()
  const propsData = {
    link1: "white",
    link2: "white",
    link3: "white",
    link4: "white",
    link4: "#fff",
    link5: "#9a75c7",
    link6: "#fff",
    link7: "#fff",
    linkd5: "underline",
    size5:"bold"
  }
  return (
    <div>
      <Header {...propsData}></Header>
      <section class="welcome_bg">
        <div class="container">
          <div class="middle_content">
            <div class="row common_top">
              <div class="login" style={{ width: "94%" }}>
                <form class="contact_us raise-dispute">
                  <div class="text_contain">
                    <img src={AppImages.thanku} width="90" />
                    <div class="div_line">
                      <p>{AppConstants.disputeMessage}</p>
                      <p>{AppConstants.feedback}</p>
                    </div>
                    <div class="text-center" style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>

                      
                        <button type="button" class="button-contact common_btn" style={{ width: "140px" }} onClick={()=>history.push("/Home")}>{AppConstants.home}</button>
                     
                    </div>
                    <div class="circle_img">
                      <img className="contactUsImage" src={AppImages.circle} alt="circle"  />
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

export default DisputeMessage;