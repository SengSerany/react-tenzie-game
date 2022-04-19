import React from "react";

export default function Die({diesNb}) {

    const diesServ = () => {
        const diesElementsArray = []
        for (let i = 0; i < diesNb.length; i++) {
            diesElementsArray.push(<div key={i} id={i + 1} className="die"><p>{diesNb[i]}</p></div>)
        }
        return diesElementsArray
    }
    
    return (
        <div className="game-body">
            <div className="dies">
                {diesServ()}
            </div>
            <button type="button" className="roll-btn">Roll</button>
        </div>
    )
}