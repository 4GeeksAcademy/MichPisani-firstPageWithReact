import React from "react"

const Jumbotron = (props) =>{
    return (
        <div className="card bg-light mb-3">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    )
}

export  default Jumbotron