import { NavLink } from 'react-router-dom';
import './errorpage.css';

function Errorpage(){
    return(
        <div>
            <div className="error">
                <h1>404</h1>
                <p>OH NO!!You're Lost</p>
                <p>The page you are looking for does not exist.How to got here is a mystery.But you cn click the button below to go back to the homepage </p>
                
                <NavLink to="/">
                    <button>HOME</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Errorpage;