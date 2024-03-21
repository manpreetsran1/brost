import React, { useEffect, useState } from "react";
import HomeHeader from "../../CustomComponents/HomeHeader";
import Footer from "../../CustomComponents/Footer";
import AppImages from "../../Themes/AppImages";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../../Redux/Action/AuthenticationAction";
import wp1867328 from "../../Assets/Images/wp1867328.png";
import { CircleProgress } from "react-gradient-progress";
import asset1 from "../../Assets/Images/invest/asset-1.png";
import asset2 from "../../Assets/Images/invest/asset-2.png";
import asset3 from "../../Assets/Images/invest/asset-3.png";
import asset4 from "../../Assets/Images/invest/asset-4.png";
import asset5 from "../../Assets/Images/invest/asset-5.png";
import asset6 from "../../Assets/Images/invest/asset-6.png";
import asset7 from "../../Assets/Images/invest/asset-7.png";
import asset8 from "../../Assets/Images/invest/asset-8.png";
import asset9 from "../../Assets/Images/invest/asset-9.png";
import { Modal } from "react-bootstrap";
import { useMediaQuery } from "@material-ui/core";
import AddNewPaymentMethod from "./InvestPopup";
const people = [
  { assetImg: asset1 },
  { assetImg: asset2 },
  { assetImg: asset3 },
  { assetImg: asset4 },
  { assetImg: asset5 },
  { assetImg: asset6 },
  { assetImg: asset7 },
  { assetImg: asset8 },
  { assetImg: asset9 },
];
const rows = Math.ceil(people.length / 3);
const names = ["REDEFINE", "DEMOCRATISE", "TRANSFORM", "REVOLUTIONIZE"];
function Invest() {
  document.title = "Investnow";

 const dispatch=useDispatch()
    const investReducer = useSelector(state => state.investReducer)

  const [currentName, setCurrentName] = useState(names[0]);
  const [visible, setVisible] = useState(false);
  const [paymentPopup, setPaymentPopup] = useState(false);
  const matches = useMediaQuery('(min-width:600px)');

  const isMobileDevice =useMediaQuery(
    "(max-device-width: 1000px)");
  const renderPerson = (person, idx) => {
    return (
      <li key={idx}>
        <b>
          {person.firstName} {person.lastName}
        </b>{" "}
        (<span>{person.info.age}</span>)
      </li>
    );
  };
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


  useEffect(() => {
  
    dispatch(getMovieList())


  }, [dispatch])

  return (
    <div>
     <AddNewPaymentMethod show={paymentPopup} toggle={()=> setPaymentPopup(!paymentPopup)}  />

<Modal
onBackdropClick={()=>{
  // alert('k')
  setVisible(false)
}}
animation={true}
  style={{ zIndex: 9999999 }}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
  show={visible}
>
  <div
    className="containerModal"
    style={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      zIndex: 9999999,
    }}
  >
    <div className="pop-wrapper" style={{ maxWidth: "1000px" }}>
      <div className="row">
        <div className="col-12 col-md-4 movie-banner rounded p-5">
          <img
            src={require("./poster.png").default}
            className="img-banner img-fluid"
            alt=""
          />
        </div>
        <div className="col-12 col-md-8 p-5">
          <div className="row">
            <div className="col-12">
              <h1 className="main-title">John Wick</h1>
            </div>
            <div className="col-12 d-flex rating-col">
              <div className="border-end">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span>2017</span>
              </div>
              <div className="border-end">genre</div>
              <div className="border-end">hr</div>
            </div>

            <div className="col-12">
              <h4 className="pop-up-title">Description</h4>
              <p className="pop-subcontent">
                With the price on his head ever increasing, legendary hit man
                John Wick takes his fight against the High Table global as he
                seeks out the most powerful players in the underworld, from New
                York to Paris to Japan to Berlin.
              </p>
              <button 
              onClick={()=>{
                setVisible(false)
                setPaymentPopup(true)
              }}
              className="Invest-btn">Invest</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>

      <section class=" welcome_bg sliders">
        <div className="inversContainer">
          <img style={{ width: "100vw", height: "100vw" }} src={wp1867328} />
          <div style={{ position: "absolute", top: 0, width: "100%" }}>
            <HomeHeader></HomeHeader>
          </div>
          <div style={{ position: "absolute", top: "100vw", width: "100%" }}>
          <button
            onClick={() => setVisible(true)}
            type="submit"
            class="button-contact common_btn btnabs"
          >
            {"Invest"}
          </button>
          </div>
        </div>
        <div>
          <div  style={isMobileDevice?{}:{ display:"flex",alignItems:'center',justifyContent:'center', flexWrap:"wrap" }}>
          {investReducer.movieList.map((movie, rowIndex) => {
      
          

            return (
                
                  <div
                  className="moviebox col-3"
        key={rowIndex}
                    style={{ margin: "5%", height: "auto" }}
                  >
                    <div className="bottonCintainerInvest">
                      <div>
                        <div className="mb-2" style={{ color: "white" }}>
                          Amount Invested
                        </div>
                        <div
                          class="progress"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ height: "4px" }}
                        >
                          <div
                            class="progress-bar"
                            style={{ width: " 50%" }}
                          ></div>
                        </div>
                      </div>
                      <CircleProgress
                        secondaryColor="#fff"
                        fontColor="#fff"
                        primaryColor={["#FF90B6", "#F03D3F"]}
                        width={100}
                        percentage={90}
                      />
                    </div>
                    <div className="tag">
                      <div className="tagText">94</div>
                      <div className="tagdayText">DAYS LEFT</div>
                    </div>

                    <img
                      src={movie.imgUrl}
                      alt={`Asset ${rowIndex + 1}`}
                      style={{
                        height: "400px",
                        borderRadius: "20px",
                        width: "100%",
                      }}
                    />
                  </div>
            
            );
          })}{" "}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Invest;
