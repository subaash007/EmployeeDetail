function EmployeeCard(props) {
    return(<div className="card text-left" >
        <p> Id: {props.employee.empId} </p>
        <p> Name: {props.employee.firstName} {props.employee.lastName} </p>
        <p> Date of Joining: {props.employee.dateOfJoining} </p>
        <p> Department: {props.employee.department} </p>
        <p> Position: {props.employee.postion} </p>
        <p> Salary: {props.employee.salary} </p>
    </div>)
}


export default EmployeeCard