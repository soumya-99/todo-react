import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./List";
import db from "./firebase";
import firebase from "firebase";
import "./List.css";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  //!................Adding items to database.................//
  const handleSubmit = (event) => {
    event.preventDefault();
    // setTodo([...todo, input]);
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  //^.............for fetching data from database............//
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setTodo(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
          }))
        );
      });
  }, []);

  return (
    <div className="container">
      <h1 className="display-3 text-center">Todo App</h1>
      <hr />
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <form>
            <label>Enter Something...</label>
            <div className="form-group">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="form-control"
              />
              <button
                disabled={!input}
                onClick={handleSubmit}
                className="btn btn-success"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-sm-12 table-responsive">
          <table className="table table-striped table-bordered table-hover table-sm">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Tasks</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
                {todo.map((todos, count) => (
                  <List todo={todos} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
