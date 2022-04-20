import React from "react";
import Header from "./components/Header";
import Die from "./components/Die";
import { nanoid } from "nanoid";

export default function App() {

    const randomNumber = () => {
         return Math.floor(Math.random() * 6) + 1;
    }

    const diesValue = () =>{
        const valueNb = 10;
        const arrayDiesValue = []
        for (let i = 0; i < valueNb ; i++) {
            arrayDiesValue.push({value: randomNumber(), isHeld: false, id: nanoid()})
        }
        return arrayDiesValue;
    }

    const [ diceValues, setDiceValues] = React.useState(diesValue())
    console.log(diceValues)
    const newRoll = () => {
        setDiceValues(prevDices => {
            return prevDices.map( prevDice => {
                return prevDice.isHeld ? prevDice : {...prevDice, value: randomNumber()}
            })
        })
    }

    const isLocking = (currentId) => {
        setDiceValues( prevArrayState => {
            return prevArrayState.map( prevDiceState => {
                return prevDiceState.id === currentId ? {...prevDiceState, isHeld: !prevDiceState.isHeld} : prevDiceState
            })
        })
    }


    return (
        <main>
            <div className="game-border">
                <div className="game-board">
                    <Header />
                    <Die 
                        diesNb={diceValues}
                        newNb= {newRoll}
                        locking={isLocking}
                    />
                </div>
            </div>
        </main>
    )
}