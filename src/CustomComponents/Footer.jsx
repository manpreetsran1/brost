import React from "react";
import {useHistory,Link} from "react-router-dom"
import AppConstants from "../Themes/AppConstants";
import AppImages from "../Themes/AppImages";

function Footer(){
  const history=useHistory()
return(
    <div>

<footer>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="social_icons">
          <h5>{AppConstants.follow}</h5>
          <ul class="d-flex justify-content-left" style={{listStyleType:"none",marginBottom:0,marginTop:"22px"}}>
            <li class="icons fb_icon" data-toggle="tooltip" data-placement="bottom" title="Facebook">
              <a href="https://www.facebook.com/">
                <img src={AppImages.facebook} alt="fb" />
              </a>
            </li>
            <li class="icons" data-toggle="tooltip" data-placement="bottom" title="Instagram">
              <a href="https://www.instagram.com/accounts/login/">
                <img src={AppImages.instagram} alt="insta" />
              </a>
            </li>

          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <p class="copyright_para">{AppConstants.address1}<br/>
        {AppConstants.address2}<br/>
        {AppConstants.address3}
        </p>
      </div>
    </div>
    <div class="footer_links">
      <ul class="d-flex justify-content-center" style={{listStyleType:"none",marginBottom:0}}>
        <li class="">
          <a href="PrivacyPolicy" target="_blank" style={{marginRight:"80px"}}>
          {AppConstants.privacy}
          </a>
        </li>
        <li class="">
          <a href="TermsConditions" target="_blank" style={{marginRight:"80px"}}>
          {AppConstants.tc}
          </a>
        </li>
        <li class="">
          <div className="LinkFooter"  onClick={()=>history.push("/")}>
          {AppConstants.contact}
          </div>
        </li>
      </ul>
    </div>
  </div>
</footer>
{/* <!-- Modal --> */}
<div class="modal fade custom_modal" id="Download" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">{AppConstants.download}</h5>
        <a href="#" class="close" data-dismiss="modal" aria-label="Close">
          <img src="images/cross.png" alt="cross" />
        </a>
      </div>
      <div class="modal-body">
        <a href="#">
          <img src="images/window_btn.png" alt="window_btn" />
        </a>
      </div>
      <p>
       {AppConstants.appStore}
      </p>
    </div>
  </div>
</div>
</div>
)
}

export default Footer;