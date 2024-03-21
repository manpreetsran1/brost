import ApiConstants from "../../Themes/ApiConstants"

export const contactAction=(formData,history)=>{
    return{
     type:ApiConstants.contact,
     payload:formData,history
    }
}
export const resetAction=()=>{
    return{
     type:ApiConstants.ResetSuccess,
    
    }
}