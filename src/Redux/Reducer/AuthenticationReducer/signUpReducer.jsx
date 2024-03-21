import ApiConstants from "../../../Themes/ApiConstants"

const editState = {
    isLoading: false,
    error: null,
    status: 0,
    data:[],
    postData:[]    
}

export const signUpReducer = (state = editState, action) => {
    switch (action.type) {
       

        case ApiConstants.getPost:
            console.log("action", action)
            return { ...state, isLoading: true, error: null }

        case ApiConstants.getPostSuccess:
           console.log('action.result',action.result);
           localStorage?.setItem('userInfo',JSON.stringify(action.result.success))
            return {
                ...state,
                result:action.result,
                postData:action.result.data,
                
            }

        case ApiConstants.getPostFail:
            return {
                ...state,
                isLoading: false,
            }
        case ApiConstants.signup:
            console.log("action", action)
            return { ...state, isLoading: true, error: null }

        case ApiConstants.signupSuccess:
           
            return {
                ...state,
                result:action.result,
                data:action.result.data,
                isLoading: false,
                status: action.status,
            }

        case ApiConstants.signupFail:
            return {
                ...state,
                isLoading: false,
            }

        case ApiConstants.signupError:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;

    }
}