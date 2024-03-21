import React, { useState, useEffect } from "react";
import Footer from "../../CustomComponents/Footer";
import Header from "../../CustomComponents/Header";
import { Link } from "react-router-dom";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { Modal, Button } from 'antd';
import AppImages from "../../Themes/AppImages";

import 'antd/dist/antd.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));


document.title = "Job Details"
function JobDetails4() {

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
  const handleCloseCategory = (value) => {
    setCategory(value)
    setOpen1((prevOpen1) => !prevOpen1);


  }

  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const [category, setCategory] = React.useState("Category")
  const [subCategory, setSubCategory] = React.useState("Sub Category")

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const anchorRef = React.useRef(null);
  const anchorRef1 = React.useRef(null);
  const handleCloseSubCategory = (value) => {
    setSubCategory(value)
    setOpen((prevOpen) => !prevOpen);


  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose1 = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  const handleToggle1 = () => {
    setOpen1((prevOpen1) => !prevOpen1);
  };

  const handleClose2 = (event1) => {
    if (anchorRef1.current && anchorRef1.current.contains(event1.target)) {
      return;
    }

    setOpen1(false);
  };

  const handleListKeyDown1 = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen1(false);
    }
  }

  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const prevOpen1 = React.useRef(open1);
  useEffect(() => {
    if (prevOpen1.current === true && open1 === false) {
      anchorRef.current.focus();
    }

    prevOpen1.current = open1;
  }, [open1]);
  const propsData = {
    link1: "white",
    link2: "white",
    link3: "white",
    link4: "white",
    link4: "#fff",
    link5: "#9a75c7",
    link6: "#fff",
    link7: "#fff",
    linkd5: "underline",
    size5: "bold"
  }
  return (
    <div>
      <Header {...propsData}></Header>
      <section class="welcome_bg">
        <div class="container">
          <div class="middle_content">
            <div class="row common_top">
              <div class="login jobs_details">
                <form class="contact_us">
                  <div class="middle_inputs">
                    <h2 class="text-center" style={{ marginBottom: "70px" }}>Job Details</h2>
                    <div class="mb-4 inputs">
                      {/* <!-- <label for="">Email Address</label> --> */}
                      <img src={AppImages.title} alt="text" />
                      <input type="text" class="form-control" value="Artist" disabled/>
                    </div>
                    <div class="mb-4 inputs">
                      {/* <!-- <label for="">Email Address</label> --> */}
                      <img src={AppImages.description} alt="des" />
                      {/* <!-- <input type="text" class="form-control" placeholder="Enter Last Name" /> --> */}
                     
                        <textarea name="" id="" rows="4" class="form-control" value=" Lorem Ipsum is simply dummy text of the printing
                          and typesettingindustry. Lorem Ipsum has been the
                          industry's standard dummy text eversince the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book."
                      disabled  />
                     
                    </div>
                    <div class="mb-4 inputs d-flex ml-1" style={{ marginTop: "36px", marginBottom: "30px" }}>
                      <span class="looking_text">Looking For</span>
                      <span class="radio_btn1 " id="first_radio">
                        <label class="container"><span style={{ fontSize: "17px",fontWeight:"200",cursor:"default"  }}>Artist</span>
                          <input type="radio" name="radio" checked disabled/>
                          <span class="checkmark"></span>
                        </label>
                      </span>
                      <span class="radio_btn1" id="first_radio1">
                        <label class="container"><span style={{ fontSize: "17px",fontWeight:"200",cursor:"default"  }}>Band</span>
                          <input type="radio" name="radio" disabled/>
                          <span class="checkmark"></span>
                        </label>
                      </span>
                    </div>
                    <div class="artist_section">
                      <div class="mb-4 inputs ">
                        {/* <!-- <label for="">Email Address</label> --> */}
                        <img src={AppImages.category} alt="sub" class="first" />
                        {/* <!-- <input type="text" class="form-control" placeholder="Enter Email Address" /> --> */}
                        <input class="form-control" id="sub-category" aria-haspopup="true" aria-expanded="false"
                          ref={anchorRef1}
                          aria-controls={open1 ? 'menu-list-grow1' : undefined}
                          aria-haspopup="true"
                          onClick={handleToggle1}
                          placeholder="Select Category"
                          value={category}
                          disabled
                        />

                        
                        {/* <Popper open={open1} anchorEl={anchorRef1.current} role={undefined} transition disablePortal>
                          {({ TransitionProps, placement }) => (
                            <Grow
                              {...TransitionProps}
                              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                              <Paper>
                                <ClickAwayListener onClickAway={handleClose2}>
                                  <MenuList autoFocusItem={open1} id="menu-list-grow1" onKeyDown={handleListKeyDown1}>
                                    <MenuItem onClick={() => handleCloseCategory("Select Category 1")}> Select Category 1</MenuItem>
                                    <MenuItem onClick={() => handleCloseCategory("Select Category 2")}>  Select Category 2</MenuItem>
                                    <MenuItem onClick={() => handleCloseCategory("Select Category 3")}> Select Category 3</MenuItem>

                                  </MenuList>
                                </ClickAwayListener>
                              </Paper>
                            </Grow>
                          )}
                        </Popper> */}
                        {/* <div class="custom-select form-control">
                          <select name="" id="category" class="form-control">
                            <option value="0"><p><img src="images/sub category.svg" alt="sub" />Select Category</p></option>
                            <option value="1"><img src="images/sub category.svg" alt="sub" />Artist category 1</option>
                            <option value="2"><img src="images/sub category.svg" alt="sub" />Artist category 2</option>
                            <option value="3"><img src="images/sub category.svg" alt="sub" />Artist category 3</option>
                          </select>
                        </div> */}
                      </div>
                      <div class="mb-4 inputs ">
                        {/* <!-- <label for="">Email Address</label> --> */}
                        <img src={AppImages.subCategory} alt="sub" class="second" />
                        <input class="form-control" id="sub-category" aria-haspopup="true" aria-expanded="false"
                          ref={anchorRef}
                          aria-controls={open ? 'menu-list-grow' : undefined}
                          aria-haspopup="true"
                          onClick={handleToggle}
                          value={subCategory}
                          placeholder="Select Sub Category"
                          disabled
                        />

                       
                        {/* <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                          {({ TransitionProps, placement }) => (
                            <Grow
                              {...TransitionProps}
                              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                              <Paper>
                                <ClickAwayListener onClickAway={handleClose1}>
                                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={() => handleCloseSubCategory("Select Sub Category 1")}> Select Sub Category 1</MenuItem>
                                    <MenuItem onClick={() => handleCloseSubCategory("Select Sub Category 2")}>  Select Sub Category 2</MenuItem>
                                    <MenuItem onClick={() => handleCloseSubCategory("Select Sub Category 3")}> Select Sub Category 3</MenuItem>

                                  </MenuList>
                                </ClickAwayListener>
                              </Paper>
                            </Grow>
                          )}
                        </Popper> */}
                        {/* <!-- <input type="text" class="form-control" placeholder="Enter Email Address" /> --> */}
                        {/* <div class="custom-select form-control">
                          <select  id="sub-category" class="form-control">
                            <option value="0"><p><img src="images/sub category.svg" alt="sub" />Select Sub Category</p></option>
                            <option value="1"><img src="images/sub category.svg" alt="sub" />Artist Sub Category 1</option>
                            <option value="2"><img src="images/sub category.svg" alt="sub" />Artist Sub Category 2</option>
                            <option value="3"><img src="images/sub category.svg" alt="sub" />Artist Sub Category 3</option>
                          </select>
                        </div> */}
                      </div>
                      <div class="mb-4 inputs">
                        {/* <!-- <label for="">Email Address</label> --> */}
                        <img src={AppImages.budget} alt="ruppes" />
                        <input type="text" class="form-control" value="300" disabled/>
                      </div>

                      <div class="mb-4 inputs">
                        {/* <!-- <label for="">Password</label> --> */}
                        <img src={AppImages.address} alt="map" />
                        <input type="text" class="form-control" value="HNo.56, Mohali, Punjab-143001" disabled/>
                      </div>
                      <div class="mb-4 inputs">
                        {/* <!-- <label for="">Password</label> --> */}
                        <img src={AppImages.invitation} alt="map" />
                        <input type="text" class="form-control" value="Daniel 1, Daniel 1" disabled/>
                      </div>
                      <div class="mb-4 inputs">
                        {/* <!-- <label for="">Email Address</label> --> */}
                        <img src={AppImages.dislike} alt="des" />
                        {/* <!-- <input type="text" class="form-control" placeholder="Enter Last Name" /> --> */}
                       
                          <textarea name="" id="" rows="4" class="form-control" value=" Lorem Ipsum is simply dummy text of the printing
                            and typesettingindustry. Lorem Ipsum has been the
                            industry's standard dummy text eversince the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book."
                        disabled  />
                      
                      </div>
                      <div class="mb-4 inputs">
                        {/* <!-- <label for="">Password</label> --> */}
                        <img src={AppImages.star12} alt="map" />
                        <input type="text" class="form-control" value="5" disabled/>
                      </div>
                    </div>
                    <div class="band_section">
                      <div class="mb-4 inputs">
                        {/* <!-- <label for="">Email Address</label> --> */}
                        <img src="images/sub category.svg" alt="sub" class="first" disabled/>

                      </div>
                      <div class="mb-4 inputs">
                        {/* <!-- <label for="">Email Address</label> --> */}
                        <img src="images/sub category.svg" alt="sub" class="second" />
                        {/* <!-- <input type="text" class="form-control" placeholder="Enter Email Address" /> --> */}


                      </div>
                      <div class="mb-4 inputs">
                        {/* <!-- <label for="">Email Address</label> --> */}
                        <img src="images/budget.svg" alt="ruppes" />
                        <input type="text" class="form-control" value="300" />
                      </div>
                      <div class="mb-4 inputs">
                        {/* <!-- <label for="">Password</label> --> */}
                        <img src="images/address.svg" alt="map" />
                        <input type="text" class="form-control" value="HNo.56, Mohali, Punjab-143001" />
                      </div>
                      <div class="mb-4 inputs">
                        {/* <!-- <label for="">Password</label> --> */}
                        <img src="images/invitation.svg" alt="map" />
                        <input type="text" class="form-control" value="Daniel 1, Daniel 1" />
                      </div>
                      <div class="mb-4 inputs">
                        {/* <!-- <label for="">Email Address</label> --> */}
                        <img src="images/dislike.png" alt="des" />
                        {/* <!-- <input type="text" class="form-control" placeholder="Enter Last Name" /> --> */}
                        
                          <textarea name="" id="" rows="4" class="form-control" value="" >Lorem Ipsum is simply dummy text of the printing
                            and typesettingindustry. Lorem Ipsum has been the
                            industry's standard dummy text eversince the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </textarea>
                      
                      </div>
                      <div class="mb-4 inputs">
                        {/* <!-- <label for="">Password</label> --> */}
                        <img src="images/star12.png" alt="map" />
                        <input type="text" class="form-control" value="5" />
                      </div>
                    </div>
                  </div>
                  <div class="text-center" style={{ marginTop: "52px", display: "flex", justifyContent: "space-between", position: "relative", zIndex: "99" }}>

                    <button type="button" class="button-contact common_btn" data-toggle="modal" data-target="#myModal17" onClick={showModal1} style={{ width: "20%" }}>Rate</button>

                    <Link to="/RaiseDispute" >
                      <button type="button" class="btn btn-warning common_btn alerts" style={{  marginLeft: "-28%" }} >Raise a Dispute</button>
                    </Link>
                  </div>


                  <div class="circle_img">
                    <img src={AppImages.circle} alt="circle" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Modal
        isOpen={isVisible}
        id="myModal19"
        style={{
          overlay: {
            zIndex: 99999,

            top: "-2%",
            left: "30%",
            right: "25%",
            bottom: "47%",
           
            
          },
          content: {
            backgroundColor: "transparent",
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
       
        centered
      >
        <button type="button" class="close" data-dismiss="modal" onClick={handleClose}><img src="images/close.png" width="35" /></button>
       <div id="myModal12" >
  <div class="modal-dialog">

   
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><img src="images/close.png" width="35" /></button>
        <h4 class="modal-title">Give Ratings</h4>
      </div>
      
      <div class="modal-body">
        <div class="Give Rating">
          <div class="quality Rating">
            <h3>Quality Rating</h3>
            <img src="images/star1.png" />
          </div>
          <div class="quality Rating">
            <h3>Turn Around Time Rating</h3>
            <img src="images/star1.png" />
          </div>
           <div class="quality Rating">
            <h3>Improvisation Rating</h3>
            <img src="images/star1.png" />
          </div>
           <div class="quality Rating">
            <h3>Resource Rating</h3>
            <img src="images/star99.png" />
          </div>
            <div class="quality Rating">
            <h3>Professionalism Rating</h3>
            <img src="images/star1.png" />
          </div>
           <div class="mb-4 inputs">
               

                <img src="images/description.svg" alt="des" />
                

               
                <div class="text_box">
                <textarea name="" id="" rows="4" class="form-control" placeholder="Write Your Reviews"></textarea>
              </div>
              </div>
               <div class="text-center" style={{marginTop:"70px"}}>
                <a href="JobDetails4">
                  <button type="button" class="button-contact common_btn">Submit</button>
                </a>
              </div>
              <div class="circle_img">
              <img src="images/circle.png" alt="circle" />
            </div>

      </div>
    
    </div>

  </div>
</div>
</div>
      </Modal> */}
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[]}

        bodyStyle={{
          backgroundColor: "transparent",
          borderRadius:10

        }}
       

      >

        <div id="myModal12" >
          <div class="modal-dialog">


            <div class="modal-content" style={{width:"95vh",borderRadius:"50%"}}>
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" onClick={handleCancel}><img src={AppImages.close}  width="30" /></button>
                <h4 class="modal-title">Give Ratings</h4>
              </div>
              <div className="ratings">
                <div class="modal-body">
                  <div class="Give Rating">
                    <div class="quality Rating">
                      <h3>Quality Rating</h3>
                      <img src={AppImages.star1} />
                    </div>
                    <div class="quality Rating">
                      <h3>Turn Around Time Rating</h3>
                      <img src={AppImages.star1} />
                    </div>
                    <div class="quality Rating">
                      <h3>Improvisation Rating</h3>
                      <img src={AppImages.star1} />
                    </div>
                    <div class="quality Rating">
                      <h3>Resource Rating</h3>
                      <img src={AppImages.star1} />
                    </div>
                    <div class="quality Rating">
                      <h3>Professionalism Rating</h3>
                      <img src={AppImages.star1} />
                    </div>
                    <div class="mb-4 inputs">


                      <img src={AppImages.description} alt="des" />



                 
                        <textarea name="" id="" rows="4" class="form-control" placeholder="Write Your Reviews"></textarea>
                    
                    </div>
                    <div class="text-center" style={{ marginTop: "70px" }}>
                      <a href="JobDetails4">
                        <button type="button" class="button-contact common_btn">Submit</button>
                      </a>
                    </div>
                    <div class="circle_img">
                      <img src={AppImages.circle} alt="circle" />
                    </div>

                  </div>

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

export default JobDetails4;