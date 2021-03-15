import React from "react"

export const BlankState = () => {
    return (
        <div className="blank">
            <div className="blank-header" style={{maxWidth: 700, margin: '0 auto', width: '100%', textAlign: "center", marginTop: '6rem'}}>
                <img src="https://i.imgur.com/pKopwXp.gif" alt="Loading"/>
                <p style={{fontSize:24, fontWeight: 300}}>
                Please wait, the books are being transported from the API.
                </p>
            </div>
        </div>
    )
}