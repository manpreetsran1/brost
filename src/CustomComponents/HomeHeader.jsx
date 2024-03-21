import React from "react";
import { NavLink, history, useHistory } from "react-router-dom";
import AppImages from "../Themes/AppImages";
import FlatList from "flatlist-react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

function HomeHeader({onChange,search}) {
  const history = useHistory();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const movies=useSelector(state=>state?.loginReducer?.tmdbMovies)
  let navbarTogglerClass = `collapse navbar-collapse  justify-content-end ${
    navbarOpen && "show"
  }`;

  return (
    <div>
      {
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid px-3 px-md-5 ">
            <a class="navbar-brand" onClick={() => history.push("/Home")}>
              <img
                src={AppImages.monoPlug}
                class="img-fluid main-logo"
                alt=""
                srcset=""
              />
            </a>
            <div class="input-group search-bar text-center">
              
              {search?<div>
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label=""
                aria-describedby="basic-addon1"
                onChange={(t)=>onChange(t)}
              />
              {console.log('moviesmovies',movies)}
              <ListGroup style={{}}>
          {/* {movies.map(project => {
            return <div  style={{
             borderWidth:1,
             borderColor:'#fff',
              color:'#fff',width:'100%',textAlign:'start'}}>{project.original_title}</div>;
          })} */}
        </ListGroup>
              </div>:null}
            </div>
              
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li 
                onClick={()=>{
                  history.push("/Clubbox")
                }}
                class="nav-item space-menus">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    onClick={() => {}}
                  >
                    Club box
                  </a>
                </li>
                <li
                  onClick={() => {
                    history.push("/InvestNow");
                  }}
                  class="nav-item space-menus"
                >
                  <a class="nav-link" href="#">
                    Invest now
                  </a>
                </li>

                <li class="nav-item space-menus">
                  <a class="nav-link ">Services</a>
                </li>
                <li
                onClick={() => {
                  history.push("/Login");
                }}
                 class="nav-item  ">
                  <a class="nav-link ">
                    <img
                      src={AppImages.user_Vector}
                      class="img-fluid sign-in-logo"
                      alt=""
                      srcset=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      }

      {/* {<header>
        <div class="container">
          <nav class="navbar navbar-expand-lg" style={{ marginLeft: "-1.5%" }}>


            <div class="navbar-brand">
              <img style={{ height: '1vw', width: '6vw' }} src={AppImages.monoPlug} onClick={() => history.push("/Home")} />
            </div>
            <div >

              <input name="search" placeholder="Search..." style={{ height: '3vh', width: '30vw', paddingLeft: '1vw', borderRadius: '1vw', fontSize: '1.5vh' }}
                autocomplete="off" />
            </div>
              <div style={{ color: 'white', width: '15vw', fontSize: '1.5vh', marginLeft: '5%' }} onClick={() => { }}>Clubbox</div>
              <div style={{ color: 'white', width: '15vw', fontSize: '1.5vh', }} onClick={() => { history.push('/InvestNow') }}>Invest Now</div>
              <div style={{ color: 'white', width: '15vw', fontSize: '1.5vh' }} onClick={() => { }}>Get in touch</div>
              <img style={{ height: '1vw', width: '15vw' }} src={AppImages.user} onClick={() => history.push("/login")} />
          </nav>
        </div>
      </header>} */}
    </div>
  );
}

export default HomeHeader;
