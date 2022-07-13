import axios from "axios";

import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    CLEAR_ERRORS,
  } from "../constants/productConstants";

export const getProduct = () => {
    try{
      dispatchEvent({
        type: ALL_PRODUCT_REQUEST,
        payload: data,
    });
    const { data } = axios.get("/api/v1/products");

    dispatchEvent({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
    });
    }catch (error){
    dispatchEvent({
         type: ALL_PRODUCT_FAIL,
         payload: error.response.data.message,
    });
    }
};

// Clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
};    