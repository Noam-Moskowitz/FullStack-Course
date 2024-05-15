import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { removeTodo, updateTodo } from './TodosSlice';
import { useDispatch } from 'react-redux';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';

const ToDos = () => {

    const todosState = useSelector(store => store.todos);
    const dispatch = useDispatch()
    const [selectedTodo, setSelectedTodo] = useState()




    const handleDelete=(td)=>{
        dispatch(removeTodo(td))
    }

    const handleEdit = (td) =>{
        setSelectedTodo(td)
    }





    return (
        <div className='pl-10 flex'>
            <div>
                <AddTodo/> 
            </div>
            <div className='ml-8'>
                {todosState.map(todo => (
                    <div key={todo.id} className='border-2 w-48 mt-7 flex items-center justify-between'>
                        {selectedTodo&& todo.id===selectedTodo.id && (
                                <EditTodo propsTodo={selectedTodo}/>
                            )}
                            {!selectedTodo && (
                                <div>
                                    <div >
                                        <input className='mr-2' type="checkbox" value={todo.text} />
                                        <p className='inline-block'>{todo.text}</p>
                                    </div>
                                    <div>
                                        <button
                                            className='btn text-sm rounded-md'
                                            onClick={() => handleDelete(todo)}
                                        >Delete</button>
                                        <button
                                            className='btn text-sm rounded-md'
                                            onClick={() => handleEdit(todo)}
                                        >Edit</button>
                                    </div>
                                </div>
                            )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ToDos    
