import { Link } from "react-router-dom";




const Navbar = () => {
    return (  
        <div className="navbar">
            <h1>Films rent</h1>
            <div className="links">
                <Link to="/" >Home</Link>
                <Link to="/create" >New Film</Link>
                <Link to="/producerCreate" >New Producer</Link>
                <Link to="/producers" >Producer List</Link>
                <Link to="/signup" >Register</Link>
                <Link to="/signin" >Login</Link>
            </div>
        </div>
    );
}
 
export default Navbar;