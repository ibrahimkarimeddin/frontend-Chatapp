import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser:"",
  room_name:"",
  mymessage:"",
  chose:true,
  change:true, 
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    EnterUsertoChat: (state,action)=>{
      console.log(action.payload.room_name)
      state.currentUser = action.payload.a
      state.room_name = action.payload.room_name
    },
    pushmymessage:(state , action)=>{
      state.mymessage =action.payload
    },
    chagechose:(state , action)=>{
      state.chose= !state.chose
    },
    changeltor :(state , action) =>{
      state.change= !state.change

    }
  },
 

})

// Action creators are generated for each case reducer function
export const {EnterUsertoChat,pushmymessage,chagechose , changeltor } = counterSlice.actions

export default counterSlice.reducer