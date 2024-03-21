import {combineReducers} from "redux";
import { loginReducer } from "./AuthenticationReducer/loginReducer";
import { investReducer } from "./AuthenticationReducer/investReducer";
import { signUpReducer } from "./AuthenticationReducer/signUpReducer";
import { dashboardReducer } from "./DashboardReducer/DashboardReducer";
import { contactReducer } from "./ContactReducer";
import { forgotPassReducer } from "./AuthenticationReducer/forgotPassReducer";
import { setPassReducer } from "./AuthenticationReducer/setPassReducer";
import { categoryReducer } from "./CreateJobReducer/CategoryReducer";
import { resetPassReducer } from "./AuthenticationReducer/ResetPasswordReducer";

const rootReducer=combineReducers({
    loginReducer,
    signUpReducer,
    dashboardReducer,
    contactReducer,
    forgotPassReducer,
    setPassReducer,
    categoryReducer,
    resetPassReducer,
    investReducer
})

export default rootReducer