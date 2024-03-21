import React, { useEffect, useState } from "react";
import Footer from "../../CustomComponents/Footer";
import Header from "../../CustomComponents/Header"
import { useHistory } from "react-router-dom"
import AppConstants from "../../Themes/AppConstants";
import AppImages from "../../Themes/AppImages";
import { useDispatch } from "react-redux";
import {addComment} from '../../Redux/Action/AuthenticationAction'
import { io } from "socket.io-client";
import moment from 'moment'
var socket
function Message(props) {
const [comment,setComment]=useState([])

useEffect(()=>{
  setComment(props?.location?.state?.comment)
},[])
  useEffect(() => {
     socket = io('http://62.72.26.28:3000',{ transports: ['websocket'] });

    socket.on('connect', () => {
      console.log('connected')
     
    });
    socket.on('message', (e) => {
      console.log('eeeeeee',e);
      if(e.postId==props?.location?.state?.data?._id){
        let com=[...comment]
        com.push(e)
        setComment((prevComments) => [...prevComments, e]);
      }
     
    });
  }, [])
  
    console.log('props',props.location.state);
    document.title = "Messages"
    const history = useHistory()
    
    const array = [
        {
            img: AppImages.man,
            name: "Question1",
            info: AppConstants.info,

        }
     
    ]
    const [text,setText]=useState('')
    const dispatch=useDispatch()
    const sendMessage=()=>{
        const callback=(res)=>{
            console.log('res',res);
            setText('')
        }
        dispatch(addComment(history,{
            "user":JSON.parse(localStorage?.userInfo)?._id,
            "content":text,
            "postId":props?.location?.state?.data?._id
        },callback))

        
    }
    return (
            <div className="main">
    <section>
      <div className="navvar">
        <div className="container-fluid">
          <div className="py-2">
            <div className="row">
              <div className="col-2">
                <img
                  src={AppImages.clubboxxlogo1}
                  className="img-fluid logo-clubbox"
                  alt=""
                />
              </div>
              <div className="col-6 d-flex align-items-center">
                <form className=" " role="search" style={{width:'100%'}}>
                  <input
                    className="form-control me-2 border-rounded"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>
              <div className="col-2 d-flex justify-content-center align-items-center"
              >
                <img src={AppImages.brost} className="img-fluid" alt="" />
              </div>
              <div className="col-2 d-flex justify-content-center align-items-center"
              >
                <img src={AppImages.userIcon} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          {/* <!-- <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                   
                     
                  <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                       
                    </form>
                    
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><img src="./brost..png" className="img-fluid" alt=""></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><img src="./icon 1.png" className="img-fluid" alt=""></a>
                </li>
                
              </ul> --> */}
        </div>
      </div>
    </section>
            {/* <section class="welcome_bg"> */}
                <div class="">
                    <div class="middle_content">
                        <div class="row common_top">
                            <div class="login" style={{ width: "95%" }}>
                                <div >
                                       
                                    <div class="Wrapper_text">
                                       
                                        <div class="text_get_Right" style={{ width: "100%" }}>
                                            {/* <div class="messages_line_right" style={{ display: "none" }}>
                                                <div class="smile_text">
                                                    <img src={AppImages.smile} width="80px" />
                                                    <h3>{AppConstants.noConvo}</h3>
                                                </div>
                                            </div> */}
                                            <div class="row">
                <div class="col-2">
                  <img
                  style={{borderRadius:'50%'}}
                  src={
                    require("../../Pages/clubbox/blank-profile.webp").default} class="img-fluid services-image" alt="no-image" srcset=""/>
                </div>
                                            <div class="col-10 services-text ps-4 d-flex align-items-center">
                                           
                                              
                  {props?.location?.state?.data?.user?.name} 
                  <br/>
                  {'\n'}{props?.location?.state?.data?.title}
                </div>
                </div>
                                            <div class="chat_message">
                                              
                                                <div style={{marginTop:10}} class="bottom_next left">
                                                    {comment?.map((x,i)=>{
                                                       return (
                                                       <>
                                                       <div style={{textAlign:'center'}}>{
                                                         i==0?
                                                         moment(x.createdOn).format('LL')
                                                         :
                                                        moment(x.createdOn).format('LL')==moment(comment[i-1].createdOn).format('LL')?'':moment(x.createdOn).format('LL')
                                                        }</div>
                                                       <div class= {x.user._id==JSON.parse(localStorage?.userInfo)?._id?"text_next_right":'text_next'}>
                                                        
                                                        <p>
                                                       <div style={{color:'#DF1D1DEB'}}>
                                                       <img
                                                       style={{marginRight:'5%'}}
                  src={AppImages.user} class="img-fluid_message" alt="no-image" />
                                                         {x?.user?.name}</div><br/>
                                                          {x.content}</p>
                                                        <div class="img_line">
                                                            {/* <img src={AppImages.man} width="50" />
                                                            <div>{x?.user?.name}</div> */}
                                                        </div>
                                                    </div>
                                                    </>
                                                    )})}
                                                </div>
                                               
                                                <div class="bottom_bar">
                                                    <input
                                                    value={text}
                                                    onChange={(t)=>setText(t.currentTarget.value)}
                                                    type="text" placeholder="Type a message" style={{ outline: "none" }} />
                                                    <button
                                                    onClick={sendMessage}
                                                    type="submit" class="submit_line">{AppConstants.Send}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            {/* </section> */}
            {/* <Footer></Footer> */}
        </div>
    )
}

export default Message;