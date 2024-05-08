import React, { useState } from 'react'
import { addTodo } from './TodosSlice';
import { useDispatch } from 'react-redux';


const AddTodo = () => {

    const [text, setText] = useState(``);

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(text))
        setText(``);
    }

    return (
        <div className='pl-10'>
            <form onSubmit={addTodoHandler}>
                <input
                    className='border-2 border-black'
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className='btn text-sm ml-4'>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
