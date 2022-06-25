import { Link } from "react-router-dom"

function Header() {
    return(
            <nav className="d-flex justify-content-between" >
                <div className="nav" >Employee Management</div>

                <div>
                    <Link to='employee' className="mr-5"> Add Employee </Link>
                    <Link to='employees'> Employee List</Link>
                </div>
            </nav>
    )
    
}
export default Header