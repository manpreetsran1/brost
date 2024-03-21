import React from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import PrivateRoute from "../Util/ProtectedRoutes";
import Dashboard from "../Components/Dashboard/Dashboard";
import News from "../Components/News/News";
import CreateJob from "../Components/Jobs/CreateJob";
import Ping from "../Components/Ping/Ping";
import Notification from "../Components/Notification/Notification";
import Jobs from "../Components/Jobs/Jobs";
import Message from "../Components/Message/Message";
import Work from "../Components/Dashboard/Work";
import Contact from "../Components/Contact/Contact";
import Profile from "../Components/Dashboard/Profile"
import NewDetails from "../Components/News/NewDetails";
import Stories from "../Components/News/Stories";
import AllNotifications from "../Components/Notification/AllNotifications";
import Home from "../Components/Home/Home";
import JobDetails1 from "../Components/Jobs/JobDetails1";
import AllJobs from "../Components/Jobs/AllJobs"
import JobDetails2 from "../Components/Jobs/JobDetails2";
import JobsProposal from "../Components/Jobs/JobsProposal";
import JobsEntertainer from "../Components/Jobs/JobsEntertainer";
import JobDetails3 from "../Components/Jobs/JobDetails3";
import EditProfile from "../Components/Dashboard/EditProfile";
import ContactMessage from "../Components/Contact/ContactMessage";
import JobDetails4 from "../Components/Jobs/JobDetails4";
import RaiseDispute from "../Components/Jobs/RaiseDispute";
import DisputeMessage from "../Components/Jobs/DisputeMessage";
import RecentMessage from "../Components/Message/RecentMessage";
import JobsEntertainer1 from "../Components/Jobs/JobsEntertainer1";
import Invest from "../Components/Invest/Invest";

function Routes(){
    return(
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/Dashboard" />} />
            <PrivateRoute
          path="/InvestNow"
          component={Invest}
        />
         <PrivateRoute
          path="/Dashboard"
          component={Dashboard}
        />
        <PrivateRoute
          path="/AllJobs"
          component={ AllJobs}
        />
        <PrivateRoute
          path="/EditProfile"
          component={ EditProfile}
        />
        <PrivateRoute
          path="/ContactMessage"
          component={ ContactMessage}
        />
        <PrivateRoute
          path="/JobsEntertainer1"
          component={ JobsEntertainer}
        />
        <PrivateRoute
          path="/JobsProposal"
          component={ JobsProposal}
        />
        <PrivateRoute
          path="/JobDetails1"
          component={ JobDetails1}
        />
        <PrivateRoute
          path="/JobDetails2"
          component={ JobDetails2}
        />
        <PrivateRoute
          path="/JobDetails3"
          component={ JobDetails3}
        />
         <PrivateRoute
          path="/JobDetails4"
          component={ JobDetails4}
        />
         <PrivateRoute
          path="/RaiseDispute"
          component={ RaiseDispute}
        />
         <PrivateRoute
          path="/DisputeMessage"
          component={ DisputeMessage}
        />
         <PrivateRoute
          path="/JobsEntertainer"
          component={ JobsEntertainer1}
        />
         <PrivateRoute
          path="/RecentMessage"
          component={ RecentMessage}
        />
        <PrivateRoute
          path="/News"
          component={ News}
        />
        <PrivateRoute
          path="/CreateJob"
          component={ CreateJob}
        />
        <PrivateRoute
          path="/Ping"
          component={ Ping}
        />
        <PrivateRoute
          path="/Notification"
          component={ Notification}
        />
         <PrivateRoute
          path="/Message"
          component={ Message}
        />
         <PrivateRoute
          path="/Works"
          component={ Work}
        />
         {/* <PrivateRoute
          path="/Contact"
          component={ Contact}
        /> */}
         <PrivateRoute
          path="/Profile"
          component={ Profile}
        />
         <PrivateRoute
          path="/NewDetails"
          component={ NewDetails}
        />
         <PrivateRoute
          path="/Stories"
          component={ Stories}
        />
        <PrivateRoute
          path="/AllNotifications"
          component={ AllNotifications}
        />
        <PrivateRoute
          path="/Home"
          component={ Home}
        />
        </Switch>

    )
}

export default Routes;