import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({    ///Object.freeze() use for read on object it can't be modified
    SUCCESS: 'success',
    LOADING: 'loading',
    ERROR: 'error'
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        status: STATUSES,
    }, reducers: {
    setProducts(state, action) {
        //DO NOT DO THIS BECAUSE REDUX CALL SYNC
        // const res = await fetch('https://fakestoreapi.com/products');
        state.data = action.payload
    },
    setStatus(state, action) {
        state.status = action.payload
    }
}
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer


//Thunks MiddleWare

export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data))
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}


