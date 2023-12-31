import React from 'react';
import './App.css';
import Die from './Die';
import {nanoid} from 'nanoid'

function App() {
  
  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++){
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      })
    }
    return newDice
  }

  function holdDice (id) {
    setDice(prevState => prevState.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  const diceElements = dice.map(die => <Die value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>)

  function reroll() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? 
          die :
          {...die, value: Math.ceil(Math.random() * 6)}
  }))
  }
  
  return (
    <main>
        <h1 className='title'>Tenzies</h1>
        <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='container'>
            {diceElements}
        </div>
        <button className='roll-dice' onClick={reroll}>roll</button>
    </main>
  );
}

export default App;
