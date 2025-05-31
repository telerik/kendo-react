export const ADD_PRODUCT = 'ADD_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const CHANGE_EDIT = 'CHANGE_EDIT'

export const DATASTATE_CHANGE = 'DATASTATE_CHANGE'

export function addProduct(payload) {
    return { type: ADD_PRODUCT, payload }
}
export function updateProduct(payload) {
    return { type: UPDATE_PRODUCT, payload }
}
export function deleteProduct(payload) {
    return { type: DELETE_PRODUCT, payload }
}
export function changeEdit(payload) {
    return { type: CHANGE_EDIT, payload }
}

export function datastateChange(payload) {
    return { type: DATASTATE_CHANGE, payload }
}
