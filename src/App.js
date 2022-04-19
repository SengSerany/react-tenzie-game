import React from "react";
import Header from "./components/Header";
import Die from "./components/Die";

export default function App() {

    const randomNumber = () => {
         return Math.floor(Math.random() * 6) + 1;
    }

    const diesValue = () =>{
        const valueNb = 10;
        const arrayDiesValue = []
        const count = 0;
        for (let i = 0; i < valueNb ; i++) {
            arrayDiesValue.push({value: randomNumber(), isHeld: false, id: count + i})
        }
        return arrayDiesValue;
    }

    const [ diceValues, setDiceValues] = React.useState(diesValue())

    const newRoll = () => {
        return setDiceValues(diesValue())
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