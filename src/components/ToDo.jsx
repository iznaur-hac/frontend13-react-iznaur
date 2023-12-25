function ToDo({todo, removeTask, changeTask}) {

    return(
    <div className="todo">
        <div 
        className={todo.compelete === true ? "strick todo-text": "todo-text"} 
        onClick={() => changeTask(todo.id)}
        >
            {todo.task}
        </div>
        <div className="todo_delete" onClick={() => removeTask(todo.id)}>
            x
        </div>
    </div>
    )
}

export default ToDo