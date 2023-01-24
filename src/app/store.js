import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";

import { cryptoNewsApi } from "../services/cryptoApiNews";

export default configureStore({reducer:{
    [cryptoApi.reducerPath]:cryptoApi.reducer,//Binding your Api to redux store,
    [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer

}})