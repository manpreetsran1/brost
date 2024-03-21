import React, { useState, useEffect } from "react";
import Footer from "../../CustomComponents/Footer";
import Header from "../../CustomComponents/Header";
import "../Dashboard/CustomStyle.css"
import { useHistory } from "react-router-dom";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ValidationConstants from "../../Themes/ValidationConstants";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from 'antd';
import AppConstants from "../../Themes/AppConstants";
import 'antd/dist/antd.css'
import AppImages from "../../Themes/AppImages";
import { Select } from 'antd';

const { Option } = Select;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));


function CreateJob() {
  document.title = "Create Job"
  const [isVisible, setIsVisible] = useState(false)
  const history = useHistory()
  const showModal = () => {
    setIsVisible(true)


  }


function handleChange(value) {
  console.log(`selected ${value}`);
}
  const propsData = {
    link1: "white",
    link2: "white",
    link3: "#9a75c7",
    link4: "white",
    link4: "#fff",
    link5: "#fff",
    link6: "#fff",
    link7: "#fff",
    linkd3: "underline",
    size3: "bold"
  }
  const onSubmit = (values) => {
    var formdata = new FormData();
    // formdata.append("email", values.email);
    // formdata.append("password", values.password);
    // dispatch(loginAction(formdata, history))
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().matches(/^(\S+$)/, ValidationConstants.newSpace).max(30, ValidationConstants.title).required(ValidationConstants.reqTitle),
    description: Yup.string().matches(/^(\S+$)/, ValidationConstants.newSpace).max(6, ValidationConstants.description).required(ValidationConstants.valDescription),
    budget: Yup.string().matches(/^(\S+$)/, ValidationConstants.newSpace).max(30, ValidationConstants.title).required(ValidationConstants.reqBudget),
    address: Yup.string().matches(/^(\S+$)/, ValidationConstants.newSpace).max(30, ValidationConstants.title).required(ValidationConstants.reqAddress),
    newCategory:Yup.string().required("Please select an option.")
  });

  const initialValues = {
    title: "",
    description: "",
    budget: "",
    address: "",
    newCategory:"Select Category"
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleClose = () => setIsVisible(false);
  const handleCloseCategory = (value) => {
    setCategory(value)
    setOpen1((prevOpen1) => !prevOpen1);


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

  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const [category, setCategory] = React.useState(null)
  const [subCategory, setSubCategory] = React.useState(null)

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

  const array = [
    {
      title: AppConstants.JobTitle,
      text: AppConstants.rockstar,
      definition: AppConstants.Lorem,
      button: AppConstants.Invite,
      image: AppImages.star,
      number: 5
    },
    {
      title: AppConstants.JobTitle,
      text: AppConstants.rockstar,
      definition: AppConstants.Lorem,
      button: AppConstants.Invite,
      image: AppImages.star,
      number: 5
    },
    {
      title: AppConstants.JobTitle,
      text: AppConstants.rockstar,
      definition: AppConstants.Lorem,
      button: AppConstants.Invite,
      image: AppImages.star,
      number: 5
    },
    {
      title: AppConstants.JobTitle,
      text: AppConstants.rockstar,
      definition: AppConstants.Lorem,
      button: AppConstants.Invite,
      image: AppImages.star,
      number: 5
    },
    {
      title: AppConstants.JobTitle,
      text: AppConstants.rockstar,
      definition: AppConstants.Lorem,
      button: AppConstants.Invite,
      image: AppImages.star,
      number: 5
    },
    {
      title: AppConstants.JobTitle,
      text: AppConstants.rockstar,
      definition: AppConstants.Lorem,
      button: AppConstants.Invite,
      image: AppImages.star,
      number: 5
    },
    {
      title: AppConstants.JobTitle,
      text: AppConstants.rockstar,
      definition: AppConstants.Lorem,
      button: AppConstants.Invite,
      image: AppImages.star,
      number: 5
    },
    {
      title: AppConstants.JobTitle,
      text: AppConstants.rockstar,
      definition: AppConstants.Lorem,
      button: AppConstants.Invite,
      image: AppImages.star,
      number: 5
    }
  ]
  return (
    <div>
      <Header {...propsData}></Header>
      <section class="welcome_bg">
        <div class="container">
          <div class="middle_content">
            <div class="row common_top">
              <div class="login">
                <form class="contact_us" onSubmit={formik.handleSubmit} noValidate="noValidate">
                  <div class="middle_inputs">
                    <h2 class="text-center" style={{ marginBottom: "70px" }}>{AppConstants.createJob}</h2>
                    <div class="mb-4 inputs">

                      <img src={AppImages.title} alt="text" />
                      <input name="title" className="form-control" placeholder="Enter Title" type="title" onChange={formik.handleChange} value={formik.values.title} autoComplete="off" maxLength="30" />
                      {formik.errors.title ? <div className="error">{formik.errors.title}</div> : null}
                    </div>
                    <div class="mb-4 inputs">

                      <img src={AppImages.description} alt="des" />

                      <textarea name="description" className="form-control" placeholder="Enter Description" type="description" onChange={formik.handleChange} value={formik.values.description} autoComplete="off" maxLength="1000" />
                      {formik.errors.description ? <div className="error">{formik.errors.description}</div> : null}

                    </div>
                    <div class="mb-4 inputs d-flex ml-1" style={{ marginTop: "36px", marginBottom: "30px" }}>
                      <span class="looking_text">Looking For</span>
                      <span class="radio_btn" id="first_radio">
                        <label class="container"><span style={{ fontSize: "17px", fontWeight: "200" }}>{AppConstants.Artist}</span>
                          <input type="radio" name="radio" checked />
                          <span class="checkmark"></span>
                        </label>
                      </span>
                      <span class="radio_btn" id="first_radio1">
                        <label class="container"><span style={{ fontSize: "17px", fontWeight: "200" }}>{AppConstants.Band}</span>
                          <input type="radio" name="radio" />
                          <span class="checkmark"></span>
                        </label>
                      </span>
                    </div>
                    <div class="artist_section">
                      <div className="mb-4 inputs selector">
                      {/* <img src={AppImages.category} alt="sub" class="first" />
                        <Select name="newCategory" type="newCategory" class="form-control"  style={{ width: 600 }} onChange={formik.handleChange} value={formik.values.newCategory}>
                          <Option value="Select Category 1">Select Category 1</Option>
                          <Option value="Select Category 2">Select Category 2</Option>
                          <Option value="Select Category 3">Select Category 3</Option>
                        </Select>
                        {formik.errors.newCategory ? <div className="error">{formik.errors.newCategory}</div> : null} */}
                      </div>
                      <div class="mb-4 inputs selector">
                        <img src={AppImages.category} alt="sub" class="first" />

                        <input class="form-control" id="sub-category" aria-haspopup="true" aria-expanded="false"
                          name="category"
                          ref={anchorRef1}
                          aria-controls={open1 ? 'menu-list-grow1' : undefined}
                          aria-haspopup="true"
                          onClick={handleToggle1}
                          placeholder="Select Category"
                          value={category ? category : "Select Category"}
                          onChange={value => formik.setFieldValue("category", value)}
                          type='button'
                          style={{ caretColor: "transparent", cursor: "default", color: category ? "#fff" : "grey" }}
                        >
                        </input>
                     
                        <Popper open={open1} anchorEl={anchorRef1.current} role={undefined} transition disablePortal>
                          {({ TransitionProps, placement }) => (
                            <Grow
                              {...TransitionProps}
                              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                              <Paper>
                                <ClickAwayListener onClickAway={handleClose2}>
                                  <MenuList autoFocusItem={open1} id="menu-list-grow1" onKeyDown={handleListKeyDown1}>
                                    <MenuItem onClick={() => handleCloseCategory("Select Category 1")}> {AppConstants.Category1}</MenuItem>
                                    <MenuItem onClick={() => handleCloseCategory("Select Category 2")}> {AppConstants.Category2}</MenuItem>
                                    <MenuItem onClick={() => handleCloseCategory("Select Category 3")}> {AppConstants.Category3}</MenuItem>

                                  </MenuList>
                                </ClickAwayListener>
                              </Paper>
                            </Grow>
                          )}
                        </Popper>

                      </div>
                      <div class="mb-4 inputs selecter">
                        <img src={AppImages.subCategory} alt="sub" class="second" />
                        <input class="form-control" id="sub-category" aria-haspopup="true" aria-expanded="false"
                          ref={anchorRef}
                          aria-controls={open ? 'menu-list-grow' : undefined}
                          aria-haspopup="true"
                          onClick={handleToggle}
                          type='button'
                          value={subCategory ? subCategory : "Select Sub Category"}
                          placeholder="Select Sub Category"
                          style={{ caretColor: "transparent", cursor: "default", color: subCategory ? "#fff" : "grey" }}
                        >
                        </input>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                          {({ TransitionProps, placement }) => (
                            <Grow
                              {...TransitionProps}
                              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                              <Paper>
                                <ClickAwayListener onClickAway={handleClose1}>
                                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={() => handleCloseSubCategory("Select Sub Category 1")}> {AppConstants.subCategory1}</MenuItem>
                                    <MenuItem onClick={() => handleCloseSubCategory("Select Sub Category 2")}> {AppConstants.subCategory2}</MenuItem>
                                    <MenuItem onClick={() => handleCloseSubCategory("Select Sub Category 3")}> {AppConstants.subCategory3}</MenuItem>

                                  </MenuList>
                                </ClickAwayListener>
                              </Paper>
                            </Grow>
                          )}
                        </Popper>

                      </div>
                      <div class="mb-4 inputs">

                        <img src={AppImages.budget} alt="ruppes" />
                        <input name="budget" className="form-control" placeholder="Enter Job Budget" type="budget" onChange={formik.handleChange} value={formik.values.budget} autoComplete="off" />
                        {formik.errors.budget ? <div className="error">{formik.errors.budget}</div> : null}

                        {/* <input type="text" class="form-control" placeholder="Enter Job Budget" /> */}
                      </div>
                      <div class="mb-4 inputs">

                        <img src={AppImages.address} alt="map" />
                        <input name="address" className="form-control" placeholder="Enter Address" type="address" onChange={formik.handleChange} value={formik.values.address} autoComplete="off" />
                        {formik.errors.address ? <div className="error">{formik.errors.address}</div> : null}
                        {/* <input type="text" class="form-control" placeholder="Enter Address" /> */}
                      </div>
                      <div class="text-center" style={{ marginTop: "52px", display: "flex", justifyContent: "space-evenly" }}>

                        <button type="submit" class="button-contact common_btn" style={{ width: "160%" }} onClick={() => history.push("/Dashboard")}>{AppConstants.Cancel}</button>

                        <button type="submit" class="button-contact common_btn" data-toggle="modal" data-target="#myModal17" >{AppConstants.postJob}</button>

                      </div>
                    </div>

                  </div>
                  <div class="circle_img">
                    <img src={AppImages.circle} alt="circle" />
                  </div>
                </form>
              </div>
            </div>
          </div >
        </div >
      </section >
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} maskClosable={false} footer={[]}


        width="140vh"
        bodyStyle={{
          // backgroundColor:"#26123e",
          borderRadius: "12px"
        }}

      >
        <div id="myModal17" >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" onClick={handleCancel}><img src={AppImages.close} width="30" /></button>
                <h4 class="modal-title">{AppConstants.allArtists}
                </h4>
              </div>

              <div class="modal-body ">

                {
                  array.map((item => {
                    return (
                      <div className="line_element">
                        <div className="img_first">
                          <div class="title">
                            <img src={AppImages.man} />
                          </div>
                          <div class="jobs_line">
                            <h4>{item.title}</h4>
                            <h5>{item.text}<span class="img_line"><img src={item.image} />{item.number}</span></h5>
                            <p>{item.definition}</p>
                          </div>
                        </div>
                        <div class="date_one text">

                          <button type="submit" onClick={() => history.push("/Jobs")}>{item.button}</button>

                        </div>

                      </div>
                    )
                  }))
                }

              </div>
            </div>
          </div>
        </div>

      </Modal>
      <Footer></Footer>
    </div >
  )
}

export default CreateJob;