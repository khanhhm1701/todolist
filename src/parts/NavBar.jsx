import "../assets/css/TodoList.css";
import { NavLink } from "react-router-dom"

function NavBar(props) {
    
    return (
        <div className="nav-bar">
            <button className="btn-add" onClick={props.handleAddNewJob}>+ Add a new job</button>
            <div className="search-and-logout">
                <div className="search-box">
                    <input
                        type="text"
                        className="search-input"
                        value={props.searchTerm}
                        onChange={(event) => props.setSearchTerm(event.target.value)}
                        placeholder="Search..."
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <NavLink to="/" className="log-out">
                    <i title="Logout" className="btn-logout fa-solid fa-right-from-bracket"></i>
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;