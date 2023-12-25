import { useState } from "react"

function ToDoForm({addTask}) {

    const [input, setInput] =useState('')

    const handlerChange = (e) =>{
        setInput(e.target.value)
    }

    const handlerSubmit = (e) =>{
        e.preventDefault()
        addTask(input)
        setInput('')
    }

    return(
    <form className="todo-form" onSubmit={handlerSubmit}>
        <button className="todo-form_btn">
            +
        </button>
        <input 
        type="text"
        placeholder="Новая задача"
        className="todo-form_text"
        value={input}
        onChange={handlerChange}
        />
    </form>
    )
}

export default ToDoForm