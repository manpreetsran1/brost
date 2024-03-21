import ApiConstants from "../../../Themes/ApiConstants"

const editState = {
    isLoading: false,
    error: null,
    status: 0,
    tmdbMovies:[],
    movieList:[],
    
    data:{}    
}

export const loginReducer = (state = editState, action) => {
    switch (action.type) {
        case ApiConstants.login:
            console.log("action", action)
            return { ...state, isLoading: true, error: null }

        case ApiConstants.loginSuccess:
            console.log("token****", action.result.data)
            localStorage.setItem("token",action.result.data.token)
            localStorage?.setItem('userInfo',JSON.stringify(action.result.data.user))
            // window.location.reload()
            return {
                ...state,
                result:action.result,
                data:action.result.data,
                isLoading: false,
                status: action.status,
            }

        case ApiConstants.loginFail:
            return {
                ...state,
                isLoading: false,
            }

        case 'tmdbMoviesListSUCCESS':
            return{
                ...state,
                tmdbMovies:action.result.results
            }

        case ApiConstants.loginError:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;

    }
}