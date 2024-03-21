import React, { useState } from "react";
import Footer from "../../CustomComponents/Footer";
import Header from "../../CustomComponents/Header";
import { Link,history, useHistory } from "react-router-dom"
import AppConstants from "../../Themes/AppConstants";
import AppImages from "../../Themes/AppImages";

function Jobs() {
    document.title = "Jobs" 
    const [tabPanel, setTabPanel] = useState(1) 
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
    
    return (
        <div>
            <Header {...propsData}></Header>
            <section class="welcome_bg">
                <div class="container">
                    <div class="middle_content">
                        <div class="row common_top">
                            <div class="login active_jobs">
                                <div class="contact_us real">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item" >
                                            <Link  class={`nav-link ${ tabPanel == 1 &&'active'}`} onClick={() => setTabPanel(1) } data-toggle="tab"  role="tab" >Active Jobs</Link>
                                        </li>
                                        <li class="nav-item" >
                                            <Link class={`nav-link ${tabPanel == 2 &&'active'}`} onClick={() => setTabPanel(2)  } data-toggle="tab"  role="tab">Pending Jobs</Link>
                                        </li>
                                        <li class="nav-item" >
                                            <Link class={`nav-link ${tabPanel == 3 && 'active'}`} onClick={() => setTabPanel(3)  } data-toggle="tab"  role="tab">Closed Jobs</Link>
                                        </li>
                                    </ul>
                                    {/* <!-- Tab panes --> */}
                                    <div class="tab-content">
                                        {tabPanel == 1 &&
                                            <div  class={`tab-pane ${tabPanel == 1 && 'active'}`} >
                                                <Link to="/JobDetails1">
                                                    <div class="line_element">
                                                        <div class="img_first">
                                                            <div class="title">
                                                                <img src={AppImages.man} />
                                                            </div>
                                                            <div class="jobs_line">
                                                                <h4>{AppConstants.JobTitle}</h4>
                                                                <h5>{AppConstants.rockstar}<span class="img_line"><img src={AppImages.star} />5</span></h5>
                                                                <p>{AppConstants.Lorem}</p>
                                                            </div>
                                                        </div>
                                                        <div class="date_one">
                                                            <p>{AppConstants.time}</p>
                                                            <h2>{AppConstants.money}</h2>
                                                        </div>
                                                    </div>
                                                </Link>

                                                <Link to="/JobDetails1">
                                                    <div class="line_element">
                                                        <div class="img_first">
                                                            <div class="title">
                                                                <img src={AppImages.man} />
                                                            </div>
                                                            <div class="jobs_line">
                                                                <h4>{AppConstants.JobTitle}</h4>
                                                                <h5>{AppConstants.rockstar}<span class="img_line"><img src={AppImages.star} />5</span></h5>
                                                                <p>{AppConstants.Lorem}</p>
                                                            </div>
                                                        </div>
                                                        <div class="date_one">
                                                            <p>{AppConstants.time}</p>
                                                            <h2 >{AppConstants.money}</h2>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <h5 class="sell_one" >
                                                    <Link to="/AllJobs" style={{fontSize:"21px"}}>
                                                       {AppConstants. SeeAll} <img src={AppImages.arrow2} />
                                                    </Link>
                                                </h5>
                                            </div>
                                        }
                                        {tabPanel == 2 &&
                                            <div class={`tab-pane ${tabPanel == 2 && 'active'}`} >
                                                <Link to="/JobDetails2">
                                                    <div class="line_element">
                                                        <div class="img_first">
                                                            <div class="title">
                                                                <img src={AppImages.man} />
                                                            </div>
                                                            <div class="jobs_line">
                                                                <h4>Job Title</h4>
                                                                <h5>Rockstars<span class="img_line"><img src={AppImages.star} />5</span></h5>
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the...</p>
                                                            </div>
                                                        </div>
                                                        <div class="date_one-new">
                                                            <p>05 May 2021</p>
                                                            <h2 >$300</h2>
                                                        </div>
                                                    </div>
                                                    </Link>
                                                    <Link to="/JobDetails2">
                                                    <div class="line_element">
                                                        <div class="img_first">
                                                            <div class="title">
                                                                <img src={AppImages.man} />
                                                            </div>
                                                            <div class="jobs_line">
                                                                <h4>Job Title</h4>
                                                                <h5>Rockstars<span class="img_line"><img src={AppImages.star} />5</span></h5>
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the...</p>
                                                            </div>
                                                        </div>
                                                        <div class="date_one-new">
                                                            <p>05 May 2021</p>
                                                            <h2 >$300</h2>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <h5 class="sell_one"> <Link to="/AllJobs" style={{fontSize:"21px"}}>
                                                    see All <img src={AppImages.arrow2} />
                                                </Link></h5>

                                            </div>
                                        }
                                        {tabPanel == 3 &&
                                            <div class={`tab-pane ${tabPanel == 3 && 'active'}`} >
                                                 <Link to="/JobDetails3">
                                                    <div class="line_element">
                                                        <div class="img_first">
                                                            <div class="title">
                                                                <img src={AppImages.man} />
                                                            </div>
                                                            <div class="jobs_line">
                                                                <h4>Job Title</h4>
                                                                <h5>Rockstars<span class="img_line"><img src={AppImages.star} />5</span></h5>
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the...</p>
                                                                <p class="red">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the...</p>
                                                            </div>
                                                        </div>
                                                        <div class="date_one-para">
                                                            <p>05 May 2021</p>
                                                            <h2 >$300</h2>
                                                        </div>
                                                    </div>
                                                </Link>

                                                <Link to="JobDetails3">
                                            <div class="line_element">
                                                <div class="img_first">

                                                    <div class="title">
                                                        <img src={AppImages.man} />
                                                    </div>
                                                    <div class="jobs_line">
                                                        <h4>Job Title</h4>
                                                        <h5>Rockstars<span class="img_line"><img src={AppImages.star} />5</span></h5>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the...</p>
                                                        <p class="red">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the...</p>
                                                        <div class="raised_issue" >
                                                            <Link to="/JobDetails4" style={{fontSize:"12px"}}>
                                                                Raise a Dispute
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="date_one-dispute">
                                                    <p>05 May 2021</p>
                                                    <h2 >$300</h2>
                                                </div>
                                            </div>
                                        </Link>
                                                <h5 class="sell_one">
                                                    <Link to="/AllJobs" style={{fontSize:"21px"}}>see All
                                                        <img src={AppImages.arrow2} />
                                                    </Link>
                                                </h5>

                                            </div>
                                        }
                                    </div>

                                    <div class="circle_img circle">
                                        <img src={AppImages.circle} alt="circle" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
            <Footer></Footer>
        </div>
    )
}

export default Jobs;