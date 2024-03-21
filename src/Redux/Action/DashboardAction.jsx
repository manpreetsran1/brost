import ApiConstants from "../../Themes/ApiConstants"

export const dashboardAction=(formData)=>{
    return{
        type:ApiConstants.dashboard,
        payload:formData
    }
    
}