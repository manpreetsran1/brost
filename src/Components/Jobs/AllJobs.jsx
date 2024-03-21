import React,{useState} from "react";
import {Link} from "react-router-dom";
import Header from "../../CustomComponents/Header";
import Footer from "../../CustomComponents/Footer"
import AppImages from "../../Themes/AppImages";

function AllJobs() {
document.title="Jobs"

    const [tabPanel, setTabPanel] = useState(1)
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
                                    <li class="nav-item">
                                        <a class={`nav-link ${ tabPanel == 1 &&'active'}`}  onClick={() => setTabPanel(1)} data-toggle="tab"  role="tab">Active Jobs</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class={`nav-link ${tabPanel == 2 &&'active'}`}  onClick={() => setTabPanel(2)} data-toggle="tab"   role="tab">Pending Jobs</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class={`nav-link ${tabPanel == 3 && 'active'}`}  onClick={() => setTabPanel(3)} data-toggle="tab"  role="tab">Closed Jobs</a>
                                    </li>
                                </ul>
                                {/* <!-- Tab panes --> */}
                                <div class="tab-content">
                                    {tabPanel == 1 &&
                                    <div class={`tab-pane ${tabPanel == 1 && 'active'}`} role="tabpanel">
                                       <Link to="/JobDetails1">
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
                                            <Link to="/JobDetails1">
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
                                       <Link to="/JobDetails1">
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
                                        <Link to="/JobDetails1">
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
                                        <Link to="/JobDetails1">
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
                                    </div>
}
{tabPanel == 2 &&
                                   <div  class={`tab-pane ${tabPanel == 2 && 'active'}`} role="tabpanel">
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
                                                <div class="img_first" >
                                                    <div class="title">
                                                        <img src={AppImages.man} />
                                                    </div>
                                                    <div class="jobs_line">
                                                        <h4>Job Title</h4>
                                                        <h5>Rockstars<span class="img_line"><img src={AppImages.star}/>5</span></h5>
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
                                    </div>
}
{tabPanel == 3 &&
                                    <div class={`tab-pane ${tabPanel == 3 && 'active'}`} role="tabpanel">
                                        <a href="JobDetails3">
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
                                        </a>
                                        <a href="JobDetails3">
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
                                                        <div class="raised_issue">
                                                            <a href="JobDetails4" class="anchar" style={{fontSize:"12px"}}>
                                                                Raise a Dispute
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="date_one-dispute">
                                                    <p>05 May 2021</p>
                                                    <h2 >$300</h2>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="JobDetails3">
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
                                        </a>
                                        <a href="JobDetails3">
                                        <div class="line_element">
                                            <div class="img_first">
                                                
                                                    <div class="title">
                                                        <img src={AppImages.man} />
                                                    </div>
                                                    <div class="jobs_line">
                                                        <h4>Job Title</h4>
                                                        <h5>Rockstars<span class="img_line"><img src={AppImages.star}/>5</span></h5>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the...</p>
                                                        <p class="red">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the...</p>
                                                        <div class="raised_issue">
                                                            <a href="JobDetails4" style={{fontSize:"12px"}} class="anchar">
                                                                Raise a Dispute
                                                            </a>
                                                        </div>
                                                    </div>
 </div>
                                                <div class="date_one-dispute">
                                                    <p>05 May 2021</p>
                                                    <h2 >$300</h2>
                                                </div>
                                            </div> 
</a>
                                        <a href="JobDetails3">
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
                                        </a>
                                        <a href="JobDetails3">
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
                                                        <div class="raised_issue">
                                                            <a href="JobDetails4
                                                            " style={{fontSize:"12px"}} class="anchar">
                                                                Raise a Dispute
                                                            </a>
                                                        </div>
                                                    </div>
 </div>
                                                <div class="date_one-dispute">
                                                    <p>05 May 2021</p>
                                                    <h2 >$300</h2>
                                                </div>
                                            </div> 
</a>

                                    </div>
                               
}
</div>


                                <div class="circle_img circle">
                                    <img src={AppImages.circle} alt="circle" />
                                </div>

                                <div class="active_jobss">
                                    <ul>
                                        <li><img src={AppImages.arrow1} /></li>
                                        <li><span class="active">1</span></li>
                                        {/* <li><span>2</span></li> */}
                                        <li><img src={AppImages.rightArrow} /></li>
                                    </ul>

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

export default AllJobs;