import React from "react";
import Footer from "../../CustomComponents/Footer";
import Header from "../../CustomComponents/Header";
import {Link} from "react-router-dom"
import AppImages from "../../Themes/AppImages";

function RecentMessage() {
   document.title = "Messages"
   const propsData = {
      link1: "white",
      link2: "white",
      link3: "white",
      link4: "white",
      link4: "#fff",
      link5: "white",
      link6: "#fff",
      link7: "#9a75c7",
      linkd7: "underline",
      size7: "bold"
   }
   return (
      <div>
         <Header {...propsData}></Header>
         <section class="welcome_bg">
            <div class="container">
               <div class="middle_content">
                  <div class="row common_top">
                     <div class="login" style={{ width: "95%" }}>
                        <div class="contact_us message">
                           <div class="upper_content">
                              <h6>Recent Entertainers </h6>
                           </div>
                           <div class="Wrapper_text" style={{ height: "570px" }}>

                              <div class="left_message">
                                 <Link to="/Message">
                                    <div class="first_meassge">
                                       <img src={AppImages.man} />
                                       <div class="line_element_do">
                                          <h5>Deniel</h5>
                                          <p>Lorem Ipsum is simply dummy dfd...</p>
                                       </div>
                                    </div>
                                    <div class="first_meassge">
                                       <img src={AppImages.man} />
                                       <div class="line_element_do">
                                          <h5>Deniel</h5>
                                          <p>Lorem Ipsum is simply dummy dfd...</p>
                                       </div>
                                    </div>
                                    <div class="first_meassge">
                                       <img src={AppImages.man} />
                                       <div class="line_element_do">
                                          <h5>Deniel</h5>
                                          <p>Lorem Ipsum is simply dummy dfd...</p>
                                       </div>
                                    </div>
                                    <div class="first_meassge">
                                       <img src={AppImages.man} />
                                       <div class="line_element_do">
                                          <h5>Deniel</h5>
                                          <p>Lorem Ipsum is simply dummy dfd...</p>
                                       </div>
                                    </div>
                                    <div class="first_meassge">
                                       <img src={AppImages.man} />
                                       <div class="line_element_do">
                                          <h5>Deniel</h5>
                                          <p>Lorem Ipsum is simply dummy dfd...</p>
                                       </div>
                                    </div>
                                 </Link>

                              </div>
                              <div class="text_get" style={{ width: "100%", display: "flex" }}>
                                 <div class="messages_line_right" >
                                    <div class="smile_text">
                                       <img src={AppImages.smile} width="80px" />
                                       <h3>No Conversation Yet</h3>
                                    </div>

                                 </div>
                              </div>

                           </div>


                           <div class="circle_img">
                              <img src={AppImages.circle} alt="circle" style={{ width: "211px" }} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>


         </section>

         <Footer></Footer>
      </div>
   )
}

export default RecentMessage;