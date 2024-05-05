import { useState } from "react";
const URL = 'http://localhost:5200'
const InputTodo = () => {
  const [note, setNote] = useState('')
  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = {note}
      const response = await fetch(URL + '/todos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })
      window.location = '/'
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <>
    <h1 className="text-center mt-5">Input Todo List</h1>
    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
      <input type="text" className="form-control" value={note} onChange={e => setNote(e.target.value)}/>
      <button className="btn btn-success">Add</button>
    </form>
    </>
    
  )
}

export {URL} 
export default InputTodo;