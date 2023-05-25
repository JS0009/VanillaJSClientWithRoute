import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import fetch from 'node-fetch';

const initialState = {
    products: [],
    error: null
};

export function* fetchProducts() {
    try {
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
        const json = yield call([response, 'json']);
        yield put({ type: 'FETCH_PRODUCTS_SUCCESS', products: json });
    } catch (error) {
        yield put({ type: 'FETCH_PRODUCTS_ERROR', error });
        console.error(error);
    }
}

function* rootSaga() {
    yield takeLatest('FETCH_PRODUCTS', fetchProducts);
}

const sagaMiddleware = createSagaMiddleware();

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: action.products
            };
        case 'FETCH_PRODUCTS_ERROR':
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch({ type: 'FETCH_PRODUCTS' });

store.subscribe(() => {
    console.log('Current state:', store.getState());
});