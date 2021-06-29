export const initialState={
    texting:""
};


const reducer= (state,action)=>{

    switch(action.type){
        case "SET_TEXT":
            return {
                ...state,
                texting:action.txt
            }
    }
};

export default reducer;