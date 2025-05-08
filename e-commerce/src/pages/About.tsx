import { useContext } from 'react';
import  {AppContext} from '../context/productcontext'

function About(){


const myName =  useContext(AppContext);

return (
    <div>
    {myName}
    <h1>About</h1>
    </div>
)
}

export default About;