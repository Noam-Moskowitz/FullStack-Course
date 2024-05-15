import {configureStore} from '@reduxjs/toolkit'
import TodosSlice from './components/learning/ToDo\'s/TodosSlice'
import ProductSlice from './components/product/ProductSlice'

export default configureStore({
    reducer:{
        todos: TodosSlice,
        products: ProductSlice
    }
})