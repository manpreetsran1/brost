import React,{useEffect} from "react";
import Footer from "../../CustomComponents/Footer";
import Header from "../../CustomComponents/Header"
import AppConstants from "../../Themes/AppConstants";
import Slider from "react-slick";
import CarouselArrow from "../../CustomComponents/customArrow"
import AppImages from "../../Themes/AppImages";
import { useDispatch, useSelector } from "react-redux";
import { dashboardAction } from "../../Redux/Action/DashboardAction";
import {isInternetConnected}  from "../InternetConnection";
import { useHistory } from "react-router-dom";

function Dashboard(){
  document.title="Dashboard"
  const history=useHistory()
const dispatch=useDispatch()
  const propsData={
    link1:"#9a75c7",
    link2:"white",
    link3:"white",
    link4:"#fff",
    link5:"#fff",
    link6:"#fff",
    link7:"#fff",
    linkd1:"underline",
    size1:"bolder"
}
  var settings = {
    //   dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay:true,
    autoplaySpeed:1000,
    // draggable:true,
    easing: "bounce",
    nextArrow: <CarouselArrow direction="right" />,
    prevArrow: <CarouselArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          speed: 1500,
          easing: "bounce",
          autoplay:true,
          autoplaySpeed:2500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          speed: 1500,
          easing: "bounce",
          autoplay:true,
          autoplaySpeed:2500,
        },
      },
    ],
  };
  const images = [
    {
      image: AppImages.img1,
    },
    {
      image: AppImages.img,      
    },
    {
      image: AppImages.img2,
    },
    {
      image: AppImages.img1,
    },
    {
      image: AppImages.img,      
    },
    {
      image: AppImages.img2,
    },
    
    
  ];


useEffect(()=>{
  isInternetConnected(history) &&
dispatch(dashboardAction())
},[])

  const dashboardData=useSelector(state=>state.dashboardReducer.data)
  console.log("yeahhhh",dashboardData)
    return(
        <div>
          <Header {...propsData}></Header>
        <section class="welcome_bg home_bg" style={{height:"inherit",paddingBottom:"30px"}}>
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="how_work" style={{paddingTop:"86px", paddingBottom:"100px",paddingLeft:"2px"}}   >
                <h2>{AppConstants.LoremIpsum}</h2>
                <p>
                  {AppConstants.Definition}
                </p>
              </div>
            </div>
            <div class="col-md-5">
              <div class="total_numbers">
                <div class="totals_gigs">
                  <div class="d-flex align-items-center" style={{padding:"22px 0px", marginBottom:"33px"}}>
                    <div class="horn_img">
                      <img src={AppImages.horn} alt="horn"/>
                    </div>
                    <div class="text-center">
                      <p>{AppConstants.TotalGigs}</p>
                      <h3 style={{fontSize:"4.5vh"}}>{dashboardData.Gigs}</h3>
                    </div>
                  </div>   
                </div>
                <div class="totals_gigs">
                  <div class="d-flex align-items-center" style={{padding:"22px 0px"}}>
                    <div class="horn_img">
                      <img src={AppImages.bag} alt="bag"/>
                    </div>
                    <div class="text-center">
                      <p>{AppConstants.ActiveJobs}</p>
                      <h3 style={{fontSize:"4.5vh"}}>{dashboardData.jobs}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="welcome_bg sliders mobiles">
        <div class="container">
          <div class="middle_newcontent">  
         
      <div class="row common_top">
       
        <div class="owl-carousel owl-theme">
        <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index.toString()} className="carousel-item">
                 
                 <div class="item">   <img
                    id="myImg"
                    src={img.image}
                    
                    className="carouselImage"
                    // onClick={() => {
                    //   setModalImage(img.image);
                    //   setModalVisible(true);
                    // }}
                    alt="carosal"
                  />
                  </div>
                </div>
              ))}
            </Slider>
           </div>
           
           </div>
          
          </div>
        </div>
      </section>
<Footer></Footer>
      </div>
    )
}

export default Dashboard;