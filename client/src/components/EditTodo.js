import { useState } from "react"
import { URL } from "./InputTodo"

const EditTodo = ({props}) => {
  let [note, setNote] = useState(props.note)
  const updateNote = async() => {
    try {
      const body = { note }
      const id = props.id
      const response = await fetch(`${URL}/todos/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })
      window.location.reload()
    } catch (error) {
      console.error(error.message)
    }
  }
  return (<>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${props.id}`}>
      Edit
    </button>

    <div className="modal fade" id={`id${props.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => setNote(props.note)}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit todo:
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input type="text" className="form-control" value={note} onChange={e => setNote(e.target.value)}/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setNote(props.note)}>Close</button>
            <button type="button" className="btn btn-primary" 
            onClick={e => {
              e.preventDefault();
              updateNote()
            }}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </>)
}
export default EditTodo