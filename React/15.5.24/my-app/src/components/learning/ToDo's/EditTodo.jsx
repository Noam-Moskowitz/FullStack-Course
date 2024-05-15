import React, { useState } from 'react'
import { updateTodo } from './TodosSlice';
import { useDispatch } from 'react-redux';


const EditTodo = ({propsTodo}) => {

    const [text, setText] = useState(propsTodo.text);
    const [todoEdit, setTodoEdit]= useState(propsTodo)

    const dispatch = useDispatch()

    const EditTodoHandler = (e) => {
        e.preventDefault()
        setTodoEdit({...todoEdit, text:text})
        dispatch(updateTodo(todoEdit))
        setText(``);
    }

    return (
        <div className='pl-10'>
            <form onSubmit={EditTodoHandler}>
                <input
                    className='border-2 border-black'
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className='btn text-sm ml-4'>Edit Todo</button>
            </form>
        </div>
    )
}

export default EditTodo
