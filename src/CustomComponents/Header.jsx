import React, { useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import AppImages from '../Themes/AppImages'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));


function Header(props) {
  const history = useHistory();
 
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const urls = window.location.href.split("/")
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const logoutButton=()=>{
    history.push("/Login")
    localStorage.removeItem("token")
  }

  const [activeState,setActiveState]=useState()
  
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
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

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  React.useEffect(() => {
    if (urls.includes("Profile")) {
    setActiveState("profile")
    }
    else if(urls.includes("ChangePassword")) {
      setActiveState("password")
    }
    else if(urls.includes("Works"))
{
  setActiveState("works")
}
else if(urls.includes("Contact"))
{
  setActiveState("contactUs")
}
else if(urls.includes("ContactMessage"))
{
  setActiveState("contactUs")
}
   
  }, []);

  let navbarTogglerClass = `collapse navbar-collapse  justify-content-end ${navbarOpen && "show"}`
  return (
    <div>
      <header>
        <div class="container">
          {(urls.includes("Login") || urls.includes("login")) &&
            <nav class="navbar navbar-expand-lg" style={{ marginLeft: "-1%" }}>


              <NavLink to="/Home" class="navbar-brand" >
                <img src={AppImages.monoPlug} />
              </NavLink>
              <button className="navbar-toggler" style={{ marginLeft: "auto" }} type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-expanded={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
                <img src={AppImages.menu} width="25" alt="menu" />
              </button>
              <div className={navbarTogglerClass} id="collapsibleNavbar">

                <div class="navbar-nav">
                  <li class="nav-item">

                      <button type="button" class="btn btn-outline-primary signup" style={{ outline: "none" }} onClick={()=>history.push("/SignUp")}>Sign Up</button>
                   
                  </li>
                </div>
              </div>
            </nav>
          }
          {(urls.includes("SignUp") || urls.includes("Signup")) &&
            <nav class="navbar navbar-expand-lg" style={{ marginLeft: "-1%" }}>


              <div class="navbar-brand">
                <img src={AppImages.monoPlug}  onClick={()=>history.push("/Home")}/>
                </div>
              <button className="navbar-toggler" style={{ marginLeft: "auto" }} type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-expanded={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
                <img src={AppImages.menu} width="22" alt="menu" />
              </button>
              <div className={navbarTogglerClass} id="collapsibleNavbar">


                <div class="navbar-nav">
                  <li class="nav-item">

                      <button type="button" class="btn btn-outline-primary signup" style={{ outline: "none" }} onClick={()=>history.push("/Login")}>Log In</button>
                  
                  </li>
                </div>
              </div>
            </nav>
          }

          {(!urls.includes("SignUp") && !urls.includes("Login") && !urls.includes("login")) && !urls.includes("Signup") &&
            <nav class="navbar navbar-expand-lg" style={{ marginLeft: "-1%" }}>


             
                <img src={AppImages.monoPlug} class="navbar-brand" onClick={()=>history.push("/Dashboard")}/>
            
              <button className="navbar-toggler" style={{ marginLeft: "auto" }} type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-expanded={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
                <img src={AppImages.menu} width="22" alt="menu" />
              </button>
              <div className={navbarTogglerClass} id="collapsibleNavbar">

                <div class="navbar-nav">

                  <h6 className="nav-link " onClick={() => history.push("/Dashboard")} style={{ marginRight: "2%", color: `${props.link1}`, textDecoration: `${props.linkd1}`, fontWeight: `${props.size1}` }} >
                    Dashboard
                  </h6>
                  <h6 className="headerLinks" class="nav-link" onClick={() => history.push("/News")} style={{ marginRight: "2%", color: `${props.link2}`, textDecoration: `${props.linkd2}`, fontWeight: `${props.size2}` }}>
                    News
                  </h6>
                  <h6 to="/CreateJob" className="nav-link" onClick={() => history.push("/CreateJob")} style={{ marginRight: "2%", color: `${props.link3}`, textDecoration: `${props.linkd3}`, fontWeight: `${props.size3}` }}>
                    Create Job
                  </h6>

                  <h6 className="nav-link " onClick={() => history.push("/Ping")} style={{ marginRight: "2%", color: `${props.link4}`, textDecoration: `${props.linkd4}`, fontWeight: `${props.size4}` }}>
                    Ping
                  </h6>
                  <h6 className="nav-link " onClick={() => history.push("/Jobs")} style={{ marginRight: "2%", color: `${props.link5}`, textDecoration: `${props.linkd5}`, fontWeight: `${props.size5}` }}>
                    Jobs
                  </h6>
                  <h6 to="/Notification" className="nav-link " onClick={() => history.push("/Notification")} style={{ marginRight: "2%", color: `${props.link6}`, textDecoration: `${props.linkd6}`, fontWeight: `${props.size6}` }}>
                    Notifications
                  </h6>
                  <h6 to="/Message" className="nav-link " onClick={() => history.push("/Message")} style={{ marginRight: "2%", color: `${props.link7}`, textDecoration: `${props.linkd7}`, fontWeight: `${props.size7}` }}>
                    Messages
                  </h6>

                  <div class="nav-item dropdown drop_menu">
                    <h6 class="nav-link dropdown-toggle" class="headerLinks" className="nav-link " style={{ padding: "0 0", cursor: "pointer", color: `${props.link8}`, textDecoration: `${props.linkd8}`,fontWeight: `${props.size9}` }} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                      ref={anchorRef}
                      aria-controls={open ? 'menu-list-grow3' : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle}
                    >
                      Settings
                    </h6>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList autoFocusItem={open} id="menu-list-grow3" onKeyDown={handleListKeyDown}>
                                <MenuItem onClick={handleClose}><h3 class={`dropdown-item ${activeState == "profile" && 'active'}`} style={{ color: `${props.link9}`, textDecoration: `${props.linkd9}` }} onClick={() => history.push("/Profile")}><i class="fa fa-user mr-1" aria-hidden="true"></i>My Profile</h3></MenuItem>
                                <MenuItem onClick={handleClose}><h3 class={`dropdown-item ${activeState == "password" && 'active'}`} onClick={() => history.push("/ChangePassword")}><i class="fa fa-cog mr-1" aria-hidden="true"></i>Change Password</h3></MenuItem>
                                <MenuItem onClick={handleClose}><h3 class={`dropdown-item ${activeState == "works" && 'active'}`} onClick={() => history.push("/Works")}><i class="fa fa-meh-o mr-1" aria-hidden="true"></i>How It Works</h3></MenuItem>
                                <MenuItem onClick={handleClose}><h3 class={`dropdown-item ${activeState == "contactUs" && 'active'}`}onClick={() => history.push("/Contact")}><i class="fa fa-phone mr-1" aria-hidden="true"></i>Contact Us</h3></MenuItem>
                                <MenuItem onClick={handleClose}><h3 class={`dropdown-item ${activeState == "logout" && 'active'}`} onClick={logoutButton}><i class="fa fa-sign-out mr-1" aria-hidden="true"></i>Logout</h3></MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>

                    {/* <a class="nav-link dropdown-toggle" className="nav-link " style={{ padding: "0 0" }} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Settings</a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> */}
                    {/* <a class="dropdown-item signin" href="/Profile"><i class="fa fa-user mr-1" aria-hidden="true"></i> My Profile</a>
                  <a class="dropdown-item" href="/ChangePassword"><i class="fa fa-cog mr-1" aria-hidden="true"></i> Change Password</a>
                  <a class="dropdown-item" href="/Works"><i class="fa fa-meh-o mr-1" aria-hidden="true"></i> How It Works</a>
                  <a class="dropdown-item" href="/Contact"><i class="fa fa-phone mr-1" aria-hidden="true"></i> Contact Us</a>
                  <a class="dropdown-item logout" href="/Login"><i class="fa fa-sign-out mr-1" aria-hidden="true"></i> Logout</a> */}
                    {/* </div> */}
                  </div>

                </div>
              
              </div>
            </nav>
}
        </div>
      </header>
    </div>
  )
}

export default Header;