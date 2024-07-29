import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    userinput: '',
    emailinput:'',
    // mobinput:'',
  },
  reducers: {
    setuserinputs: (state, action) => {
      console.log(action.payload)
      state.userinput = action.payload;
      
    },


    updateemailinput: (state,action)=>{
      console.log(action.payload)
      state.emailinput = action.payload;

    } ,

    // updatemobinput: (state,action)=>{
    //   console.log(action.payload)
    //   state.mobinput = action.payload; 
    // }

  },
});

export const { setuserinputs,updateemailinput} = counterSlice.actions;


export default counterSlice.reducer;
