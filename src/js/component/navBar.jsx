import React from "react"

 {/*<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4" style={navBarStyle}>
        <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">   
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>*/}

const NavBar = () => {
    const navBarStyle = {
        mb: "20px"
    }
  return (  
 
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4" style={navBarStyle}>
        <div className="container-fluid ">
            <a className="navbar-brand w-75" href="#">Start Bootstrap</a>
            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-md-0 ">
                        <li className="nav-item text-end me-2 me-md-0 ">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Contact</a>
                        </li>
                    </ul>                    
                </div>
            
        </div>
    </nav>
)
}

export default NavBar