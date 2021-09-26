import React from 'react'

function Navigation() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Title</span>

                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
