import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    arr: []
};

const slice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.arr.push(action.payload); // Add the new element to the array
            console.log(state.arr)
        }
    }
});

export const { addProduct } = slice.actions;
export default slice.reducer;

