import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    basket: {}
};

let i = 0; //Почему-то внутри addProduct не сработал? Не сбрасывается...

export const slice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const { basket } = state
            const { payload } = action
            const { id, amount } = payload
            console.log(id, amount)
            const old = basket[id + ""] || 0
            basket[id] = old + amount
            //console.log(JSON.stringify(basket))
            //state.basket.push(action.payload); // Add the new element to the array
            // while (i < state.arr.length) {
            //     console.log(state.arr[i]);
            //     i++;
            // }
            //for (const id of state.arr) console.log(id)
        },
        showBasket: (state) => {
            //return `JSON.stringify(state.basket)`
            return "Hello from basket"
        }
    }
});


export const { addProduct, showBasket } = slice.actions;
export default slice.reducer;

