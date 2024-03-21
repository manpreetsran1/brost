import Footer from "../../CustomComponents/Footer";
import React, { useState } from "react"
import Header from "../../CustomComponents/Header";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css'
import AppConstants from "../../Themes/AppConstants";
import AppImages from "../../Themes/AppImages";

function AllNotifications() {
  document.title = "Notifications"
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

  const propsData = {
    link1: "white",
    link2: "white",
    link3: "white",
    link4: "white",
    link4: "#fff",
    link5: "white",
    link6: "#9a75c7",
    link7: "#fff",
    linkd6: "underline",
    size6: "bold"
  }
  const array = [
    {
      img: AppImages.man,
      time: AppConstants.time,
      data: AppConstants.Lorem,
      text: AppConstants.proposal
    },
    {
      img: AppImages.man,
      time: AppConstants.time,
      data: AppConstants.Lorem,
      text: AppConstants.proposal
    },
    {
      img: AppImages.man,
      time: AppConstants.time,
      data: AppConstants.Lorem,
      text: AppConstants.proposal
    },
    {
      img: AppImages.man,
      time: AppConstants.time,
      data: AppConstants.Lorem,
      text: AppConstants.proposal
    },
    {
      img: AppImages.man,
      time: AppConstants.time,
      data: AppConstants.Lorem,
      text: AppConstants.proposal
    },
  ]
  return (
    <div>
      <Header {...propsData}></Header>
      <section class="welcome_bg">
        <div class="container">
          <div class="middle_content">
            <div class="row common_top">
              <div class="login active_jobs">
                <div class="contact_us real noti">
                  <h2 class="text-center" style={{ marginBottom: "30px" }}>{AppConstants.Notification}</h2>
                  <div class="tab-content">
                    <div class="tab-pane active" id="tabs-1" role="tabpanel">
                      {
                        array.map((item => {
                          return (
                            <div class="line_element" data-toggle="modal" data-target="#myModal14" data-keyboard="true" data-backdrop="static" onClick={showModal1}>
                              <div class="img_first">
                                <div class="title">
                                  <img src={item.img} />
                                </div>
                                <div class="jobs_line">
                                  <h4>{item.text}</h4>
                                  <p>{item.data}</p>
                                </div>
                              </div>
                              <div class="date_one-new">
                                <p>{item.time}</p>
                              </div>
                            </div>
                          )
                        }))
                      }
                    </div>

                  </div>


                  <div class="circle_img circle">
                    <img src={AppImages.circle} alt="circle" />
                  </div>

                  <div class="active_jobss">
                    <ul>
                      <li><img src={AppImages.arrow1} /></li>
                      <li><span class="active">1</span></li>
                      <li><img src={AppImages.rightArrow} /></li>
                    </ul>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[]}

        bodyStyle={{
          backgroundColor: "transparent",
          borderRadius: "18px"
        }}
        width="100vh"
      >
        <div id="myModal14" >
          <div class="modal-dialog">


            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" onClick={handleCancel}><img src={AppImages.close} width="30" /></button>
                <h4 class="modal-title">{AppConstants.notificationDetails}</h4>
              </div>

              <div class="modal-body">
                <div class="text-details">
                  <div class="first_details">
                    <p class="first_view">{AppConstants.type}</p>
                    <p class="second_view">{AppConstants.proposal}</p>
                  </div>
                  <div class="first_details">
                    <p class="first_view">{AppConstants.description}</p>
                    <p class="second_view">{AppConstants.Lorem1}</p>
                  </div>

                </div>
                <div class="circle_img Proposal_circle">
                  <img src={AppImages.circle} alt="circle" />
                </div>

              </div>

            </div>
          </div>
        </div>
        
      </Modal>
      <Footer></Footer>
    </div>
  )
}

export default AllNotifications;