import React, { useState } from 'react';

function ChildComponent(props) {
  return (
    <p>Received prop from Parent: {props.message}</p>
  );
}

function ParentComponent() {
  const [message, setMessage] = useState("Hello from Parent");
  const [counter, setCounter] = useState(0); 

  const updateMessage = () => {
    setMessage('New Message from Parent');
  }

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1); 
  }

  return (
    <div>
      <p>Parent Component</p>
      <p>Message: {message}</p>
      <button onClick={updateMessage}>Update Message</button>
      <button onClick={incrementCounter}>Increment Counter</button>
      <p>Counter: {counter}</p> 
      <ChildComponent message={message} />
    </div>
  );
}

export default ParentComponent;
