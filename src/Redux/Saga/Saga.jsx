import Fetch from "../Fetch/Fetch";
import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from "react-toastify";
import ApiConstants from "../../Themes/ApiConstants";

function* PostLoginApi(action) {
    console.log(action.payload, "action")
    try {
        const result = yield call(Fetch.loginApi, action.payload)
        console.log(result, "action",action)
        if (result.status == 1) {
            yield put({
                type: ApiConstants.loginSuccess,
                result: result?.result,
                status: result.status,
                value: action.payload
            });
            action.history.push('HomeClubbox');
            // toast.success(result?.result?.message)
        }
        else {
            yield put({
                type: ApiConstants.loginFail,
                result: result?.result?.data?.data,
            })
            toast.error(result?.result?.message)
        }
    }
    catch (error) {
        yield put({
            type: ApiConstants.loginError,
            result: error
        })
    } 
}
function* postSignupApi(action) {
   
    console.log(action.payload, "action")
    try {
        const result = yield call(Fetch.signupApi, action.payload)
        console.log(result, "action",action)
        
        if (result.status === 1) {
            yield put({
                type: ApiConstants.signupSuccess,
                result: result?.result,
                status: result.status,
                value: action.payload
            })
            action.history.push('Login');
            toast.success(result?.result?.message)
        }
        else {
            yield put({
                type: ApiConstants.signupFail,
                result: result?.result?.data?.data,
            })
            toast.error(result?.result?.message)
        }
    }
    catch (error) {
        yield put({
            type: ApiConstants.signupError,
            result: error
        })
    }
}
function* getPostSaga(action) {
   
    console.log(action?.search, "action")
    try {
        const result = yield call(Fetch.postGet, action?.search,action.isSingle,action.viewType)
        console.log('actionresult',result)
        
        if (result.status === 1) {
            yield put({
                type: ApiConstants.getPostSuccess,
                result: result?.result,
                status: result.status,
            })
        }
        else {
            yield put({
                type: ApiConstants.getPostFail
            })
            toast.error(result?.result?.message)
        }
    }
    catch (error) {
        console.log('eee',error);
        yield put({
            type: ApiConstants.getPostFail,
            result: error
        })
    }
}
function* postCommentSaga(action) {
   
    console.log(action?.search, "action")
    try {
        const result = yield call(Fetch.postAComment, action?.payload)
        console.log('actionresult',result)
        
        if (result.status === 1) {
           action.callback(result)
        }
        else {
            
            toast.error(result?.result?.message)
        }
    }
    catch (error) {
        console.log('eee',error);
       
    }
}

function* postForgotApi(action) {
   
    console.log(action.payload, "action")
    try {
        const result = yield call(Fetch.forgotApi, action.payload)
        console.log(result, "action",action)
        
        if (result.status === 1) {
            yield put({
                type: ApiConstants.forgotSuccess,
                result: result?.result,
                status: result.status,
                value: action.payload
            })
           action.history.push("Login")
            toast.success(result?.result?.message)
        }
        else {
            yield put({
                type: ApiConstants.forgotFail,
                result: result?.result?.data?.data,
            })
            toast.error(result?.result?.message)
        }
    }
    catch (error) {
        yield put({
            type: ApiConstants.forgotError,
            result: error
        })
    }
}
function* postSetPassApi(action) {
   
    console.log(action.payload, "action")
    try {
        const result = yield call(Fetch.setPassApi,action.userId, action.payload)
        console.log(result, "action",action)
        console.log(action.payload,action.userId,"payload")
        if (result.status === 1) {
            yield put({
                type: ApiConstants.setPassSucess,
                result: result?.result,
                status: result.status,
                value: action.payload
            })
            // action.history.push('Login');
            // toast.success(result?.result?.message)
        }
        else {
            yield put({
                type: ApiConstants.setPassFail,
                result: result?.result?.data?.data,
            })
            toast.error(result?.result?.message)
        }
       
    }
    catch (error) {
        yield put({
            type: ApiConstants.setPassError,
            result: error
        })
    }
}
function* postResetPassApi(action) {
   
    console.log(action.userId, "action")
    try {
        const result = yield call(Fetch.ResetPassApi,action.userId)
        console.log(result, "action",action)
        console.log(action.userId,"payload")
        if (result.status === 1) {
           
            yield put({
                type: ApiConstants.resetPassSuccess,
                result: result?.result,
                urlStatus:result?.result.data.isShow,
                status: result.status,
                value: action.payload
            })
        }
        else {
            yield put({
                type: ApiConstants.resetPassFail,
                result: result?.result?.data?.data,
                urlStatus:result?.result.data.isShow,
            })
            // toast.error(result?.result?.message)
        }
       
    }
    catch (error) {
        yield put({
            type: ApiConstants.resetPassError,
           
            result: error
        })
    }
}
function* postDashboardApi(action) {
   
    console.log(action.payload, "action")
    try {
        const result = yield call(Fetch.dashboardApi, action.payload)
        console.log(result, "action",action)
        
        if (result.status === 1) {
            yield put({
                type: ApiConstants.dashboardSuccess,
                result: result?.result,
                status: result.status,
                value: action.payload
            })
           
        }
        else {
            yield put({
                type: ApiConstants.dashboardFail,
                result: result?.result?.data?.data,
            })
        }
    }
    catch (error) {
        yield put({
            type: ApiConstants.dashboardError,
            result: error
        })
    }
}
function* PostContactApi(action) {
    console.log(action.payload, "action")
    try {
        const result = yield call(Fetch.contactApi, action.payload)
        console.log(result, "action",action)
        if (result.status == 1) {
            yield put({
                type: ApiConstants.contactSuccess,
                result: result?.result,
                status: result.status,
                value: action.payload
            });
           
        }
        else {
            yield put({
                type: ApiConstants.contactFail,
                result: result?.result?.data?.data,
            })
            toast.error(result?.result?.message)
        }
    }
    catch (error) {
        yield put({
            type: ApiConstants.contactError,
            result: error
        })
    }
   
}
function* createPostSaga(action) {
    console.log(action.payload, "action")
    try {
        const result = yield call(Fetch.createPost, action.payload)
        console.log(result, "action",action)
        if (result.status == 1) {
            // yield put({
            //     type: ApiConstants.categorySuccess,
            //     result: result?.result,
            //     status: result.status,
            //     value: action.payload
            // });
           toast.success(result?.result?.message)
        }
        else {
            // yield put({
            //     type: ApiConstants.categoryFail,
            //     result: result?.result?.data?.data,
            // })
            toast.error(result?.result?.message)
        }
    }
    catch (error) {
        // yield put({
        //     type: ApiConstants.categoryError,
        //     result: error
        // })
    }
   
}
function* followUserSaga(action) {
    console.log(action.payload, "action")
    try {
        const result = yield call(Fetch.follow, action.userId)
        console.log(result, "action",action)
        if (result.status == 1) {
            // yield put({
            //     type: ApiConstants.categorySuccess,
            //     result: result?.result,
            //     status: result.status,
            //     value: action.payload
            // });
            action.history.goBack()
           toast.success(result?.result?.message)
        }
        else {
            // yield put({
            //     type: ApiConstants.categoryFail,
            //     result: result?.result?.data?.data,
            // })
            toast.error(result?.result?.message)
        }
    }
    catch (error) {
        // yield put({
        //     type: ApiConstants.categoryError,
        //     result: error
        // })
    }
   
}
function* tmdbMoviesListSaga(action) {
    // console.log(action.payload, "action")
    try {
        const result = yield call(Fetch.searchMoviewsFromTmdb, action.text)
        console.log(result, "action",action)
        if (result.status == 1) {
            yield put({
                type:'tmdbMoviesListSUCCESS',
                result: result?.result,
                status: result.status,
                value: action.payload
            });
            // action.history.goBack()
        //    toast.success(result?.result?.message)
        }
        else {
            // yield put({
            //     type: ApiConstants.categoryFail,
            //     result: result?.result?.data?.data,
            // })
            toast.error(result?.result?.message)
        }
    }
    catch (error) {
        // yield put({
        //     type: ApiConstants.categoryError,
        //     result: error
        // })
    }
   
}
function* updateUserSaga(action) {
    console.log(action.payload, "action")
    try {
        const result = yield call(Fetch.updateUser, action.payload)
        console.log(result, "action",action)
        if (result.status == 1) {
            // yield put({
            //     type: ApiConstants.categorySuccess,
            //     result: result?.result,
            //     status: result.status,
            //     value: action.payload
            // });
            
           toast.success(result?.result?.message)
        }
        else {
            // yield put({
            //     type: ApiConstants.categoryFail,
            //     result: result?.result?.data?.data,
            // })
            toast.error(result?.result?.message)
        }
    }
    catch (error) {
        // yield put({
        //     type: ApiConstants.categoryError,
        //     result: error
        // })
    }
   
}


function* getMovieList(action) {
    try {
        const result = yield call(Fetch.movieListApi, {limit: 1000})
   
        if (result.status == 1) {
            yield put({
                type: ApiConstants.movieListSuccess,
                result: result.result.data,
             
            });
        }
        else {
            yield put({
                type: ApiConstants.movieListFail,
   
            })
            toast.error(result?.result?.message)
        }
    }
    catch (error) {
        yield put({
            type: ApiConstants.movieListFail,
            result: error
        })
    } 
}


function* createPayment(action) {
    try {
        const result = yield call(Fetch.createPaymentApi, action.payload)
        console.log(result, "action")
        if (result.status == 1) {
            yield put({
                type: ApiConstants.createPaymentSuccess,
       
             
            });

            action.callback && action.callback(true)
            
        }
        else {
            yield put({
                type: ApiConstants.createPaymentFail
            })
            action.callback && action.callback(null)
       
        }
    }
    catch (error) {
        yield put({
            type: ApiConstants.movieListFail,
            result: error
        })
    } 
}

export default function* rootAuthenticationSaga() {
    yield takeLatest(ApiConstants.login, PostLoginApi)
    yield takeLatest(ApiConstants.signup, postSignupApi)
    yield takeLatest(ApiConstants.getPost, getPostSaga)
    yield takeLatest('sendComment', postCommentSaga)
    yield takeLatest(ApiConstants.forgotPass, postForgotApi)
    yield takeLatest(ApiConstants.dashboard,postDashboardApi)
    yield takeLatest(ApiConstants.contact, PostContactApi)
    yield takeLatest(ApiConstants.setPass, postSetPassApi)
    yield takeLatest(ApiConstants.category, createPostSaga)
    yield takeLatest("followUnfollowAction", followUserSaga)
    yield takeLatest("tmdbMoviesList", tmdbMoviesListSaga)
    yield takeLatest("updateUserAction", updateUserSaga)
    yield takeLatest(ApiConstants.resetPassword, postResetPassApi)
    yield takeLatest(ApiConstants.movieList, getMovieList)
    yield takeLatest(ApiConstants.createPayment, createPayment)
}