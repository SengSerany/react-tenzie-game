import React from "react";
import Header from "./components/Header";
import Die from "./components/Die";

export default function App() {

    const randomNumber = () => {
         return Math.floor(Math.random() * 10);
    }

    const diesValue = [
        randomNumber(),
        randomNumber(),
        randomNumber(),
        randomNumber(),
        randomNumber(),
        randomNumber(),
        randomNumber(),
        randomNumber(),
        randomNumber(),
        randomNumber()
    ]

    console.log(diesValue)

    return (
        <main>
            <div className="game-border">
                <div className="game-board">
                    <Header />
                    <Die diesNb={diesValue}/>
                </div>
            </div>
        </main>
    )
}