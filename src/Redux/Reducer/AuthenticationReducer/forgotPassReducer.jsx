import ApiConstants from "../../../Themes/ApiConstants"

const State = {
    isLoading: false,
    error: null,
    status: 0,
    data:{}    
}

export const forgotPassReducer = (state = State, action) => {
    switch (action.type) {
       
        case ApiConstants.forgotPass:
            console.log("action", action)
            return { ...state, isLoading: true, error: null }

        case ApiConstants.forgotSuccess: 
            return {
                ...state,
                result:action.result,
                data:action.result.data,
                isLoading: false,
                status: action.status,
            }

        case ApiConstants.forgotFail:
            return {
                ...state,
                isLoading: false,
            }

        case ApiConstants.forgotError:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;

    }
}