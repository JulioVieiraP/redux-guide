import CartActionTypes from "./action-types"

const initialState = {
    Products: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            const productIsAlreadyInCart = state.Products.some(product => product.id === action.payload.id)
            if (productIsAlreadyInCart) {
                return {
                    ...state, Products: state.Products.map(product =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product)
                }
            }

            return {
                ...state,
                Products: [...state.Products, {...action.payload, quantity: 1}]
            }

        case CartActionTypes.REMOVE_PRODUCT:
            return{
                ...state,
                Products: state.Products.filter(product => product.id !== action.payload)
            } 
        case CartActionTypes.AUMENTAR_QUANTIDADE:
            return{
                ...state,
                Products: state.Products.map(item => item.id === action.payload
                ? {...item, quantity: item.quantity + 1}
                : item)
            }
        case CartActionTypes.DIMINUIR_QUANTIDADE:
            return{
                ...state,
                Products: state.Products.map(item => item.id === action.payload
                ? {...item, quantity: item.quantity - 1}
                : item).filter((item) => item.quantity > 0)
            }           
        default:
            return state
    }
}

export default cartReducer;
