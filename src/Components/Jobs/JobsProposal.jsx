import React from "react";
import Header from "../../CustomComponents/Header";
import Footer from "../../CustomComponents/Footer";
import {Link} from "react-router-dom";
import AppImages from "../../Themes/AppImages";

function JobsProposal() {
    document.title="Proposal Details"
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
                                        <h2 class="text-center" style={{ marginBottom: "70px" }}>Proposal Details</h2>
                                        <div class="text-details">
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
                                            <div class="first_details">
                                                <p class="first_view">Address:</p>
                                                <p class="second_view">HNo. 56, Mohali, Punjab-143001</p>
                                            </div>
                                            <div class="first_details">
                                                <p class="first_view">Proposal Description :</p>
                                                <p class="second_view">Lorem Ipsum is simply dummy text of the printing
                                                    and typesetting industry. Lorem Ipsum has been
                                                    the industry's standard dummy text ever since the
                                                    1500s, when an unknown printer took a galley of
                                                    type and scrambled it to make a type specimen
                                                    book. It has survived not only five centuries, but
                                                    also the leap into electronic typesetting, remaining
                                                    essentially unchanged.</p>
                                            </div>
                                            <div class="first_details">
                                                <p class="first_view">Proposal Category:</p>
                                                <p class="second_view">Proposal Category 1</p>
                                            </div>
                                            <div class="first_details">
                                                <p class="first_view">Rating:</p>
                                                <p class="second_view rates">5
                                                <img src={AppImages.star} class="star"></img>
                                                </p>
                                            </div>
                                            <div class="text-center sign_new sign_button" style={{marginTop:"63px"}}>
                                               <Link to="/Jobs">
                                                    <button type="button" class="button-contact common_btn" style={{width:"230%"}}>Hire</button>
                                                    </Link>
                                                <Link to="/JobDetails2">
                                                    <button type="button" class="btn btn-warning common_btn newAlerts" style={{marginLeft:"-1%"}}>Reject</button>
                                                    </Link>
                                                <Link to="/Message">
                                                    <button type="button" class="btn btn-warning common_btn last_button">Send Message</button>
                                                    </Link>
                                            </div>

                                        </div>
                                        <div class="circle_img Proposal_circle1 ">
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

export default JobsProposal;