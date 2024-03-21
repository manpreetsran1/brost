import ApiConstants from "../../../Themes/ApiConstants"

const State = {
    isLoading: false,
    error: null,
    status: 0,
    data:{
       
    }   
}

export const categoryReducer = (state = State, action) => {
    switch (action.type) {
        case ApiConstants.category:
            console.log("action", action)
            return { ...state, isLoading: true, error: null }

        case ApiConstants.categorySuccess:
           
            return {
                ...state,
                result:action.result,
                data:action.result.data,
                isLoading: false,
                status: action.status,
            }

        case ApiConstants.categoryFail:
            return {
                ...state,
                isLoading: false,
            }

        case ApiConstants.categoryError:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;

    }
}