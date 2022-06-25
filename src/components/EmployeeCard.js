import { Link } from "react-router-dom"

function EmployeeCard(props) {
    return(<div className="card text-left" >
        <Link className="edit-link" to ={{pathname:`/employee/${props.employee.empId}`}} > Edit  </Link>
        <p> Id: {props.employee.empId} </p>
        <p> Name: {props.employee.firstName} {props.employee.lastName} </p>
        <p> Date of Joining: {props.employee.dateOfJoining} </p>
        <p> Department: {props.employee.department} </p>
        <p> Position: {props.employee.postion} </p>
        <p> Salary: {props.employee.salary} </p>
    </div>)
}

export default EmployeeCard