import React from "react";

const Card = (props) => {

    const cardStyle = {
        width: "18rem",
        margin: "1vw"
    }
    return (
        <div className="card" style={cardStyle}>
            <img src={props.cardImageUrl} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardDescription}</p>
                <a href={props.cardButtonUrl} className="btn btn-primary">{props.cardButtonLabel}</a>
            </div>
        </div>
    )
}

export default Card