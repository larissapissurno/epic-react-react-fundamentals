// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // exercise 1
  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target.elements)
    const username = event.target.elements.usernameInput.value;
    onSubmitUsername(username)
  }

  // extra credit 1
  const inputRef = React.useRef();
  function handleSubmitExtraCredit1(event) {
    event.preventDefault()
    const username = inputRef.current.value;
    onSubmitUsername(username)
  }

  // extra credit 2
  const [errorMessage, setErrorMessage] = React.useState('');
  function handleUsernameInputChange(event) {
    const value = event.target.value;
    const isValid = value === value.toLowerCase();
    setErrorMessage(isValid ? '' : 'Username must be lower case');
  }

  // extra credit 3
  const [inputValue, setInputValue] = React.useState('');
  function handleUsernameInputChangeExtraCredit3(event) {
    const value = event.target.value;
    setInputValue(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmitExtraCredit1}>
      <div style={{display: 'flex', gap: 10}}>
        <label htmlFor="usernameInput">Username:</label>
        <div style={{display: 'flex', gap: 5, flexDirection: 'column'}}>
          <input ref={inputRef} value={inputValue} id="usernameInput" type="text" onChange={handleUsernameInputChangeExtraCredit3} />
          <span role="alert" style={{color: 'red', fontSize: 10}}>{errorMessage}</span>
        </div>
      </div>
      <button type="submit" disabled={!!errorMessage}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
