import "./styles.css";

import { useState } from "react";

function Modal({ show, setShow, children }) {
  const closeModal = () => {
    setShow(false);
  };
  if (show) {
    return (
      <div id="overlay" onClick={closeModal}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
          {children}
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Click</button>
      <Modal show={show} setShow={setShow}>
        <p>Childrenを使っています。</p>
      </Modal>
    </div>
  );
};
export default App;
