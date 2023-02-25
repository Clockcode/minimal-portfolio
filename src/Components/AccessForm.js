import React, {useState} from "react";
import ReactModal from "react-modal";


export default function AccessForm() {
const [modalState, setModalState] = useState(0);

const [password, setPassword] = useState(" ")

const handleChange = e => {
    setPassword({password: e.target.value})
}

const handleSubmit = e => {
    console.log(password);
    e.preventDefault();
}
const openModal = e => {
    e.preventDefault();
    setModalState(1);
}

const closeModal = (e) => {
  e.preventDefault();
  setModalState(0);
};


  return (
    <div>
      <button onClick={openModal}>Trigger Modal</button>
      <ReactModal isOpen={modalState}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={closeModal}>Close Modal</button>
      </ReactModal>
    </div>
  );
}