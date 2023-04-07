import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            {/*Incoming*/}
            <NavLink replace to="/todo" className="inactive-link">
                {({ isActive }) =>
                    isActive ? (
                        <li className="active-link">Incoming</li>
                    ) : (
                        <li>Incoming</li>
                    )
                }
            </NavLink>

            {/*Today*/}
            <NavLink replace to="/today" className="inactive-link">
                {({ isActive }) =>
                    isActive ?
                        <li className="active-link">Today</li> : <li>Today</li>
                }
            </NavLink>

            {/*Incoming*/}
            <NavLink replace to="/calendar" className="inactive-link">
                {({ isActive }) =>
                    isActive ? (
                        <li className="active-link">Calendar</li>
                    ) : (
                        <li>Carlendar</li>
                    )
                }
            </NavLink>
        </nav>
    )
}
export default Navbar;