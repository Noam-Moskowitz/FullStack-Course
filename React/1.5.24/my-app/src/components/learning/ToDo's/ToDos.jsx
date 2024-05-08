import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { removeTodo } from './TodosSlice';
import { useDispatch } from 'react-redux';

const ToDos = () => {

    const todosState = useSelector(store => store.todos);
    const dispatch = useDispatch()
    const [selectedTodo, setSelectedTodo] = useState()

    const handleDelete = () => {
        if (selectedTodo) {
            dispatch(removeTodo(selectedTodo))
        }

    }

    return (
        <div className='pl-10 '>
            {todosState.map(todo => (
                <ul key={todo.id} className='border-2 w-48 mt-7 flex items-center justify-between'>
                    <li >
                        <input className='mr-2' type="checkbox" value={todo.text} />
                        {todo.text}
                    </li>
                    <li>
                        <button
                            className='btn uppercase text-sm rounded-md'
                            onClick={() => { setSelectedTodo(todo); handleDelete() }}
                        >delete</button>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default ToDos    
