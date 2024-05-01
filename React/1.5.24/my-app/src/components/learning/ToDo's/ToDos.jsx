import React from 'react'
import { useSelector } from 'react-redux'

const ToDos = () => {

    const todosState = useSelector(store => store.todos);

    return (
        <div>
            {todosState.map(todo=>(
                <ul key={todo.id}>
                    <input type="checkbox" value={todo.text} />
                    {todo.text}
                </ul>
            ))}
        </div>
        )
}       

    export default ToDos    
