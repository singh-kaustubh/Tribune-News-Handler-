import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
    addClass = (e) => {
        const activeEle = document.querySelectorAll('.active');
        activeEle.classList.remove('active');
        e.target.classList.add('active');
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active" aria-current="page" onClick={this.addClass}>
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item active" aria-current="page" onClick={this.addClass}>
                                <Link className="nav-link" to="/Business" > Business</Link>
                            </li>
                            <li className="nav-item active" aria-current="page" onClick={this.addClass}>
                                <Link className="nav-link" to="/Entertainment"> Entertainment</Link>
                            </li>
                            <li className="nav-item active" aria-current="page" onClick={this.addClass}>
                                <Link className="nav-link" to="/Health"> Health</Link>
                            </li>
                            <li className="nav-item active" aria-current="page" onClick={this.addClass}>
                                <Link className="nav-link" to="/Science"> Science</Link>
                            </li>
                            <li className="nav-item active" aria-current="page" onClick={this.addClass}>
                                <Link className="nav-link" to="/Sports"> Sports</Link>
                            </li>
                            <li className="nav-item active" aria-current="page" onClick={this.addClass}>
                                <Link className="nav-link" to="/Technology"> Technology</Link>
                            </li>
                            <li className="nav-item active" aria-current="page" onClick={this.addClass}>
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar
