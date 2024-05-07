import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { configureStore, combineReducers } from '@reduxjs/toolkit';


const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'berry',
        }),
    }),
});

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
const { dispatch } = store

export const getUsers = async () => {
    const response = dispatch(api.endpoints.getUsers.initiate());

    const { data, isLoading, isSuccess, error } = await response

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('Users:', data);
};

