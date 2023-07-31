import React from 'react'

function Navbar(props) {

    
   
    return (

        <div className='Navbar' style={{ position: 'relative', borderRadius: "3px", borderBottom: "2px solid green" }}>
            {/* <div style={bgstyle}> */}

                <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}  >
                    <div className="container-fluid" >
                        <a className="navbar-brand" href="#">{props.title}</a>
                        {/* <img src="https://images-workbench.99static.com/5s5VIxG_Vpve8xejPKYw_OENUoU=/99designs-contests-attachments/99/99241/attachment_99241670" alt='Website Logo' height={80} width={80} /> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>

                                {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Best-Buy</a>
                            </li>
                             */}

                            </ul>

                        </div>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? "dark" : "light"}`}>
                            <input className="form-check-input" onClick={props.change} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}</label>
                        </div>
                        {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-warning" type="submit">Search</button>
                    </form> */}
                    </div>
                </nav>
            </div>
        // </div>
    );
}



export default Navbar;
