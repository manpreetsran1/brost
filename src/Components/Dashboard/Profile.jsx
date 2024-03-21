import React from "react";
import Footer from "../../CustomComponents/Footer";
import Header from "../../CustomComponents/Header";
import {useHistory} from "react-router-dom"
import AppImages from "../../Themes/AppImages";

function Profile() {
  document.title = "Settings"
  const history=useHistory()
  const propsData = {
    link1: "white",
    link2: "white",
    link3: "white",
    link4: "white",
    link4: "#fff",
    link5: "#fff",
    link6: "#fff",
    link7: "white",
    link8: "#9a75c7",
    linkd8: "underline",
    size9:"bold"
  }
  return (
    <div>
      <Header {...propsData}></Header>
      <section class="welcome_bg">
        <div class="container">
          <div class="middle_content">
            <div class="row common_top">
              <div class="login Login_margin">
                <form class="contact_us contact_line">
                  <div class="middle_inputs">
                    <h2 class="text-center" style={{ marginBottom: "30px" }}>Profile</h2>
                    <div class="text-center" style={{ marginBottom: "30px" }}>
                      <img src={AppImages.imgLine} width="100" style={{ border: "2px solid #6e1fae", borderRadius: "100%" }} />
                    </div>
                    <div class="text-details profile">
                      <div class="first_details">
                        <p class="first_view">First Name:</p>
                        <p class="second_view">Deniel</p>
                      </div>
                      <div class="first_details">
                        <p class="first_view">Last Name:</p>
                        <p class="second_view">Singh</p>
                      </div>
                      <div class="first_details">
                        <p class="first_view">Email Address:</p>
                        <p class="second_view">denielSingh@yopmail.com</p>
                      </div>


                    </div>
                    <div class="text-center sign_button" style={{ marginTop: "60px" }}>
                     
                        <button type="button" class="button-contact common_btn" style={{ width: "12%" }} onClick={()=>history.push("/EditProfile")}>Edit</button>
                     
                    </div>
                    <div class="Proposal_circle img">
                      <img src={AppImages.circle} alt="circle" />
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

export default Profile;