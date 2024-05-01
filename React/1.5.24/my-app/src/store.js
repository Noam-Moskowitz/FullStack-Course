import {configureStore} from '@reduxjs/toolkit'
import TodosSlice from './components/learning/ToDo\'s/TodosSlice'

export default configureStore({
    reducer:{
        todos: TodosSlice
    }
})