import { Login } from "../ActionTypes";
const initialState={

    users:[]

}

const Reducers=(state=initialState,action)=>{


    switch(action.type){
        case Login:
            return{

                ...state,
                users:[action.payload]

            }
            default:
                return state;
    
            
}
}
export default Reducers;