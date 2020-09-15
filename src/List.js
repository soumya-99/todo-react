import React, { useState } from "react";
import db from "./firebase";
import "./List.css";
import { Modal, Button } from "react-bootstrap";

function List(props) {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  //?...........Edit Stuff.............//

  const handleEdit = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setShow(false);
    setInput("");
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <input
              value={input}
              placeholder={props.todo.todo}
              onChange={(e) => setInput(e.target.value)}
              className="form-control"
            />
            <button
              disabled={!input}
              onClick={handleEdit}
              className="btn btn-primary"
            >
              Update
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <tr>
        <th>{props.count}</th>
        <td>{props.todo.todo}</td>
        <td>
          <button className="btn btn-warning" onClick={() => setShow(true)}>
            Edit
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => db.collection("todos").doc(props.todo.id).delete()}
          >
            Delete
          </button>
        </td>
      </tr>
      </>
  );
}

export default List;
