import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    Products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productIsAlreadyInCart = state.Products.some(product => product.id === action.payload.id)
            if (productIsAlreadyInCart) {
                state.Products = state.Products.map(product =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product)

                return
            }
            state.Products = [...state.Products, { ...action.payload, quantity: 1 }]
        },
        removeProduct: (state, action) => {
            state.Products = state.Products.filter(item => item.id !== action.payload);
        },        
        aumentarQuantidade: (state, action) => {
            state.Products = state.Products.map(item => item.id === action.payload
            ? {...item, quantity: item.quantity + 1}
            : item)
        },
        diminuirQuantidade: (state, action) => {
            state.Products = state.Products.map(item => item.id === action.payload
            ? {...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0}
            : item).filter((item) => item.quantity > 0);
        },
        
    }
})

export const { addProduct, removeProduct, aumentarQuantidade, diminuirQuantidade } = cartSlice.actions

export default cartSlice.reducer