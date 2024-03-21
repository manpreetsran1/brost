import React, { useState } from "react";
import Header from "../../CustomComponents/Header";
import Footer from "../../CustomComponents/Footer";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css'
import {useHistory} from "react-router-dom"
import AppConstants from "../../Themes/AppConstants";
import AppImages from "../../Themes/AppImages";

function News() {
    document.title = "News"
const history=useHistory()
    const propsData = {
        link1: "white",
        link2: "#9a75c7",
        link3: "white",
        link4: "white",
        link4: "#fff",
        link5: "#fff",
        link6: "#fff",
        link7: "#fff",
        linkd2: "underline",
        size2: "bold"
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
            time: "05 May 2021 10:23 AM",
            data: AppConstants.LoremIpsum1
        },
        {
            img: AppImages.newDetails,
            time: "05 May 2021 10:23 AM",
            data: AppConstants.LoremIpsum1
        },
        {
            img: AppImages.newDetails,
            time: "05 May 2021 10:23 AM",
            data: AppConstants.LoremIpsum1
        }
    ]
    const storyArray = [
        {
            img: AppImages.stories,
            time: "05 May 2021 10:23 AM",
            data: AppConstants.LoremIpsum1
        },
        {
            img: AppImages.stories,
            time: "05 May 2021 10:23 AM",
            data: AppConstants.LoremIpsum1
        },
        {
            img: AppImages.stories,
            time: "05 May 2021 10:23 AM",
            data: AppConstants.LoremIpsum1
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
                                <form class="contact_us stories text_story">
                                    <div class="middle_inputs">
                                        <div class="wrapper_stories">
                                            <h2 class="" style={{ marginBottom: "40px", fontSize: "27px" }}>{AppConstants.News}</h2>
                                           
                                                <h5 class="sell_one" style={{cursor:"pointer"}} onClick={()=>history.push("/newDetails")}>{AppConstants.SeeAll} <img src={AppImages.arrow2} /></h5>
                                           
                                        </div>
                                        <div class="row" >
                                            {array.map((item) => {
                                                return (
                                                    <div class="col-md-4" >
                                                        <div class="line_text" data-toggle="modal" data-target="#myModal18" onClick={showModal1}>
                                                            <img src={item.img} />
                                                            <h6>{item.time}</h6>
                                                            <p>{item.data}</p>


                                                        </div>
                                                    </div>
                                                )
                                            })}

                                        </div>
                                        <div class="wrapper_stories">
                                            <h2 class="" style={{ marginBottom: "40px", fontSize: "27px" }}>{AppConstants.Stories}</h2>
                                            <h5 class="sell_one" style={{cursor:"pointer"}} onClick={()=>history.push("/newDetails")}>{AppConstants.SeeAll} <img src={AppImages.arrow2} /></h5>
                                        </div>

                                        <div class="row" >
                                            {storyArray.map((item) => {
                                                return (
                                                    <div class="col-md-4" >
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


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[]}

                bodyStyle={{
                    backgroundColor: "#3e2b55",
                    borderRadius:"12px"
                }}
                width="140vh"

            >
                <button type="button" class="close" data-dismiss="modal" onClick={handleCancel}><img src={AppImages.close} width="30" /></button>
                <div className="imageGallery">
                   
                    <ImageGallery items={images}
                        autoPlay={true}
                        thumbnailPosition='left'></ImageGallery>
                        
                    <div className="modal-text">
                        <h3 style={{ textAlign: "right" }}>{AppConstants.dateTime}</h3>
                        <p style={{ fontSize: "small" }}>
                           {AppConstants.LoremIpsumModal}
                        </p>
                    </div>
                </div>
            </Modal>

            <Footer></Footer>
        </div>
    )
}

export default News;