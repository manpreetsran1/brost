import React from "react";
import Footer from "../../CustomComponents/Footer";
import Header from "../../CustomComponents/Header"
import AppConstants from "../../Themes/AppConstants";
import AppImages from "../../Themes/AppImages";

function Work(){
   document.title="Settings"
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
      size9:"bold"
    }
    return(
        <div>
            <Header {...propsData}></Header>
<section class="welcome_bg">
         <div class="container">
         <div class="middle_content">
            <div class="row common_top">
               <div class="login Login_margin">
                  <form class="contact_us contact_line">
                     <div class="middle_inputs">
                        <h2 class="text-center" style={{marginBottom:"30px"}}>{AppConstants.work}</h2>
                       
                        <div class="new_how">
                           <p>{AppConstants.para1}
                           </p>
                           <p>
                              {AppConstants.para2}
                           </p>
                           <p>
                              {AppConstants.para1}
                              <br></br>
                              {AppConstants.para3}
                           </p>
                        </div>
                        <div class="circle_img Proposal_circle">
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

export default Work;