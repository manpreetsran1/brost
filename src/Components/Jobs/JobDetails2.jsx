import React, { useState, useEffect } from "react";
import Header from "../../CustomComponents/Header";
import Footer from "../../CustomComponents/Footer";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppImages from "../../Themes/AppImages";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));
document.title = "Job Details"

function JobDetails2() {
    document.title = "Job Details"
    const [isVisible, setIsVisible] = useState(false)

    const showModal = () => {
        setIsVisible(true)


    }

    const handleClose = () => setIsVisible(false);
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

    // return focus to the button when we transitioned from !open -> open
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
    const [tabPanel, setTabPanel] = useState(1)
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
            <Header {...propsData}>
            </Header>
            <section class="welcome_bg">
                <div class="container">
                    <div class="middle_content">
                        <div class="row common_top">
                            <div class="login jobs_details">
                                <form class="contact_us" >
                                    <div class="middle_inputs">
                                        <h2 class="text-center" style={{ marginBottom: "70px" }}>Job Details</h2>
                                        <div class="mb-4 inputs">
                                            {/* <!-- <label for="">Email Address</label> --> */}
                                            <img src={AppImages.title} alt="text" />
                                            <input type="text" class="form-control" value="Artist" disabled />
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
                                                    disabled />
                                         
                                        </div>
                                        <div class="mb-4 inputs d-flex ml-1" style={{ marginTop: "36px", marginBottom: "30px" }}>
                                            <span class="looking_text">Looking For</span>
                                            <span class="radio_btn1" id="first_radio">
                                                <label class="container"><span style={{ fontSize: "17px", fontWeight: "200", cursor: "default" }}>Artist</span>
                                                    <input type="radio" name="radio" checked disabled />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </span>
                                            <span class="radio_btn1" id="first_radio1">
                                                <label class="container"><span style={{ fontSize: "17px", fontWeight: "200", cursor: "default" }}>Band</span>
                                                    <input type="radio" name="radio" disabled />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </span>
                                        </div>
                                        <div class="artist_section ">
                                            <div class="mb-4 inputs " >
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
                    <MenuItem  onClick={()=>handleCloseCategory("Select Category 1")}> Select Category 1</MenuItem>
                    <MenuItem  onClick={()=>handleCloseCategory("Select Category 2")}>  Select Category 2</MenuItem>
                    <MenuItem  onClick={()=>handleCloseCategory("Select Category 3")}> Select Category 3</MenuItem>
                    
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow> 
          )}
        </Popper> */}

                                            </div>
                                            <div class="mb-4 inputs ">
                                                {/* <!-- <label for="">Email Address</label> --> */}
                                                <img src={AppImages.subCategory} alt="sub" class="second" />
                                                {/* <!-- <input type="text" class="form-control" placeholder="Enter Email Address" /> --> */}
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
                    <MenuItem  onClick={()=>handleCloseSubCategory("Select Sub Category 1")}> Select Sub Category 1</MenuItem>
                    <MenuItem  onClick={()=>handleCloseSubCategory("Select Sub Category 2")}>  Select Sub Category 2</MenuItem>
                    <MenuItem  onClick={()=>handleCloseSubCategory("Select Sub Category 3")}> Select Sub Category 3</MenuItem>
                    
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper> */}

                                            </div>
                                            <div class="mb-4 inputs">
                                                {/* <!-- <label for="">Email Address</label> --> */}
                                                <img src={AppImages.budget} alt="ruppes" />
                                                <input type="text" class="form-control" value="300" disabled />
                                            </div>
                                            <div class="mb-4 inputs">
                                                {/* <!-- <label for="">Password</label> --> */}
                                                <img src={AppImages.address} alt="map" />
                                                <input type="text" class="form-control" value="HNo.56, Mohali, Punjab-143001" disabled />
                                            </div>
                                            <div class="mb-4 inputs">
                                                {/* <!-- <label for="">Password</label> --> */}
                                                <img src={AppImages.invitation} alt="map" />
                                                <input type="text" class="form-control" value="Daniel 1, Daniel 1" disabled />
                                            </div>
                                        </div>
                                        <div class="band_section">
                                            <div class="mb-4 inputs">
                                                {/* <!-- <label for="">Email Address</label> --> */}
                                                <img src={AppImages.invitation} alt="sub" class="first" />
                                                {/* <!-- <input type="text" class="form-control" placeholder="Enter Email Address" /> --> */}
                                                <div class="custom-select form-control">
                                                    <select name="" id="category" class="form-control">
                                                        <option value="0"><p><img src="images/sub category.svg" alt="sub" />Select Category</p></option>
                                                        <option value="1"><img src="images/sub category.svg" alt="sub" />Band category 1</option>
                                                        <option value="2"><img src="images/sub category.svg" alt="sub" />Band category 2</option>
                                                        <option value="3"><img src="images/sub category.svg" alt="sub" />Band category 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="mb-4 inputs">
                                                {/* <!-- <label for="">Email Address</label> --> */}
                                                <img src="images/hire.png" alt="sub" class="second" />
                                                {/* <!-- <input type="text" class="form-control" placeholder="Enter Email Address" /> --> */}
                                                <div class="custom-select form-control">
                                                    <select name="" id="sub-category" class="form-control">
                                                        <option value="0"><p><img src="images/sub category.svg" alt="sub" />Select Sub Category</p></option>
                                                        <option value="1"><img src="images/sub category.svg" alt="sub" />Band Sub Category 1</option>
                                                        <option value="2"><img src="images/sub category.svg" alt="sub" />Band Sub Category 2</option>
                                                        <option value="3"><img src="images/sub category.svg" alt="sub" />Band Sub Category 3</option>
                                                    </select>
                                                </div>
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
                                        </div>
                                    </div>
                                    <div class="circle_img circle">
                                        <img src="images/circle.png" alt="circle" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="contact_us real" style={{ marginBottom: "10%" }}>

                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <Link class={`nav-link ${tabPanel == 1 && 'active'}`} onClick={() => setTabPanel(1)} data-toggle="tab" role="tab">Proposals</Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ${tabPanel == 2 && 'active'}`} onClick={() => setTabPanel(2)} data-toggle="tab" role="tab">Entertainers</Link>
                            </li>

                        </ul>
                        {/* <!-- Tab panes --> */}
                        <div class="tab-content">
                            {tabPanel == 1 &&
                                <div class={`tab-pane ${tabPanel == 1 && 'active'}`} >
                                    <Link to="/JobsProposal">
                                        <div class="line_element">
                                            <div class="img_first">
                                                <div class="title">
                                                    <img src={AppImages.man} />
                                                </div>
                                                <div class="jobs_line">
                                                    <h4>Job Title</h4>
                                                    <h5>Rockstars<span class="img_line"><img src={AppImages.star} />5</span></h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the...</p>
                                                </div>
                                            </div>
                                            <div class="date_one-new">
                                                <p>05 May 2021</p>
                                                <h2 >$300</h2>
                                            </div>
                                        </div>

                                    </Link>
                                    <Link to="/JobsProposal">

                                        <div class="line_element">
                                            <div class="img_first">
                                                <div class="title">
                                                    <img src={AppImages.man} />
                                                </div>
                                                <div class="jobs_line">
                                                    <h4>Job Title</h4>
                                                    <h5>Rockstars<span class="img_line"><img src={AppImages.star} />5</span></h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the...</p>
                                                </div>
                                            </div>
                                            <div class="date_one-new">
                                                <p>05 May 2021</p>
                                                <h2 >$300</h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/JobsProposal">

                                        <div class="line_element">
                                            <div class="img_first">
                                                <div class="title">
                                                    <img src={AppImages.man} />
                                                </div>
                                                <div class="jobs_line">
                                                    <h4>Job Title</h4>
                                                    <h5>Rockstars<span class="img_line"><img src={AppImages.star} />5</span></h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the...</p>
                                                </div>
                                            </div>
                                            <div class="date_one-new">
                                                <p>05 May 2021</p>
                                                <h2 >$300</h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <div class="active_jobss">
                                        <ul style={{ marginTop: "29px" }}>
                                            <li><img src={AppImages.arrow1} /></li>
                                            <li><span class="active">1</span></li>

                                            <li><img src={AppImages.rightArrow} /></li>
                                        </ul>

                                    </div>
                                </div>
                            }
                            {tabPanel == 2 &&
                                <div class={`tab-pane ${tabPanel == 2 && 'active'}`} >
                                    <Link to="/JobsEntertainer">
                                        <div class="line_element">
                                            <div class="img_first">
                                                <div class="title">
                                                    <img src={AppImages.man} />
                                                </div>
                                                <div class="jobs_line">
                                                    <h4>Deniel</h4>
                                                    <h5>Drummer<span class="img_line"><img src={AppImages.star} />5</span></h5>
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                    <Link to="/JobsEntertainer">
                                        <div class="line_element">
                                            <div class="img_first">
                                                <div class="title">
                                                    <img src={AppImages.man} />
                                                </div>
                                                <div class="jobs_line">
                                                    <h4>Deniel</h4>
                                                    <h5>Drummer<span class="img_line"><img src={AppImages.star} />5</span></h5>
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                    <Link to="/JobsEntertainer1">
                                        <div class="line_element">
                                            <div class="img_first">
                                                <div class="title">
                                                    <img src={AppImages.man} />
                                                </div>
                                                <div class="jobs_line">
                                                    <h4>Neil</h4>
                                                    <h5>Vocal Artist<span class="img_line"><img src={AppImages.star} />5</span></h5>
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                    <Link to="/JobsEntertainer">
                                        <div class="line_element">
                                            <div class="img_first">
                                                <div class="title">
                                                    <img src={AppImages.man} />
                                                </div>
                                                <div class="jobs_line">
                                                    <h4>Deniel</h4>
                                                    <h5>Drummer<span class="img_line"><img src={AppImages.star}/>5</span></h5>
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                    <div class="active_jobss">
                                        <ul style={{ marginTop: "29px" }}>
                                            <li><img src={AppImages.arrow1} /></li>
                                            <li><span class="active">1</span></li>
                                            {/* <li><span>2</span></li> */}
                                            <li><img src={AppImages.rightArrow} /></li>
                                        </ul>

                                    </div>
                                </div>
                            }
                        </div>
                        <div class="circle_img circle">
                            <img src={AppImages.circle} alt="circle" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    )
}

export default JobDetails2;