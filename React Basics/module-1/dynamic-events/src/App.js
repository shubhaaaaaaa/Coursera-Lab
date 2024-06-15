function App() {
  function handleClick() {
    let userInput = prompt("Guess the number");
    let number = Math.floor(Math.random() * 3);

    alert('Computer: '+ number + ' UserInput '+ userInput);

  }
  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick = {handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
}

export default App;