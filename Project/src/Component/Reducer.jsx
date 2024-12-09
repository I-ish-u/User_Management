import {createSlice} from "@reduxjs/toolkit"
import {users as initials} from "./employe"

const userSlice=createSlice({
    name:"userlist",
    initialState:initials,
    reducers:{
        addusers:(state,action)=>{
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const updatedUser = action.payload;
            const index = state.findIndex((user) => user.id === updatedUser.id);
            if (index !== -1) {
              state[index] = updatedUser;
            }
        },
        deleteUser: (state,action)=>{
            const deluser=action.payload;
            return state.filter((user)=>user.id!==deluser);
        }
    }
})


export const {addusers,updateUser,deleteUser}=userSlice.actions;
export default userSlice.reducer;