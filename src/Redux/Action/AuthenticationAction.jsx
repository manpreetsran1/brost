import ApiConstants from "../../Themes/ApiConstants"

export const loginAction=(formData,history)=>{
    return{
        type:ApiConstants.login,
        payload:formData,history,
    }
}
export const getPostAction=(history,search,viewType,isSingle=null)=>{
    return{
        type:ApiConstants.getPost,
        history,
        search:search,
        isSingle:isSingle,
        viewType:viewType
    }
}
export const addComment=(history,payload,callback)=>{
    return{
        type:'sendComment',
        history,
        payload:payload,
        callback:callback
    }
}

export const signUpAction=(formData,history)=>{
    return{
        type:ApiConstants.signup,
        payload:formData,history
    }
}
export const updateUserAction=(payload,history)=>{
    return{
        type:'updateUserAction',
        payload:payload,
        history
    }
}

export const forgetPassAction=(formData,history)=>{
    return{
        type:ApiConstants.forgotPass,
        payload:formData,history
    }
}
export const setPassAction=(userId,value,history)=>{
console.log(value,"value",history)
    return{
        type:ApiConstants.setPass,
        userId:userId,
        payload:value,history
    }
}

export const resetPasswordAction=(userId)=>{
    return{
        type:ApiConstants.resetPassword,
       userId:userId
    }
}
export const followUnfollowAction=(history,userId)=>{
    return{
        type:"followUnfollowAction",
       userId:userId,
       history:history
    }
}
export const tmdbMoviesList=(history,text)=>{
    return{
        type:"tmdbMoviesList",
       text:text,
       history:history
    }
}


export const getMovieList=(history,text)=>{
    return{
        type:ApiConstants.movieList,
     
    }
}


export const createPayment=(payload,callback)=>{
    return{
        type:ApiConstants.createPayment,
        payload: payload,
        callback
     
    }
}

