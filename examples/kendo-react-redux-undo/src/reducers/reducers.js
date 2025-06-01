import {
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    CHANGE_EDIT,
    DATASTATE_CHANGE
  } from '../actions/actions'
import { sampleProducts } from '../data/products'
import undoable from 'redux-undo'

export function productsReducer(state = {products: sampleProducts}, action) {
    switch (action.type) {

      case ADD_PRODUCT:
        let makeNewID = Math.random() * new Date().getMilliseconds() * 100
        let newProductID = Math.floor(makeNewID)
        let productForAdd = { inEdit: true, ProductID: newProductID };
        let productsAfterAdd = state.products.map(product => ({
          ...product,
          inEdit: false
      }));
        productsAfterAdd.unshift(productForAdd)
        return {
          ...state,
          products: productsAfterAdd
      };

      case UPDATE_PRODUCT:
        const newProducts = state.products.map(product => {
            const newProduct = {
                ...product
            };
            if(product.ProductID === action.payload.dataItem.ProductID) {
                newProduct[action.payload.field] = action.payload.value;
            }
            return newProduct;
        })
        return Object.assign({ products: newProducts }, {});

      case DELETE_PRODUCT:
        let index = state.products.findIndex(product => product.ProductID === action.payload.ProductID);
        let productsAfterDelete = state.products.slice()
        productsAfterDelete.splice(index, 1)
        return Object.assign({ products: productsAfterDelete }, {});
      case CHANGE_EDIT:
        const newProductsSelection = state.products.map(product => {
            const newProduct = {
                ...product
            };
            if(product.ProductID === action.payload.ProductID) {
                newProduct.inEdit = true
            } else {
                newProduct.inEdit = false
            }
            return newProduct;
        })
        return Object.assign({ products: newProductsSelection }, {});
      default:
        return state
    }
}

export function gridStateReducer(state = {sort: [], filter:[], skip: 0, take: 10}, action) {
    switch (action.type) {
      case DATASTATE_CHANGE:
        const dataState = action.payload.data
        return Object.assign({ sort: dataState.sort, filter: dataState.filter, skip: dataState.skip, take: dataState.take }, {});
      default:
        return state
    }
}

export const undoableProducts = undoable(productsReducer)
export const undoableDataState = undoable(gridStateReducer)