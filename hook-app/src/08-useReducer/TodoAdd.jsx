import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (description.trim().length <= 1) return
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        onNewTodo(newTodo)
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="description"
                placeholder="Aprender ..."
                autoComplete="off"
                className="form-control"
                value={description}
                onChange={onInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1 btn-block">
                Agregar
            </button>
        </form>
    )
}
