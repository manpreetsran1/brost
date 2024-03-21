
import {toast} from "react-toastify"

export const isInternetConnected = (history) => {
    if (!navigator.onLine) {
        toast.dismiss();
        toast.error('Please check your internet connection', {
            position: toast.POSITION.TOP_RIGHT
        });
        // localStorage.removeItem('token');
        // history.push('/')
    }
    return navigator.onLine;
}