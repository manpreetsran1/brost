import ApiConstants from "../../../Themes/ApiConstants"

const State = {
    isLoading: false,
    error: null,
    status: 0,
    data:{
        Gigs:0,
        jobs:0
    }   
}

export const dashboardReducer = (state = State, action) => {
    switch (action.type) {
        case ApiConstants.dashboard:
            console.log("action", action)
            return { ...state, isLoading: true, error: null }

        case ApiConstants.dashboardSuccess:
           
            return {
                ...state,
                result:action.result,
                data:action.result.data,
                isLoading: false,
                status: action.status,
            }

        case ApiConstants.dashboardFail:
            return {
                ...state,
                isLoading: false,
            }

        case ApiConstants.dashboardError:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;

    }
}