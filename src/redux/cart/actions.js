import CartActionTypes from "./action-types";

export const addProductToCard = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
})

export const removeProductFromCard = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
})

export const aumentarQuantidade = (payload) => ({
    type: CartActionTypes.AUMENTAR_QUANTIDADE,
    payload,
})

export const diminuirQuantidade = (payload) => ({
    type: CartActionTypes.DIMINUIR_QUANTIDADE,
    payload,
})