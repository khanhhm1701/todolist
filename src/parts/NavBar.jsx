import "../assets/css/TodoList.css";
import "../assets/css/Navbar.css"

function NavBar({ searchTerm, setSearchTerm }) {

    return (
        <div className="nav-bar">
            <div className="search-box">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type="text"
                    className="search-input"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search..."
                />
            </div>
            <div className="notice-and-logout">
                <div className="nav-notice">
                    <i class="fa-regular fa-bell"></i>
                </div>
                <div className="nav-mail">
                    <i class="fa-regular fa-envelope"></i>
                </div>
                <img src="https://bom.so/2dbXPw" alt="" className="user-icon" />
            </div>
        </div>
    )
}

export default NavBar;