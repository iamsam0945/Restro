import axios from 'axios'

export const getAllMenu = () => async (dispatch)=>{
    dispatch({type:'GET_MENU_REQUEST'});
    try {
        const res= await axios.get('/api/menus/getAllMenus')
        console.log(res)
        dispatch({type:'GET_MENU_SUCCESS',payload:res.data})
    } catch (err) {                                         
        dispatch({type:'GET_MENU_FAIL',payload:err})
    }
}