import React from 'react';

export function Item(props) {

    return (
        <div>
            <img src={`/img/${props.item.name}.jpg`} />
            <div className="textContainer">
                <p className="textToShow" >{props.item.description}</p>
            </div>
        </div>
    )
}