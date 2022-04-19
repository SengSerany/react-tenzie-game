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
        for (let i = 0; i < valueNb ; i++) {
            arrayDiesValue.push(randomNumber())
        }
        return arrayDiesValue;
    }

    const [ diceValues, setDiceValues] = React.useState(diesValue())

    return (
        <main>
            <div className="game-border">
                <div className="game-board">
                    <Header />
                    <Die 
                        diesNb={diceValues}
                        newNb= {setDiceValues}
                    />
                </div>
            </div>
        </main>
    )
}