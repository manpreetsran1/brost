import React from "react";
import AppConstants from "../../Themes/AppConstants";
import AppImages from "../../Themes/AppImages";
import {useHistory} from "react-router-dom"

function TermsConditions() {
    document.title="Terms and Conditions"
    const history=useHistory()
    return (
        <div>
      
            <section class="welcome_bg">
                <div class="container">
                    <div class="middle_content">
                        <div class="row common_top">
                            <div class="login Login_margin">
                                <form class="contact_us contact_line">
                                    <div class="middle_inputs">
                                    
                                        <h2 class="text-center" style={{ marginBottom: "30px" }}>Terms and Conditions</h2>
                                    
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
           
        </div>
    )
}

export default TermsConditions;