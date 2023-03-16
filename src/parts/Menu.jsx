import "../assets/css/Menu.css"
import { NavLink } from "react-router-dom"
export default function Menu({handleAdd}) {
    return (
        <div className="menu">
            <div className="menu-logo">
                <img src="https://static.vecteezy.com/system/resources/previews/003/529/153/original/business-to-do-list-flat-icon-modern-style-free-vector.jpg" alt="TODO LOGO" />
            </div>
            <div className="menu-control">
                <div className="control-add" onClick={handleAdd}>
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div className="control-item control-list control-selected">
                    <i className="fa-solid fa-list-check"></i>
                </div>
                <div className="control-item">
                    <i class="fa-solid fa-users"></i>
                </div>
                <div className="control-item">
                    <i class="fa-regular fa-clock"></i>
                </div>
                <div className="control-item">
                    <i class="fa-regular fa-calendar"></i>
                </div>
            </div>
            <NavLink to="/" className="log-out">
                <i title="Logout" className="fa-solid fa-arrow-right-from-bracket"></i>
            </NavLink>
        </div>
    )
}