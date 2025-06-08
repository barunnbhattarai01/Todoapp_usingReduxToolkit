import { createSlice,nanoid } from "@reduxjs/toolkit"; //nanoid create a unique id 

const initialState ={
    todos:[{id:1,text:"Dancing"}]
}


export const todoSlice= createSlice({
    name:'todo',         //name is the property given by redux toolkit
    initialState,
    reducers:{
        addtodo:(state,action)=>{      //addtodo is the functionality and through this we change the state and it take the data into store
            const todo={
                id:nanoid(),
                text:action.payload,  //payload is the object which can be have id ,or anything
                
            }
            state.todos.push(todo)
        },
        removetodo:(state,action)=>{          //it show us how to send data
        state.todos =state.todos.filter((todo)=>
          todo.id!==action.payload           //payload is the actual data that send to reducer and action is the full object
        )
        },
    }
})

export const {addtodo,removetodo} =todoSlice.actions  //actions is a object that tell you what is happen in the code
export default todoSlice.reducer  //wwe have to export the every reducer




