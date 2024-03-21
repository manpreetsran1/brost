import ApiConstants from "../../../Themes/ApiConstants"

const State = {
    isLoading: false,
    error: null,
    status: 0,
    urlStatus:true,
    // resetPassSuccess:false,
    data:{}    
}

export const resetPassReducer = (state = State, action) => {
    switch (action.type) {
        // case ApiConstants.ResetSuccess:
          
        //     return { ...state, resetPassSuccess:false }

        case ApiConstants.resetPassword:
            console.log("action", action)
         
            return { ...state, isLoading: true, error: null,urlStatus:true }

        case ApiConstants.resetPassSuccess: 
        console.log(action.result.data.isShow,"new")
            return {
                ...state,
                result:action.result,
                data:action.result.data,
                isLoading: false,
                status: action.status,
                urlStatus:action.urlStatus,
                
                // resetPassSuccess:true
            }

        case ApiConstants.resetPassFail:
            return {
                ...state,
                isLoading: false,
                urlStatus:action.urlStatus,
                // resetPassSuccess:false
            }

        case ApiConstants.resetPassError:
            return {
                ...state,
                isLoading: false,
                urlStatus:action.urlStatus?action.urlStatus:false,
                // resetPassSuccess:false
            }
        default:
            return state;

    }
}