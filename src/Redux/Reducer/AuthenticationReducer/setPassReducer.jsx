import ApiConstants from "../../../Themes/ApiConstants"

const State = {
    isLoading: false,
    error: null,
    status: 0,
    passwordSuccess:false,
    data:{}  
}

export const setPassReducer = (state = State, action) => {
    switch (action.type) {
        case ApiConstants.ResetSuccess:
          
            return { ...state, passwordSuccess:false }
        case ApiConstants.setPass:
            console.log("action", action)
            return { ...state, isLoading: true, error: null ,passwordSuccess:false}

        case ApiConstants.setPassSucess:
            return {
                ...state,
                result:action.result,
                data:action.result.data,
                isLoading: false,
                status: action.status,
                passwordSuccess:true
            }

        case ApiConstants.setPassFail:
            return {
                ...state,
                isLoading: false,
                passwordSuccess:false
            }

        case ApiConstants.setPassError:
            return {
                ...state,
                isLoading: false,
                passwordSuccess:false
            }
        default:
            return state;

    }
}