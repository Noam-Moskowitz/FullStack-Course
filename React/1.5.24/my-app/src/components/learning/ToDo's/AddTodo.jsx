import React, { useState } from 'react'
import { addTodo } from './TodosSlice';
import { useDispatch } from 'react-redux';


const AddTodo = () => {

    const [text, setText]= useState(``);

    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(text))
        setText(``);
    }

    return (
        <div>
            <form onSubmit={addTodoHandler}>
                <input 
                    type="text"
                    value={text}
                    onChange={(e)=> setText(e.target.value)}
                />
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
