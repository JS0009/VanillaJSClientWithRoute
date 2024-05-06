import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { configureStore, combineReducers } from '@reduxjs/toolkit';



// Используйте функцию dispatch для отправки действий
//store.dispatch({ type: 'ACTION_TYPE', payload: 'Some payload' });


const api = createApi({
    reducerPath: 'api',
    //baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        // Define your endpoints here
        // Example:
        getUsers: builder.query({
            query: () => 'berry',
        }),
    }),
});

// Создайте хранилище Redux
const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    // other reducers...
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
const { dispatch } = store

// const { useGetUsersQuery } = api;

// Usage example
export const getUsers = async () => {
    const response = dispatch(api.endpoints.getUsers.initiate());
    //const promise = dispatch(api.endpoints.getPosts.initiate())
    //const { refetch } = promise
    // interact with the cache in the same way as you would with a useFetch...() hook
    const { data, isLoading, isSuccess, error } = await response

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('Users:', data);
};

//getUsers();


// import { createApi, fetchBaseQuery, dispatch } from '@reduxjs/toolkit/query'
// //import type { Pokemon } from './types'

// // Define a service using a base URL and expected endpoints
// export const pokemonApi = createApi({
//     reducerPath: 'pokemonApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//     endpoints: (builder) => ({
//         getPokemonByName: builder.query({
//             query: (name) => `pokemon/${name}`,
//         }),
//     }),
// })

// export default dispatch(pokemonApi.endpoints.getPokemonByName.initiate())
