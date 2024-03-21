import React from "react";
import { useEffect } from "react";
import HomeHeader from "../../CustomComponents/HomeHeader";
import wp1867328 from "../../Assets/Images/wp1867328.png";

function Descriptions() {
  useEffect(() => {}, []);
  return (
    <div>
      {/* <HomeHeader></HomeHeader> */}
      <div className="inversContainer">
      <div style={{ position: "absolute", top: 0, width: "100%" }}>
            <HomeHeader></HomeHeader>
          </div>
        <img style={{ width: "100vw", height: "100%" }} src={wp1867328} />

        <button type="submit" class="button-contact common_btn btnabs">
          {"Invest"}
        </button>
      </div>
      <section class="pt-3 welcome_bg sliders">
        <div class="container">
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-2 tab-bg tab-data text-center border-end ">
              <a class="text-white" href="">
                Info
              </a>
            </div>
            <div class="col-md-2 tab-data text text-center border-end">
              <a class="text-white" href="">
              Financials
              </a>
            </div>
            <div class="col-md-2 tab-data text-center border-end">
              <a class="text-white" href="">
                Graphics
              </a>
            </div>
            <div class="col-md-2 tab-data text-center border-end">
              <a class="text-white" href="">
                Perks
              </a>
            </div>
            <div class="col-md-2 tab-bg-1 tab-data text-center">
              <a class="text-white" href="">
                Extras
              </a>
            </div>
            <div class="col-md-1"></div>
          </div>

          <div class="row">
            <div class="col-md-12"></div>
          </div>
        </div>
        <div class="container mt-5">
          <div class="bg-wrapper">
            <div class="row">
              <div class="col-12">
                <h3 class="title-text">Discription</h3>
              </div>
              <div class="col-12">
                <p class="subtitle-text">
                  With the price on his head ever increasing, legendaryhit man
                  John Wick takes his fight against the High Table global as he
                  seeks out the most powerful players in the underworld, from
                  New York to Paris to Japan to Berlin.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container mt-5">
          <div class="bg-wrapper">
            <div class="row">
              <div class="col-md-2">
                <figure class="figure">
                  <img
                    src={require("./Mask Group 12.png").default}
                    class="figure-img img-fluid shape-round"
                    alt="..."
                  />
                  {/* <figcaption class="figure-caption text-center">Chad Stahels <br/><span
                                        class="desigination">(Director)</span>
                                </figcaption> */}
                </figure>
              </div>
              <div class="col-md-2">
                <figure class="figure">
                  <img
                    src={require("./Mask Group 13.png").default}
                    class="figure-img img-fluid shape-round"
                    alt="..."
                  />
                  {/* <figcaption class="figure-caption text-center">Chad Stahels <br/><span
                                        class="desigination">(Director)</span>
                                </figcaption> */}
                </figure>
              </div>
              <div class="col-md-2">
                <figure class="figure">
                  <img
                    src={require("./Mask Group 13.png").default}
                    class="figure-img img-fluid shape-round"
                    alt="..."
                  />
                  {/* <figcaption class="figure-caption text-center">Chad Stahels <br/><span
                                        class="desigination">(Director)</span>
                                </figcaption> */}
                </figure>
              </div>
              <div class="col-md-2">
                <figure class="figure">
                  <img
                    src={require("./Mask Group 13.png").default}
                    class="figure-img img-fluid shape-round"
                    alt="..."
                  />
                  {/* <figcaption class="figure-caption text-center">Chad Stahels <br/><span
                                        class="desigination">(Director)</span>
                                </figcaption> */}
                </figure>
              </div>
              <div class="col-md-2">
                <figure class="figure">
                  <img
                    src={require("./Mask Group 13.png").default}
                    class="figure-img img-fluid shape-round"
                    alt="..."
                  />
                  <figcaption class="figure-caption text-center">
                    Chad Stahels <br />
                    <span class="desigination">(Director)</span>
                  </figcaption>
                </figure>
              </div>
              <div class="col-md-2">
                <figure class="figure">
                  <img
                    src={require("./Mask Group 13.png").default}
                    class="figure-img img-fluid shape-round"
                    alt="..."
                  />
                  {/* <figcaption class="figure-caption text-center">Chad Stahels <br/><span
                                        class="desigination">(Director)</span>
                                </figcaption> */}
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-5 px-5">
          <div class="row">
            <div class="col-md-12 text-center">
              <h3 class="production-text text-center"> Info</h3>
            </div>
            <div class="col-md-12">
              <p class="production-text">Production House -</p>
            </div>
            <div class="col-md-12">
              <p class="production-text">Production House -</p>
            </div>
            <div class="col-md-12 text-center">
              <h3 class="production-text text-center">
                {" "}
                Expected time of completion
              </h3>
            </div>
            <div class="col-md-12">
              <p class="production-text"> Pre production-</p>
            </div>
            <div class="col-md-12">
              <p class="production-text">Production-</p>
            </div>
            <div class="col-md-12">
              <p class="production-text">Post production-</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Descriptions;
