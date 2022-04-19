import React from "react";

export default function Die() {


    return (
        <div className="game-body">
            <div className="dies">
                <div id="1" className="die"><p>1</p></div>
                <div id="2" className="die"><p>1</p></div>
                <div id="3" className="die"><p>1</p></div>
                <div id="4" className="die"><p>1</p></div>
                <div id="5" className="die"><p>1</p></div>
                <div id="6" className="die"><p>1</p></div>
                <div id="7" className="die"><p>1</p></div>
                <div id="8" className="die"><p>1</p></div>
                <div id="9" className="die"><p>1</p></div>
                <div id="10" className="die"><p>1</p></div>
            </div>
            <button type="button" className="roll-btn">Roll</button>
        </div>
    )
}