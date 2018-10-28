import React from 'react'

export default function ShowPopup(props) {
    return (
        <div className="popup">
            <div className="popup_inner">
                <div className="flex__header">
                    <div className="flex__title">Result</div>
                    <div className="popup__btn" onClick={props.closePopup}>
                        Close
                    </div>
                </div>
                <div className="popup__text">The winner is {props.winner}</div>
            </div>
        </div>
    )
}
