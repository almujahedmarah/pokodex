import React from 'react'

export default function Pkomonethumnail({id, image, name, type, _callback }) {
    const style = type + " thumb-container";
    return (
        <div className={style}>
             <div className="number"><h3>#0{id}</h3></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type:{type}</small>
            </div>
        </div>
    )
}
