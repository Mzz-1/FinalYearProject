import {configureStore} from '@reduxjs/toolkit'
import productSlice from './productSlice'
import artistSlice from './artistSlice'

const store = configureStore({
    reducer:{
        product:productSlice.reducer,
        artist:artistSlice.reducer,
    }
})

export default store