import { useEffect, useState } from "react";
import { URL } from "./InputTodo";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`${URL}/todos/${id}`, {
        method: 'DELETE'
      })
      setTodos(todos.filter(todo => { return todo.id !== id }))
    } catch (error) {
      console.error(error.message)
    }
  }
  const getTodos = async () => {
    try {
      const response = await fetch(`${URL}/todos`);
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);
  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.note}</td>
              <td>
                <EditTodo props={todo}/>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;