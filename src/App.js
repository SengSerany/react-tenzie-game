import React from "react";
import Header from "./components/Header";
import Die from "./components/Die";

export default function App() {

    return (
        <main>
            <div className="game-border">
                <div className="game-board">
                    <Header />
                    <Die />
                </div>
            </div>
        </main>
    )
}