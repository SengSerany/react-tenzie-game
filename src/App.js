import React from "react";

export default function App() {
    return (
        <main>
            <div className="game-border">
                <div className="game-board">
                    <div className="game-header">
                        <h1>Tenzies</h1>
                        <h3>Roll until all dice are the same. Click<br />each die to freeze it at its current value<br />between rolls.</h3>
                    </div>
                    <div className="game-body">
                        <div className="dies row-1">
                            <div id="1" className="die"><p>1</p></div>
                            <div id="2" className="die"><p>1</p></div>
                            <div id="3" className="die"><p>1</p></div>
                            <div id="4" className="die"><p>1</p></div>
                            <div id="5" className="die"><p>1</p></div>
                        </div>
                        <div className="dies row-2">
                            <div id="6" className="die"><p>1</p></div>
                            <div id="7" className="die"><p>1</p></div>
                            <div id="8" className="die"><p>1</p></div>
                            <div id="9" className="die"><p>1</p></div>
                            <div id="10" className="die"><p>1</p></div>
                        </div>
                        <button type="button" className="roll-btn">Roll</button>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}