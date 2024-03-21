import Fetch from "../Fetch/Fetch";
import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from "react-toastify";
import ApiConstants from "../../Themes/ApiConstants";

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
            action.history.push('ContactMessage');
            toast.success(result?.result?.message)
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

export default function* contactSaga() {
    yield takeLatest(ApiConstants.contact, PostContactApi)
    
}