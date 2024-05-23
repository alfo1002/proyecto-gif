import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const initialState = [
    /*{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    },*/

]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action)
    }

    return (
        <>
            <h1>TodoApp: 10 <small>pendientes: 2</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList todos={todos} />
                    {/* TodoList */}
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>


        </>

    )
}
