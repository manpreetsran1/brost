import React, { useEffect, useState } from "react";
import HomeHeader from "../../CustomComponents/HomeHeader";
import Footer from "../../CustomComponents/Footer";
import CarouselArrow from "../../CustomComponents/customArrow";
import AppImages from "../../Themes/AppImages";
import Swiper from "../../CustomComponents/swiperCompo";
import Typewriter from "typewriter-effect";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { tmdbMoviesList } from "../../Redux/Action/AuthenticationAction";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
// import homeClubbox from '../../Assets/clobbox/homeClubbox.png'
const names = ["REDEFINE", "DEMOCRATISE", "TRANSFORM", "REVOLUTIONIZE"];
function Home() {
  const movies=useSelector(state=>state?.loginReducer?.tmdbMovies)
  document.title = "Home";
  var settings = {
    //   dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
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
          autoplay: true,
          autoplaySpeed: 2500,
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
          autoplay: true,
          autoplaySpeed: 2500,
        },
      },
    ],
  };

  const [currentName, setCurrentName] = useState(names[0]);
  const dispatch=useDispatch()
  const history=useHistory()
  function setRandomName() {
    const index = Math.floor(Math.random() * names.length);
    let newName = names[index];
    if (newName == currentName) {
      setRandomName();
    } else {
      setCurrentName(newName);
    }
    return;
  }

  useEffect(() => {
    setTimeout(() => {
      setRandomName();
    }, 10000);
  }, [currentName]);


  useEffect(()=>{
  },[])

  const search=(text)=>{
    dispatch(tmdbMoviesList(history,text))

  }

  useEffect(() => {
    $(".display-counter").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing: "swing",
            step: function (now, tween) {
              // Check added for decimal number
              if (parseInt(tween.end) == parseFloat(tween.end)) {
                $(this).text(Math.ceil(now));
              } else {
                $(this).text(now.toFixed(2));
              }
            },
          }
        );
    });
  }, []);

  return (
    <div>

      <section class="welcome_bg sliders">
      <HomeHeader
      search={true}
      onChange={(t)=>{
        search(t.target.value)
      }}
      
      ></HomeHeader>
    <div className="horizontal-scroll-container">
{movies?.map((x,index)=>{
  return(
    <a href={"https://www.themoviedb.org/movie/"+x.id}>
<img

                    src={'https://www.themoviedb.org/t/p/w500'+x.poster_path}
                    alt={`Asset ${index + 1}`}
                    // style={{
                    //   height: "400px",
                    //   borderRadius: "20px",
                    //   width: "80%",
                    // }}
                    className='horizontal-scroll-item'
                  />
                  </a>
  )
})}
</div>
  
                    
        <Swiper />

        <div class="container">
          <div class="middle_newcontent">
            <div class="row common_top">
              <div class="owl-carousel owl-theme">
                {/* <Slider 
        
        {...settings}>
              {images.map((img, index) => (
                <div key={index.toString()} className="carousel-item">
                  <div class="item">  
                  <img
                    id="myImg"
                    src={img.image}
                    // height="326px"
                    // width="402px"
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
            </Slider> */}
              </div>

              <div></div>
            </div>
          </div>
         

          <div className="divWaveImg">
            <Typewriter
              options={{
                wrapperClassName: "defineText",
                cursorClassName: "defineText",
                strings: names,
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <h6 style={{ color: "white",marginTop:'5%', textAlign: "center" }}>
            FILM INDUSTRY BY INVESTING WITH US
          </h6>
        </div>
        <div className="divWaveImg">
          <div
            className="moible-space"
            style={{
              color: "white",
              width: "50vw",
              alignSelf: "center",
              alignItems: "center",
              position: "absolute",
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div className="portfolioText">Diversify your portfolio</div>
            <div className="portfolioText">Access to untapped market</div>
            <div className="portfolioText">Higher returns in short span</div>
          </div>
          <img className="waveImg" src={AppImages.wave} />
        </div>
        <div className="textlabelinvest">Why should you invest in movies?</div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <p class="display-counter">5000</p>
          <p className="display-counter-cr">{"Cr"}</p>
        </div>
        <h5 style={{ color: "white",marginTop:'5%', textAlign: "center" }}>
            Invested by OTT in india
          </h5>
        <div style={{backgroundColor:'white',}}>

      <img style={{alignSelf:'center',width:'100%'}} className="img-fluid" src={AppImages.homeClubbox} />
        </div>
      </section>
      <Footer></Footer>

    </div>
  );
}

export default Home;
