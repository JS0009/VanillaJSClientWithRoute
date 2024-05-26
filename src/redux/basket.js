import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    arr: []
};

let i = 0; //Почему-то внутри addProduct не сработал?

export const slice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.arr.push(action.payload); // Add the new element to the array
            while (i < state.arr.length) {
                console.log(state.arr[i]);
                i++;
            }
            //console.log(state.arr)
        }
    }
});


const { addProduct } = slice.actions;
export default slice.reducer;

