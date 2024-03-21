import React, { useState } from "react";
import Footer from "../../CustomComponents/Footer";
import Header from "../../CustomComponents/Header";
import { useHistory } from "react-router-dom"
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css'
import AppConstants from "../../Themes/AppConstants";
import AppImages from "../../Themes/AppImages";

function Notification() {
    document.title = "Notifications"
    const history = useHistory()
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
        }
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
                                                    return(
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
                                    <div style={{ cursor: "default" }} onClick={() => history.push("/AllNotifications")}>
                                        <h5 class="sell_one">see All <img src={AppImages.arrow2} /></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Modal
                isOpen={isVisible}

                style={{
                    overlay: {
                        zIndex: 99999,

                        top: "5%",
                        left: "30%",
                        right: "25%",
                        bottom: "47%",
                        borderRadius: "50%"
                       
                    },
                    content: {
                        backgroundColor: "#37104d",
                        position: "unset",
                        inset: 0,
                        border: 0,
                        overflow: 'visible',
                        borderRadius: 0,


                    }
                }}
                onHide={() => setIsVisible(false)}
                contentLabel="Example Modal"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <button type="button" class="close" data-dismiss="modal" onClick={handleClose}><img src="images/close.png" width="35" /></button>
                <div class="middle_inputs">
                    <h2 class="text-center" style={{ marginBottom: "40px", color: "white" }}>Notification Details</h2>
                    <div class="text-details">
                        <div class="first_details">
                            <p class="first_view">Type:</p>
                            <p class="second_view">Proposal</p>
                        </div>
                        <div class="first_details">
                            <p class="first_view">Description:</p>
                            <p class="second_view">Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>

                    </div>

                </div>

               
            </Modal> */}
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
                                <h4 class="modal-title">Notification Details</h4>
                            </div>

                            <div class="modal-body">
                                <div class="text-details">
                                    <div class="first_details">
                                        <p class="first_view">Type:</p>
                                        <p class="second_view">Proposal</p>
                                    </div>
                                    <div class="first_details">
                                        <p class="first_view">Description:</p>
                                        <p class="second_view">Lorem Ipsum is simply dummy text of the
                                            printingand typesetting industry. Lorem Ipsum
                                            has been the industry's standard dummy text
                                            ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five
                                            centuries, but also the leap into electronic
                                            typesetting, remaining essentially unchanged.</p>
                                    </div>

                                </div>
                                <div class="circle_img Proposal_circle">
                                    <img src={AppImages.circle} alt="circle" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                {/* <div id="myModal14">
                <button type="button" class="close" data-dismiss="modal" onClick={handleCancel}><img src="images/close.png" width="35" /></button>
                <div className="notification">
                <div class="middle_inputs notify">
                    <h2 class="text-center" style={{ marginBottom: "40px", color: "white" }}>Notification Details</h2>
                    <div class="text-details">
                        <div class="first_details">
                            <p class="first_view">Type:</p>
                            <p class="second_view">Proposal</p>
                        </div>
                        <div class="first_details">
                            <p class="first_view">Description:</p>
                            <p class="second_view">Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>

                    </div>
                    <div class="circle_img Proposal_circle">
                                    <img src="images/circle.png" alt="circle" />
                                </div>
                    </div>
                </div>
                </div> */}
            </Modal>
            <Footer></Footer>
        </div>
    )
}

export default Notification;