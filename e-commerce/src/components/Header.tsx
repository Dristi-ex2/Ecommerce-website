import {NavLink} from "react-router-dom";
import Navbar from "./Navbar";



function Header(){
    return (
        <div>
            <NavLink to="/">
            </NavLink>

            <Navbar />
        </div>
    )
}

export default Header;