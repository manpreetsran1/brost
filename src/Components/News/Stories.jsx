import Footer from "../../CustomComponents/Footer";
import React, { useState } from "react";
import Header from "../../CustomComponents/Header";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppConstants from "../../Themes/AppConstants";
import AppImages from "../../Themes/AppImages";

function Stories() {

  document.title = "Stories"

  const propsData = {
    link1: "white",
    link2: "#9a75c7",
    link3: "white",
    link4: "white",
    link4: "#fff",
    link5: "#fff",
    link6: "#fff",
    link7: "#fff",
    linkd2: "underline"
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal1 = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };



  const images = [
        
    {
        original:  AppImages.scroll,
        thumbnail:  AppImages.scroll,
        
    },
    {
        original:  AppImages.scroll,
        thumbnail:  AppImages.scroll,
       
    },
    {
        original:  AppImages.scroll,
        thumbnail:  AppImages.scroll,
        
    },
    {
        original:  AppImages.scroll,
        thumbnail:  AppImages.scroll,
       
    },
    {
        original:  AppImages.scroll,
        thumbnail:  AppImages.scroll,
        
    },
    {
        original:  AppImages.scroll,
        thumbnail:  AppImages.scroll,
       
    },
    {
        original:  AppImages.scroll,
        thumbnail:  AppImages.scroll,
        
    },
]
  const array = [
    {
      img: AppImages.newDetails,
      time: AppConstants.dateTime,
      data: AppConstants.LoremIpsum2
    },
    {
      img:AppImages.newDetails,
      time: AppConstants.dateTime,
      data: AppConstants.LoremIpsum2
    },
    {
      img: AppImages.newDetails,
      time: AppConstants.dateTime,
      data: AppConstants.LoremIpsum2
    },
    {
      img: AppImages.newDetails,
      time: AppConstants.dateTime,
      data: AppConstants.LoremIpsum2
    },
    {
      img: AppImages.newDetails,
      time: AppConstants.dateTime,
      data: AppConstants.LoremIpsum2
    },
    {
      img:AppImages.newDetails,
      time: AppConstants.dateTime,
      data: AppConstants.LoremIpsum2
    },
    {
      img: AppImages.newDetails,
      time: AppConstants.dateTime,
      data: AppConstants.LoremIpsum2
    },
    {
      img: AppImages.newDetails,
      time: AppConstants.dateTime,
      data: AppConstants.LoremIpsum2
    }

  ]


  return (
    <div>
      <Header {...propsData}></Header>
      <section class="welcome_bg">
        <div class="container">
          <div class="middle_content">
            <div class="row common_top">
              <div class="login" style={{ width: "94%" }}>
                <form class="contact_us stories">
                  <div class="middle_inputs">
                    <h2 class="" style={{ marginBottom: "40px", fontSize: "27px" }}>Stories</h2>
                    <div class="row" >
                      {array.map((item) => {
                        return (
                          <div class="col-md-6" >
                            <div class="line_text" data-toggle="modal" data-target="#myModal18" onClick={showModal1}>
                              <img src={item.img} />
                              <h6>{item.time}</h6>
                              <p>{item.data}</p>


                            </div>
                          </div>
                        )
                      })}

                    </div>

                  </div>


                  <div class="active_jobss stories">
                    <ul>
                      <li><img src={AppImages.arrow1} /></li>
                      <li><span class="active">1</span></li>
                      <li><img src={AppImages.rightArrow} /></li>
                    </ul>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[]}

        bodyStyle={{
          backgroundColor: "#3e2b55",
          borderRadius: "12px"
        }}
        width="140vh"

      >
        <button type="button" class="close" data-dismiss="modal" onClick={handleCancel}><img src={AppImages.close} width="35" /></button>
        <div className="imageGallery">
          <ImageGallery items={images}
            autoPlay={true}
            thumbnailPosition='left'></ImageGallery>
          <div className="modal-text">
            <h3 style={{ textAlign: "right" }}>{AppConstants.dateTime}</h3>
            <p style={{ fontSize: "small" }}>
            {AppConstants. LoremIpsumModal}
            </p>
          </div>
        </div>
      </Modal>
      <Footer></Footer>
    </div>
  )
}

export default Stories;