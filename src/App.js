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
    const [ tenzies, setTenzies] = React.useState(false)


    const newRoll = () => {
        if (!tenzies) {
            setDiceValues(prevDices => {
                return prevDices.map( prevDice => {
                    return prevDice.isHeld ? prevDice : {...prevDice, value: randomNumber()}
                })
            })
        } else if (tenzies) {
            setTenzies(false)
            setDiceValues(diesValue())
        }
        
    }

    const isLocking = (currentId) => {
        setDiceValues( prevArrayState => {
            return prevArrayState.map( prevDiceState => {
                return prevDiceState.id === currentId ? {...prevDiceState, isHeld: !prevDiceState.isHeld} : prevDiceState
            })
        })
    }

    React.useEffect(() => {

        let yesCount = 0;
        let valueArray = []

        diceValues.map( dice => {
            return dice.isHeld && valueArray.push(dice.value)
        })
        
        if (valueArray.length === 10){
            for (let i = 0; i < 10; i++) {
                if (valueArray[0] === valueArray[i]) {
                    yesCount = yesCount + 1;
                } 
            }
        setTenzies(true)
        }
    }, [diceValues])
    
    return (
        <main>
            <div className="game-border">
                <div className="game-board">
                    <Header />
                    <Die 
                        diesNb={diceValues}
                        newNb= {newRoll}
                        locking={isLocking}
                        isTenzies={tenzies}
                    />
                </div>
            </div>
        </main>
    )
}