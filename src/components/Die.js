import React from "react";

export default function Die({diesNb, newNb, locking, isTenzies}) {
    const diesServ = () => {
        const diesElementsArray = []
        for (let i = 0; i < diesNb.length; i++) {
            diesElementsArray.push(
                <div 
                    onClick={() => locking(diesNb[i].id)}
                    key={i} 
                    id={diesNb.id} 
                    className={diesNb[i].isHeld ? "die isLock" : "die"}>
                        <p>{diesNb[i].value}</p>
                </div>
            )
        }
        return diesElementsArray
    }
    
    return (
        <div className="game-body">
            <div className="dies">
                {diesServ()}
            </div>
            <button type="button" className="roll-btn" onClick={newNb}>{isTenzies ? "Restart" : "Roll"}</button>
        </div>
    )
}