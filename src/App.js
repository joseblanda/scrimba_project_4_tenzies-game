import React from 'react';
import './App.css';
import Die from './Die';

function App() {
  
  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++){
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }

  const diceElements = dice.map(die => <Die value={die}/>)

  function reroll() {
    setDice(allNewDice())
  }
  
  return (
    <main>
        <div className='container'>
            {diceElements}
        </div>
        <button className='roll-dice' onClick={reroll}>roll</button>
    </main>
  );
}

export default App;
