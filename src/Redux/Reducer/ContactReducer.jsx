import ApiConstants from "../../Themes/ApiConstants"

const State = {
    isLoading: false,
    error: null,
    status: 0,
    contactSuccess:false,
    data:{}
}

export const contactReducer = (state = State, action) => {
    switch (action.type) {
        case ApiConstants.ResetSuccess:
          
            return { ...state, contactSuccess:false }
        case ApiConstants.contact:
            console.log("action", action)
            return { ...state, isLoading: true, error: null,contactSuccess:false }

        case ApiConstants.contactSuccess:
            return {
                ...state,
                result:action.result,
                data:action.result.data,
                isLoading: false,
                status: action.status,
                contactSuccess:true
            }

        case ApiConstants.contactFail:
            return {
                ...state,
                isLoading: false,
                contactSuccess:false
            }

        case  ApiConstants.contactError:
            return {
                ...state,
                isLoading: false,
                contactSuccess:false
            }
        default:
            return state;

    }
}