import ApiConstants from "../../Themes/ApiConstants"

export const createPost=(formData)=>{
    return{
        type:ApiConstants.category,
        payload:formData
    }
    
}