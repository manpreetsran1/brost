// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/SignUp";
// import Dashboard from "./Components/Dashboard/Dashboard";
import ForgotPassword from "./Components/Authentication/ForgotPassword";
import Home from "./Components/Home/Home";
import { ToastContainer } from 'react-toastify';
import Invest from "./Components/Invest/Invest";
import Clubbox from "./Pages/clubbox";
import Descriptions from "./Components/Invest/Descriptions";
import MessageSender from "./Pages/clubbox/Messages";
import RecentMessage from "./Components/Message/RecentMessage";
import Message from "./Components/Message/Message";
import Createpost from "./Pages/clubbox/createpost";
import HomeClubbox from "./Pages/clubbox/home";
import Profile from "./Pages/clubbox/profilePage";
import Engagement from "./Pages/clubbox/Engagement";
import OtherUserProfile from "./Pages/clubbox/user-profile-page";
import { io } from "socket.io-client";
import { useEffect } from "react";





function App() {


  useEffect(() => {
   
  }, [])
  

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={1}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
            (
              <Redirect to="/Home" />
            )
            }
          />
          <Route path="/Login" component={Login} />
          <Route path="/Clubbox" component={Clubbox} />
          <Route path="/InvestNow" component={Invest} />
          <Route path="/descriptions" component={Descriptions} />
          {/* <Route path="/InvestNow" component={Invest} /> */}
          <Route path="/Signup" component={SignUp} />
          <Route path="/ForgotPassword" component={ForgotPassword} />
          <Route path="/Home" component={Home} />
          <Route path="/Messages" component={MessageSender} />
          <Route path="/createPost" component={Createpost} />
          <Route path="/HomeClubbox" component={HomeClubbox} />
          <Route path="/Profile" component={Profile} />
          <Route path="/otheruser" component={OtherUserProfile} />
          <Route path="/Engagement" component={Engagement} />
          <Route
          path="/RecentMessage"
          component={Message}
        />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
